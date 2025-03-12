import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { prompt, context } = await req.json()

    // System prompt that defines the AI assistant's behavior
    const systemPrompt = `
      You are an AI learning assistant for Smart Scholar, an educational platform.
      Your goal is to help users understand complex academic concepts in a clear, concise manner.
      
      When explaining concepts:
      - Use simple language and analogies when appropriate
      - Break down complex ideas into manageable parts
      - Provide examples to illustrate concepts
      - Cite relevant academic sources when possible
      - Avoid giving incorrect information
      
      Current learning context: ${context || "General academic inquiry"}
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: prompt,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("AI Assistant error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}

