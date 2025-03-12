import Link from "next/link"
import {
  BookOpen,
  Brain,
  BarChart3,
  Clock,
  Search,
  Star,
  ChevronRight,
  BookMarked,
  Lightbulb,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Smart Scholar</span>
          </div>
          <div className="flex-1 px-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for any subject or topic..."
                className="w-full bg-background pl-8 rounded-full"
              />
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <BookMarked className="h-5 w-5" />
              <span className="sr-only">Saved</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Lightbulb className="h-5 w-5" />
              <span className="sr-only">Recommendations</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="rounded-full h-8 w-8" />
              <span>Alex Johnson</span>
            </Button>
          </nav>
        </div>
      </header>
      <div className="container py-6 md:py-8 flex-1 grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr_300px]">
        <aside className="hidden md:block">
          <nav className="grid gap-2 text-sm">
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link href="/dashboard">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link href="/dashboard/learning-paths">
                <BookOpen className="h-4 w-4" />
                Learning Paths
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link href="/dashboard/library">
                <BookMarked className="h-4 w-4" />
                My Library
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link href="/dashboard/discussions">
                <MessageSquare className="h-4 w-4" />
                Discussions
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link href="/dashboard/progress">
                <BarChart3 className="h-4 w-4" />
                Progress
              </Link>
            </Button>
            <Button variant="ghost" className="justify-start gap-2" asChild>
              <Link href="/dashboard/settings">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Settings
              </Link>
            </Button>
          </nav>
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Current Subjects</h3>
            <nav className="grid gap-1 text-sm">
              <Button variant="ghost" className="justify-start text-left h-auto py-2" asChild>
                <Link href="/dashboard/subjects/machine-learning">
                  <div>
                    <div className="font-medium">Machine Learning</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      <Progress value={65} className="h-1 mb-1" />
                      65% Complete
                    </div>
                  </div>
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start text-left h-auto py-2" asChild>
                <Link href="/dashboard/subjects/quantum-physics">
                  <div>
                    <div className="font-medium">Quantum Physics</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      <Progress value={32} className="h-1 mb-1" />
                      32% Complete
                    </div>
                  </div>
                </Link>
              </Button>
              <Button variant="ghost" className="justify-start text-left h-auto py-2" asChild>
                <Link href="/dashboard/subjects/cognitive-psychology">
                  <div>
                    <div className="font-medium">Cognitive Psychology</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      <Progress value={78} className="h-1 mb-1" />
                      78% Complete
                    </div>
                  </div>
                </Link>
              </Button>
            </nav>
          </div>
        </aside>
        <main className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <Button>Continue Learning</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Learning Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.5 hours</div>
                <p className="text-xs text-muted-foreground">+2.5 hours from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Subjects Explored</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Across 4 disciplines</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8 days</div>
                <p className="text-xs text-muted-foreground">Your best: 14 days</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="current">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="current">Current Learning</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <Link href="/dashboard/learning-paths" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>
            <TabsContent value="current" className="space-y-4 mt-6">
              <LearningPathCard
                title="Machine Learning Fundamentals"
                description="Learn the core concepts and algorithms of machine learning"
                progress={65}
                lastAccessed="2 hours ago"
                image="/placeholder.svg?height=200&width=300"
              />
              <LearningPathCard
                title="Introduction to Quantum Physics"
                description="Explore the fascinating world of quantum mechanics and its applications"
                progress={32}
                lastAccessed="Yesterday"
                image="/placeholder.svg?height=200&width=300"
              />
              <LearningPathCard
                title="Cognitive Psychology: Memory and Learning"
                description="Understand how memory works and how to optimize learning strategies"
                progress={78}
                lastAccessed="3 days ago"
                image="/placeholder.svg?height=200&width=300"
              />
            </TabsContent>
            <TabsContent value="recommended" className="space-y-4 mt-6">
              <LearningPathCard
                title="Data Visualization Techniques"
                description="Master the art of presenting data in clear and effective ways"
                progress={0}
                lastAccessed="Not started"
                image="/placeholder.svg?height=200&width=300"
              />
              <LearningPathCard
                title="Neural Networks and Deep Learning"
                description="Build on your machine learning knowledge with neural networks"
                progress={0}
                lastAccessed="Not started"
                image="/placeholder.svg?height=200&width=300"
              />
            </TabsContent>
            <TabsContent value="completed" className="space-y-4 mt-6">
              <LearningPathCard
                title="Introduction to Python Programming"
                description="Learn the basics of Python programming language"
                progress={100}
                lastAccessed="2 weeks ago"
                image="/placeholder.svg?height=200&width=300"
              />
              <LearningPathCard
                title="Statistics for Data Science"
                description="Master statistical concepts essential for data analysis"
                progress={100}
                lastAccessed="1 month ago"
                image="/placeholder.svg?height=200&width=300"
              />
            </TabsContent>
          </Tabs>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Activity</h2>
              <Link href="/dashboard/activity" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              <ActivityItem
                icon={<BookOpen className="h-4 w-4" />}
                title="Completed lesson: Neural Networks Architecture"
                timestamp="Today, 10:23 AM"
              />
              <ActivityItem
                icon={<MessageSquare className="h-4 w-4" />}
                title="Asked question in Quantum Physics discussion"
                timestamp="Yesterday, 3:45 PM"
              />
              <ActivityItem
                icon={<Star className="h-4 w-4" />}
                title="Earned badge: 'Consistent Learner'"
                timestamp="Yesterday, 9:12 AM"
              />
              <ActivityItem
                icon={<BookOpen className="h-4 w-4" />}
                title="Started new subject: Cognitive Psychology"
                timestamp="3 days ago"
              />
            </div>
          </div>
        </main>
        <aside className="hidden lg:block space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Goal</CardTitle>
              <CardDescription>You're making great progress!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="relative h-40 w-40">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="text-muted-foreground/20"
                      cx="50"
                      cy="50"
                      r="40"
                      pathLength="100"
                      strokeWidth="10"
                      fill="none"
                      stroke="currentColor"
                    />
                    <circle
                      className="text-primary"
                      cx="50"
                      cy="50"
                      r="40"
                      pathLength="100"
                      strokeDasharray="100"
                      strokeDashoffset="25"
                      strokeWidth="10"
                      fill="none"
                      stroke="currentColor"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">75%</div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">30 minutes left to reach your daily goal</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue Learning</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Learning Assistant</CardTitle>
              <CardDescription>Ask any question about your studies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">How does backpropagation work in neural networks?</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm">
                    Backpropagation is an algorithm used to train neural networks by calculating gradients of the loss
                    function with respect to the weights. It works by...
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Input placeholder="Ask a question..." className="flex-1" />
                <Button size="icon">
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
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Machine Learning Quiz</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 3:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Quantum Physics Assignment</p>
                    <p className="text-xs text-muted-foreground">Friday, 11:59 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Psychology Discussion Post</p>
                    <p className="text-xs text-muted-foreground">Next Monday, 9:00 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}

function LearningPathCard({ title, description, progress, lastAccessed, image }) {
  return (
    <Card>
      <div className="md:flex">
        <div className="md:w-1/3 h-40 md:h-auto">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span>{progress}% complete</span>
              <span className="text-muted-foreground">Last accessed: {lastAccessed}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" className="mr-2">
              View Details
            </Button>
            <Button size="sm">Continue</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

function ActivityItem({ icon, title, timestamp }) {
  return (
    <div className="flex items-start gap-4 p-3 rounded-lg border">
      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{timestamp}</p>
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">View details</span>
      </Button>
    </div>
  )
}

