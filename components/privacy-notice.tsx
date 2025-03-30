"use client"

import { useState } from "react"
import { AlertCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white rounded-xl shadow-lg p-4 z-50 border border-primary">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-1">AI-Powered Chat</h4>
          <p className="text-sm text-gray-600 mb-3">
            Our chat assistant uses Llama 3.3 70B Instruct via DeepInfra to provide personalized support. Your
            conversations are processed securely to offer the best assistance.
          </p>
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Got it
            </Button>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsVisible(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

