import Link from "next/link"
import { CheerfulHeader } from "@/components/cheerful-header"
import { CheerfulFooter } from "@/components/cheerful-footer"
import { DecorativeBubbles } from "@/components/decorative-bubbles"
import { Smile, Brain, Shield, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      <CheerfulHeader />

      <main className="flex-grow relative">
        <DecorativeBubbles />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">About Smile Therapy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to helping people around the world find their smile again through accessible mental health
              support.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              <Smile className="h-12 w-12 text-sunny" />
            </div>
            <p className="text-lg mb-6">
              Smile Therapy is dedicated to helping people around the world find their smile again through accessible
              mental health support. Our mission is to leverage artificial intelligence to connect individuals with
              appropriate therapy resources, regardless of their location or circumstances.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-lavender bg-opacity-10 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Brain className="h-10 w-10 text-lavender" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-lavender">Our AI-Powered Approach</h3>
                <p className="text-gray-700">
                  We use advanced natural language processing and machine learning algorithms to understand user needs
                  and provide personalized recommendations. Our AI assistant is designed to be empathetic, supportive,
                  and helpful.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-lavender mr-2">•</span> Conduct initial assessments to understand concerns
                  </li>
                  <li className="flex items-start">
                    <span className="text-lavender mr-2">•</span> Provide empathetic responses and support
                  </li>
                  <li className="flex items-start">
                    <span className="text-lavender mr-2">•</span> Recommend relevant therapy resources
                  </li>
                  <li className="flex items-start">
                    <span className="text-lavender mr-2">•</span> Offer multilingual support globally
                  </li>
                </ul>
              </div>

              <div className="bg-mint bg-opacity-10 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  <Shield className="h-10 w-10 text-mint" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-mint">Privacy and Security</h3>
                <p className="text-gray-700">
                  We take your privacy seriously. All conversations with our AI assistant are confidential and
                  encrypted. We believe mental health support should be private and secure.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span> End-to-end encrypted conversations
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span> No personal data stored without consent
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span> GDPR and HIPAA compliant
                  </li>
                  <li className="flex items-start">
                    <span className="text-mint mr-2">•</span> Transparent data policies
                  </li>
                </ul>
              </div>

              <div className="bg-sunny bg-opacity-10 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  <RefreshCw className="h-10 w-10 text-sunny" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-sunny">Continuous Improvement</h3>
                <p className="text-gray-700">
                  We are committed to continuously improving our AI and expanding our resource database to better serve
                  the global community in need of mental health support.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-sunny mr-2">•</span> Regular updates to our AI models
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunny mr-2">•</span> Expansion of resource database
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunny mr-2">•</span> Community feedback integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunny mr-2">•</span> Collaboration with mental health professionals
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 border border-primary border-dashed rounded-xl bg-primary bg-opacity-5">
              <p className="text-center text-gray-700 italic">
                While our AI is a powerful tool, it's important to note that it does not replace professional mental
                health care. We always encourage users to seek help from qualified mental health professionals when
                needed.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Ready to Begin Your Journey?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full bg-primary hover:bg-coral">
                <Link href="/#chatbot">Chat with AI</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-lavender text-lavender hover:bg-lavender hover:text-white"
              >
                <Link href="/resources">Explore Resources</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-mint text-mint hover:bg-mint hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <CheerfulFooter />
    </div>
  )
}

