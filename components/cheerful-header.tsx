import Link from "next/link"
import { Sun } from "lucide-react"

export function CheerfulHeader() {
  return (
    <header className="relative bg-gradient-to-r from-sunny via-primary to-coral text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-white animate-spin-slow" />
            <h1 className="text-2xl font-bold">Smile Therapy</h1>
          </div>
          <div className="space-x-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/resources" className="hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-sunny via-primary to-coral opacity-50"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 75% 50%, 50% 0, 25% 50%, 0 0)" }}
      ></div>
    </header>
  )
}

