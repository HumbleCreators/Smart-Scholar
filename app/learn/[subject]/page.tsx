"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Brain,
  MessageSquare,
  ThumbsUp,
  ChevronRight,
  ChevronLeft,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function LearnPage({ params }) {
  const { subject } = params
  const [showExplanation, setShowExplanation] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [showAIHelp, setShowAIHelp] = useState(false)

  const subjectTitle = subject
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const handleSubmitAnswer = () => {
    setAnswerSubmitted(true)
  }

  const handleNextQuestion = () => {
    setActiveQuestion((prev) => prev + 1)
    setAnswerSubmitted(false)
    setUserAnswer("")
    setShowExplanation(false)
  }

  const handlePrevQuestion = () => {
    setActiveQuestion((prev) => Math.max(0, prev - 1))
    setAnswerSubmitted(false)
    setUserAnswer("")
    setShowExplanation(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Dashboard</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Smart Scholar</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Track Progress</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="rounded-full h-8 w-8" />
              <span>Alex Johnson</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="container py-6 md:py-8 flex-1 grid gap-6 md:grid-cols-[1fr_300px]">
        <main className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">{subjectTitle}</h1>
                <p className="text-muted-foreground">Module 3: Advanced Concepts</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setShowAIHelp(!showAIHelp)}>
                  <Lightbulb className="h-4 w-4 mr-2" />
                  AI Help
                </Button>
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Resources
                </Button>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Progress value={65} className="h-2 flex-1" />
              <span className="text-sm text-muted-foreground">65% Complete</span>
            </div>
          </div>

          <Tabs defaultValue="learn">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="learn">Learn</TabsTrigger>
              <TabsTrigger value="practice">Practice</TabsTrigger>
              <TabsTrigger value="discuss">Discuss</TabsTrigger>
            </TabsList>
            <TabsContent value="learn" className="mt-6 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Understanding Neural Networks</h2>
                  <div className="prose max-w-none">
                    <p>
                      Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed
                      to recognize patterns. They interpret sensory data through a kind of machine perception, labeling
                      or clustering raw input.
                    </p>
                    <p className="mt-4">
                      The patterns they recognize are numerical, contained in vectors, into which all real-world data,
                      be it images, sound, text or time series, must be translated.
                    </p>
                    <div className="my-6 flex justify-center">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Neural Network Architecture"
                        className="rounded-lg border"
                      />
                    </div>
                    <h3 className="text-lg font-bold mt-6 mb-2">Key Components</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Neurons:</strong> The basic unit of a neural network, which takes inputs, applies a
                        transformation, and produces an output.
                      </li>
                      <li>
                        <strong>Weights:</strong> Parameters that determine the strength of the connection between
                        neurons.
                      </li>
                      <li>
                        <strong>Activation Functions:</strong> Non-linear functions that determine the output of a
                        neuron given an input or set of inputs.
                      </li>
                      <li>
                        <strong>Layers:</strong> Groups of neurons that process inputs and pass outputs to the next
                        layer.
                      </li>
                    </ul>
                    <h3 className="text-lg font-bold mt-6 mb-2">How Neural Networks Learn</h3>
                    <p>Neural networks learn through a process called backpropagation, which involves:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Forward propagation of training data through the network</li>
                      <li>Calculation of the error between the predicted output and the actual output</li>
                      <li>Backward propagation of the error to adjust the weights</li>
                      <li>Repeating the process to minimize the error</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="practice" className="mt-6 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Practice Questions</h2>
                    <div className="text-sm text-muted-foreground">Question {activeQuestion + 1} of 5</div>
                  </div>

                  <div className="space-y-6">
                    {activeQuestion === 0 && (
                      <div>
                        <h3 className="text-lg font-medium mb-2">
                          What is the primary purpose of an activation function in a neural network?
                        </h3>
                        <div className="space-y-4 mt-4">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="option1"
                              name="question1"
                              className="h-4 w-4"
                              disabled={answerSubmitted}
                            />
                            <label htmlFor="option1" className="text-sm">
                              To initialize the weights of the network
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="option2"
                              name="question1"
                              className="h-4 w-4"
                              disabled={answerSubmitted}
                            />
                            <label htmlFor="option2" className="text-sm">
                              To introduce non-linearity into the network's output
                            </label>
                            {answerSubmitted && <CheckCircle2 className="h-4 w-4 text-green-500 ml-2" />}
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="option3"
                              name="question1"
                              className="h-4 w-4"
                              disabled={answerSubmitted}
                            />
                            <label htmlFor="option3" className="text-sm">
                              To normalize the input data
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="option4"
                              name="question1"
                              className="h-4 w-4"
                              disabled={answerSubmitted}
                            />
                            <label htmlFor="option4" className="text-sm">
                              To calculate the loss function
                            </label>
                          </div>
                        </div>

                        {answerSubmitted && (
                          <div className="mt-6">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setShowExplanation(!showExplanation)}
                              className="mb-4"
                            >
                              {showExplanation ? "Hide Explanation" : "Show Explanation"}
                            </Button>

                            {showExplanation && (
                              <div className="bg-muted p-4 rounded-lg">
                                <h4 className="font-medium mb-2">Explanation</h4>
                                <p className="text-sm">
                                  Activation functions introduce non-linearity into the output of a neuron. Without
                                  activation functions, neural networks would only be able to learn linear
                                  relationships, regardless of the number of layers. The non-linearity allows the
                                  network to learn complex patterns and relationships in the data.
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {activeQuestion === 1 && (
                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Explain the concept of backpropagation in neural networks and why it's important.
                        </h3>
                        <Textarea
                          placeholder="Type your answer here..."
                          className="min-h-[150px]"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          disabled={answerSubmitted}
                        />

                        {answerSubmitted && (
                          <div className="mt-6">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setShowExplanation(!showExplanation)}
                              className="mb-4"
                            >
                              {showExplanation ? "Hide Explanation" : "Show Explanation"}
                            </Button>

                            {showExplanation && (
                              <div className="bg-muted p-4 rounded-lg">
                                <h4 className="font-medium mb-2">Sample Answer</h4>
                                <p className="text-sm">
                                  Backpropagation is an algorithm used to train neural networks by calculating gradients
                                  of the loss function with respect to the network weights. It works by propagating the
                                  error from the output layer back through the network, layer by layer, and updating the
                                  weights based on their contribution to the error. This process is crucial because it
                                  allows neural networks to learn from their mistakes and improve their predictions over
                                  time. Without backpropagation, neural networks would not be able to automatically
                                  adjust their weights to minimize errors.
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={handlePrevQuestion} disabled={activeQuestion === 0}>
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>

                    {!answerSubmitted ? (
                      <Button onClick={handleSubmitAnswer}>Submit Answer</Button>
                    ) : (
                      <Button onClick={handleNextQuestion} disabled={activeQuestion >= 4}>
                        Next
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discuss" className="mt-6 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Discussion Forum</h2>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User avatar"
                          className="rounded-full h-10 w-10"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Sarah Chen</h3>
                            <span className="text-xs text-muted-foreground">2 days ago</span>
                          </div>
                          <p className="text-sm mt-2">
                            I'm having trouble understanding the difference between ReLU and Sigmoid activation
                            functions. Can someone explain when to use each one?
                          </p>
                          <div className="flex items-center gap-4 mt-4">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>12</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>4 replies</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="User avatar"
                          className="rounded-full h-10 w-10"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Michael Johnson</h3>
                            <span className="text-xs text-muted-foreground">1 week ago</span>
                          </div>
                          <p className="text-sm mt-2">
                            Has anyone implemented a convolutional neural network for image classification? I'm looking
                            for tips on optimizing the architecture.
                          </p>
                          <div className="flex items-center gap-4 mt-4">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>8</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>2 replies</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-medium mb-2">Start a New Discussion</h3>
                      <Textarea placeholder="Ask a question or share your thoughts..." className="min-h-[100px]" />
                      <div className="flex justify-end mt-2">
                        <Button>Post</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        <aside className={`space-y-6 ${showAIHelp ? "block" : "hidden md:block"}`}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Brain className="h-4 w-4 text-primary" />
                  AI Learning Assistant
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 md:hidden"
                  onClick={() => setShowAIHelp(false)}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Ask any question about neural networks or this lesson.
              </p>
              <div className="space-y-4 max-h-[300px] overflow-y-auto mb-4">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <HelpCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    Can you explain how backpropagation works in simple terms?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Brain className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg text-sm">
                    <p>
                      Think of backpropagation like learning from mistakes. When a neural network makes a prediction, it
                      compares that prediction to the actual answer and calculates how wrong it was (the error).
                    </p>
                    <p className="mt-2">
                      Backpropagation then works backward through the network, adjusting each weight based on how much
                      it contributed to the error. It's like tracing back through a series of decisions to figure out
                      which ones led to a mistake, and then adjusting those decisions for next time.
                    </p>
                    <p className="mt-2">
                      This process repeats many times with many examples, gradually improving the network's accuracy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Textarea placeholder="Ask a question..." className="min-h-[60px]" />
              </div>
              <div className="flex justify-end mt-2">
                <Button size="sm">Ask AI</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Neural Network Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Activation Functions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                  <span className="text-sm">Backpropagation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                  <span className="text-sm">Gradient Descent</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                  <span className="text-sm">Loss Functions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-sm text-primary hover:underline flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Neural Networks and Deep Learning (e-book)</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-primary hover:underline flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M15.9099 11.5528C16.1671 11.7095 16.1671 12.0906 15.9099 12.2473L10.3071 15.4999C10.0572 15.6529 9.75 15.4695 9.75 15.1778L9.75 8.62221C9.75 8.33057 10.0572 8.14716 10.3071 8.30017L15.9099 11.5528Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Video: Visualizing Neural Networks</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-primary hover:underline flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 5H21V19H3V5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 9H7.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 9H17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 13H7.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 13H17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 17H7.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 17H17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Interactive Tutorial: Building Your First Neural Network</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-primary hover:underline flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M9 7H7V17H9V7Z" fill="currentColor" />
                      <path d="M17 7H15V17H17V7Z" fill="currentColor" />
                      <path d="M13 7H11V17H13V7Z" fill="currentColor" />
                    </svg>
                    <span>Research Paper: Recent Advances in Neural Networks</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}

