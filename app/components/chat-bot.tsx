"use client";

import type React from "react";

import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Send, Smile, Bot, User, RefreshCw, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ChatBot() {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Configure chat
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: aiHandleSubmit,
    isLoading,
    error,
    setMessages,
  } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-full max-w-3xl mx-auto rounded-3xl shadow-lg overflow-hidden border-t-4 border-primary">
      <CardHeader className="bg-gradient-to-r from-primary to-coral text-white">
        <CardTitle className="flex items-center gap-2">
          <Smile className="h-6 w-6" />
          Chat with our AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] overflow-y-auto p-6 bg-gradient-to-b from-white to-blue-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "mb-4 flex",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "flex items-start gap-2 max-w-[80%]",
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full",
                  message.role === "user" ? "bg-lavender" : "bg-primary"
                )}
              >
                {message.role === "user" ? (
                  <User className="h-5 w-5 text-white" />
                ) : (
                  <Bot className="h-5 w-5 text-white" />
                )}
              </div>
              <div
                className={cn(
                  "rounded-2xl px-4 py-3",
                  message.role === "user"
                    ? "bg-lavender text-white"
                    : "bg-white shadow-md border border-gray-100"
                )}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="flex items-start gap-2 max-w-[80%]">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-primary">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="rounded-2xl px-4 py-3 bg-white shadow-md border border-gray-100">
                <div className="flex flex-col items-center space-y-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  <div className="text-xs text-gray-400">
                    Generating response...{" "}
                    <span className="block text-center">
                      (This may take up to 45 seconds)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="p-3 rounded-lg bg-red-100 text-red-600 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-medium">Error connecting to AI</span>
            </div>
            <p className="text-sm mb-2">
              {error.message || "Something went wrong. Please try again."}
            </p>
            <div className="flex gap-2 mt-2">
              <Button
                size="sm"
                variant="outline"
                className="text-xs"
                onClick={() => setMessages([])}
              >
                <RefreshCw className="h-3 w-3 mr-1" /> Retry
              </Button>
              <Button size="sm" variant="outline" className="text-xs" asChild>
                <Link href="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="border-t p-4">
        <form onSubmit={aiHandleSubmit} className="w-full flex gap-2">
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="flex-grow rounded-xl resize-none focus-visible:ring-primary"
            disabled={isLoading}
          />
          <Button
            type="submit"
            className="rounded-full bg-primary hover:bg-coral"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
