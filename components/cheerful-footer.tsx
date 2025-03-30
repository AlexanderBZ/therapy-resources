import { Heart } from "lucide-react"

export function CheerfulFooter() {
  return (
    <footer className="bg-gradient-to-r from-sunny via-primary to-coral text-primary-foreground py-6 relative">
      <div
        className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-sunny via-primary to-coral opacity-50"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 75% 50%, 50% 100%, 25% 50%, 0 100%)" }}
      ></div>
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> by Smile Therapy
        </p>
        <p className="mt-2">&copy; 2025 Smile Therapy. All rights reserved.</p>
      </div>
    </footer>
  )
}

