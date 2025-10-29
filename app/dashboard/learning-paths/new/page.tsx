"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NewLearningPathPage() {
  const [subject, setSubject] = useState("")
  const [userBackground, setUserBackground] = useState("")
  const [learningGoals, setLearningGoals] = useState("")
  const [generatedPath, setGeneratedPath] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleGeneratePath = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setGeneratedPath(null)

    try {
      const response = await fetch("/api/learning-path", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, userBackground, learningGoals }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate learning path")
      }

      const data = await response.json()
      setGeneratedPath(data.learningPath)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSavePath = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("You must be logged in to save a learning path.");
      return;
    }

    if (!generatedPath) {
      setError("No learning path has been generated to save.");
      return;
    }

    const { error } = await supabase.from("learning_paths").insert([
      {
        user_id: user.id,
        path_name: generatedPath.path_name,
        description: generatedPath.description,
        modules: generatedPath.modules,
      },
    ]);

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard/learning-paths");
    }
  };

  return (
    <div className="container py-6 md:py-8">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Learning Path</CardTitle>
          <CardDescription>
            Tell us what you want to learn, and our AI will create a personalized learning path for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGeneratePath} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="e.g., Quantum Physics"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userBackground">Your Background</Label>
              <Textarea
                id="userBackground"
                placeholder="e.g., I have a basic understanding of high school physics."
                required
                value={userBackground}
                onChange={(e) => setUserBackground(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="learningGoals">Learning Goals</Label>
              <Textarea
                id="learningGoals"
                placeholder="e.g., I want to understand the concept of quantum tunneling."
                required
                value={learningGoals}
                onChange={(e) => setLearningGoals(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate Learning Path"}
            </Button>
          </form>

          {generatedPath && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold">{generatedPath.path_name}</h2>
              <p className="text-muted-foreground">{generatedPath.description}</p>
              <div className="mt-4 space-y-4">
                {generatedPath.modules.map((module, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-bold">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                    <p className="text-sm mt-2">Estimated time: {module.estimated_hours} hours</p>
                    <ul className="mt-2 list-disc list-inside">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="text-sm">
                          {lesson.title} ({lesson.type})
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Button onClick={handleSavePath} className="mt-4">
                Save Learning Path
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
