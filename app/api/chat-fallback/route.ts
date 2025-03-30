import { NextResponse } from "next/server"

// Simple responses for common mental health topics
const fallbackResponses = {
  anxiety:
    "Anxiety can be challenging to deal with. Some helpful resources include meditation apps like Headspace or Calm, and organizations like the Anxiety and Depression Association of America. Deep breathing exercises and mindfulness can also help in the moment.",

  depression:
    "I'm sorry to hear you're feeling down. It's important to know you're not alone. Resources like BetterHelp or the Depression and Bipolar Support Alliance can provide support. Remember that professional help is available and effective.",

  stress:
    "Dealing with stress is important for your wellbeing. Techniques like progressive muscle relaxation, regular exercise, and adequate sleep can help. Apps like Calm or Headspace offer guided meditations specifically for stress reduction.",

  sleep:
    "Good sleep is essential for mental health. Try establishing a regular sleep schedule, avoiding screens before bed, and creating a comfortable sleep environment. Resources like the National Sleep Foundation offer more tips.",

  resources:
    "We have many resources available on our site. You can visit our Resources page to find organizations, apps, and self-help materials organized by topic.",

  help: "I'm here to help connect you with mental health resources. You can ask about specific topics like anxiety, depression, or stress, or browse our Resources page for a comprehensive list.",

  default:
    "Thank you for reaching out. While I'm currently experiencing connection issues, I'd still like to help. Please visit our Resources page for a comprehensive list of mental health resources, or try again later when our connection improves.",
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Get the last user message
    const lastUserMessage = messages.filter((msg: any) => msg.role === "user").pop()

    const userText = lastUserMessage?.content.toLowerCase() || ""

    // Simple keyword matching for fallback responses
    let responseText = fallbackResponses.default

    for (const [topic, response] of Object.entries(fallbackResponses)) {
      if (userText.includes(topic)) {
        responseText = response
        break
      }
    }

    // Add a suggestion to visit resources
    responseText += "\n\nWould you like to explore our resources page for more information?"

    return NextResponse.json({
      role: "assistant",
      content: responseText,
    })
  } catch (error) {
    console.error("Error in fallback chat API:", error)
    return NextResponse.json({
      role: "assistant",
      content:
        "I apologize, but I'm having trouble responding right now. Please try again later or visit our Resources page for helpful information.",
    })
  }
}

