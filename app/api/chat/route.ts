import { createDeepInfra } from "@ai-sdk/deepinfra";
import { streamText } from "ai";
import {
  therapyResources,
  commonMentalHealthIssues,
  copingStrategies,
} from "@/lib/resources-data";

// Increase the timeout for longer conversations
export const maxDuration = 60;

// Define the system prompt for our therapy assistant
const SYSTEM_PROMPT = `You are a compassionate and supportive AI therapy assistant for Smile Therapy.
Your goal is to help users find mental health resources and provide emotional support.

Guidelines:
- Be empathetic, warm, and understanding
- Focus on providing helpful resources and coping strategies
- Encourage users to seek professional help when appropriate
- Never diagnose medical conditions or prescribe treatments
- Maintain a positive, uplifting tone while acknowledging difficulties
- If asked about self-harm or serious mental health crises, always encourage contacting emergency services
- Provide specific resource recommendations from our database when relevant

Here is our resource database that you can reference:
${JSON.stringify(therapyResources, null, 2)}

Here are common mental health issues and recommended resources:
${JSON.stringify(commonMentalHealthIssues, null, 2)}

Here are coping strategies you can suggest:
${JSON.stringify(copingStrategies, null, 2)}

Remember that your purpose is to help users find their smile again through supportive conversation and connecting them with appropriate resources.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Convert messages to the format expected by the AI SDK
    const formattedMessages = messages.map((message: any) => ({
      role: message.role,
      content: message.content,
    }));

    const deepinfra = createDeepInfra({
      apiKey: process.env.DEEPINFRA_API_KEY,
    });

    // Use streamText to get a proper stream with the AI SDK v4
    const result = streamText({
      model: deepinfra("meta-llama/Llama-3.3-70B-Instruct"),
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...formattedMessages,
      ],
      temperature: 0.7,
      maxTokens: 800,
    });

    // Return a streaming response that the useChat hook can process
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in chat API:", error);

    // Return a properly formatted error response
    return new Response(
      JSON.stringify({
        error: "There was an error processing your request",
        details:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
