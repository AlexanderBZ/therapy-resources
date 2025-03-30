"use client"

import { useEffect, useState } from "react"

interface Bubble {
  id: number
  size: number
  top: number
  left: number
  animationDuration: number
}

export function DecorativeBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const newBubbles: Bubble[] = []
    const count = 15 // Number of bubbles

    for (let i = 0; i < count; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 100 + 20, // Size between 20-120px
        top: Math.random() * 100, // Position from top (%)
        left: Math.random() * 100, // Position from left (%)
        animationDuration: Math.random() * 10 + 10, // Animation duration between 10-20s
      })
    }

    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.animationDuration}s`,
          }}
        />
      ))}
    </div>
  )
}

