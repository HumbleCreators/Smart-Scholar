import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { subject, userBackground, learningGoals } = await req.json()

    // System prompt that defines how the learning path should be generated
    const systemPrompt = `
      You are an AI education expert for Smart Scholar, an educational platform.
      Your task is to create a personalized learning path for a student based on their background and goals.
      
      The learning path should:
      - Be structured with clear modules and lessons
      - Include estimated time commitments
      - Provide a mix of theory and practical exercises
      - Adapt to the user's prior knowledge
      - Build toward their specific learning goals
      - **Include relevant academic resources from arXiv, Google Scholar, and other open-access databases.**
      
      Format the response as a structured JSON object with:
      - path_name: String
      - description: String
      - modules: Array of module objects, each containing:
        - title: String
        - description: String
        - estimated_hours: Number
        - lessons: Array of lesson objects, each containing:
          - title: String
          - type: String (e.g., "reading", "video", "exercise", "quiz")
          - description: String
          - resources: Array of resource objects
    `

    const prompt = `
      Generate a personalized learning path for a student with the following details:
      
      Subject: ${subject}
      User Background: ${userBackground}
      Learning Goals: ${learningGoals}
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: prompt,
    })

    // Parse the response as JSON
    const learningPath = JSON.parse(text)

    return NextResponse.json({ learningPath })
  } catch (error) {
    console.error("Learning path generation error:", error)
    return NextResponse.json({ error: "Failed to generate learning path" }, { status: 500 })
  }
}

