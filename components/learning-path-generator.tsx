"use client"

import { useState } from "react"
import { Brain, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface LearningPath {
  path_name: string
  description: string
  modules: {
    title: string
    description: string
    estimated_hours: number
    lessons: {
      title: string
      type: string
      description: string
      resources: {
        title: string
        url?: string
        type: string
      }[]
    }[]
  }[]
}

export function LearningPathGenerator() {
  const [subject, setSubject] = useState("")
  const [background, setBackground] = useState("")
  const [goals, setGoals] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null)
  const [error, setError] = useState("")

  const handleGeneratePath = async () => {
    if (!subject.trim()) {
      setError("Please enter a subject")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/learning-path", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          userBackground: background,
          learningGoals: goals,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate learning path")
      }

      const data = await response.json()
      setLearningPath(data.learningPath)
    } catch (error) {
      console.error("Error generating learning path:", error)
      setError("Failed to generate learning path. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const getTotalHours = () => {
    if (!learningPath) return 0
    return learningPath.modules.reduce((total, module) => total + module.estimated_hours, 0)
  }

  const getTotalLessons = () => {
    if (!learningPath) return 0
    return learningPath.modules.reduce((total, module) => total + module.lessons.length, 0)
  }

  return (
    <div className="space-y-6">
      {!learningPath ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI Learning Path Generator
            </CardTitle>
            <CardDescription>
              Tell us what you want to learn, and our AI will create a personalized learning path for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject or Topic</Label>
              <Input
                id="subject"
                placeholder="e.g., Machine Learning, Quantum Physics, Creative Writing"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="background">Your Background Knowledge (Optional)</Label>
              <Textarea
                id="background"
                placeholder="Describe your current knowledge level and relevant experience"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goals">Learning Goals (Optional)</Label>
              <Textarea
                id="goals"
                placeholder="What do you hope to achieve by learning this subject?"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button onClick={handleGeneratePath} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Learning Path"
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{learningPath.path_name}</CardTitle>
                  <CardDescription className="mt-2">{learningPath.description}</CardDescription>
                </div>
                <Button variant="outline" onClick={() => setLearningPath(null)}>
                  Create New Path
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Modules</h3>
                  <p className="text-2xl font-bold mt-1">{learningPath.modules.length}</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Lessons</h3>
                  <p className="text-2xl font-bold mt-1">{getTotalLessons()}</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <h3 className="text-sm font-medium text-muted-foreground">Estimated Time</h3>
                  <p className="text-2xl font-bold mt-1">{getTotalHours()} hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Learning Modules</h2>
            <Accordion type="single" collapsible className="w-full">
              {learningPath.modules.map((module, moduleIndex) => (
                <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-start text-left">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-3">
                        {moduleIndex + 1}
                      </div>
                      <div>
                        <h3 className="font-medium">{module.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {module.estimated_hours} hours · {module.lessons.length} lessons
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-11 space-y-4">
                      <p className="text-sm">{module.description}</p>

                      <div className="space-y-4">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <Card key={lessonIndex}>
                            <CardHeader className="p-4 pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">{lesson.title}</CardTitle>
                                <span className="text-xs px-2 py-1 rounded-full bg-muted">{lesson.type}</span>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                              <p className="text-sm">{lesson.description}</p>

                              {lesson.resources.length > 0 && (
                                <div className="mt-4">
                                  <h4 className="text-sm font-medium mb-2">Resources:</h4>
                                  <ul className="space-y-1">
                                    {lesson.resources.map((resource, resourceIndex) => (
                                      <li key={resourceIndex} className="text-sm">
                                        {resource.url ? (
                                          <a
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                          >
                                            {resource.title} ({resource.type})
                                          </a>
                                        ) : (
                                          <span>
                                            {resource.title} ({resource.type})
                                          </span>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex justify-center">
            <Button size="lg">Start Learning Path</Button>
          </div>
        </div>
      )}
    </div>
  )
}

