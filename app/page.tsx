import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChatBot } from "./components/chat-bot"
import { CheerfulHeader } from "@/components/cheerful-header"
import { CheerfulFooter } from "@/components/cheerful-footer"
import { DecorativeBubbles } from "@/components/decorative-bubbles"
import { Smile, MessageCircleHeart, Lightbulb, Hand } from "lucide-react"
import { Suspense } from "react"

// Loading component for ChatBot
function ChatBotLoading() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl shadow-lg overflow-hidden border-t-4 border-primary bg-white p-6">
      <div className="h-[400px] flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p className="text-gray-500">Loading our AI assistant...</p>
        <p className="text-xs text-gray-400 mt-2">We're preparing to help with your mental health questions</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      <CheerfulHeader />

      <main className="flex-grow relative">
        <DecorativeBubbles />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <section className="mb-16 text-center">
            <div className="inline-block p-4 bg-white bg-opacity-80 rounded-3xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
              <Smile className="h-16 w-16 mx-auto text-primary mb-4" />
              <h2 className="text-4xl font-bold mb-4 gradient-text">Welcome to Smile Therapy</h2>
            </div>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get personalized support and access to global therapy resources to help you
              <span className="text-primary font-bold"> smile again</span>.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-coral text-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="#chatbot">
                <MessageCircleHeart className="mr-2 h-5 w-5" />
                Start Chatting
              </Link>
            </Button>
          </section>

          <section id="chatbot" className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-semibold mb-2 text-lavender">Chat with our AI Assistant</h3>
              <p className="text-gray-600">Share your thoughts and get personalized support</p>
            </div>
            <Suspense fallback={<ChatBotLoading />}>
              <ChatBot />
            </Suspense>
          </section>

          <section className="mb-16 relative">
            <div className="absolute inset-0 wave-bg opacity-40 rounded-3xl"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold mb-2 text-sky">How It Works</h3>
                <p className="text-gray-600">Three simple steps to find your smile again</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform hover:scale-105 border-l-4 border-sunny">
                  <div className="bg-sunny bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <MessageCircleHeart className="h-8 w-8 text-coral" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-center text-gray-800">1. Chat with AI</h4>
                  <p className="text-gray-600">Share your thoughts and feelings with our friendly AI assistant.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform hover:scale-105 border-l-4 border-mint">
                  <div className="bg-mint bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Lightbulb className="h-8 w-8 text-mint" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-center text-gray-800">2. Get Recommendations</h4>
                  <p className="text-gray-600">Receive personalized resource suggestions tailored to your needs.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform hover:scale-105 border-l-4 border-lavender">
                  <div className="bg-lavender bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Hand className="h-8 w-8 text-lavender" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-center text-gray-800">3. Access Resources</h4>
                  <p className="text-gray-600">Explore our curated resources and begin your journey to wellness.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="inline-block bg-white rounded-3xl shadow-lg p-8 max-w-3xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to start your journey?</h3>
              <p className="mb-6 text-gray-600">
                Join thousands who have found their smile again with our supportive community and resources.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="rounded-full bg-lavender hover:bg-purple-500">
                  <Link href="/resources">Explore Resources</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <CheerfulFooter />
    </div>
  )
}

