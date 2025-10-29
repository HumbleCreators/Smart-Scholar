"use client"

import { useState } from "react"
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! How can I help you with your studies today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input) return

    setIsLoading(true)
    const newMessages: Message[] = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")

    try {
      const response = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant")
      }

      const data = await response.json()
      setMessages([...newMessages, { role: "assistant", content: data.response }])
    } catch (error) {
      console.error("AI Assistant error:", error)
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again later." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Learning Assistant</CardTitle>
        <CardDescription>Ask any question about your studies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Brain className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
          <Input
            placeholder="Ask a question..."
            className="flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
