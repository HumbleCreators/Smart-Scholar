import Link from "next/link"
import { Search, Filter, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SubjectCard } from "@/components/subject-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LearningPathGenerator } from "@/components/learning-path-generator"

export default function SubjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Smart Scholar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
            <Link href="/subjects" className="text-sm font-medium text-primary">
              Subjects
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="rounded-full h-8 w-8" />
              <span>Alex Johnson</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Explore Subjects</h1>
              <p className="text-muted-foreground mt-1">Discover new topics or continue your learning journey</p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search subjects..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="browse">
            <TabsList className="mb-8">
              <TabsTrigger value="browse">Browse Subjects</TabsTrigger>
              <TabsTrigger value="my-subjects">My Subjects</TabsTrigger>
              <TabsTrigger value="generate">Generate Learning Path</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Featured Subjects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <SubjectCard
                    id="machine-learning"
                    title="Machine Learning"
                    description="Learn the fundamentals of machine learning algorithms and their applications"
                    progress={0}
                    image="/placeholder.svg?height=200&width=300"
                    totalLessons={24}
                    completedLessons={0}
                    estimatedHours={40}
                  />
                  <SubjectCard
                    id="quantum-physics"
                    title="Quantum Physics"
                    description="Explore the fascinating world of quantum mechanics and its implications"
                    progress={0}
                    image="/placeholder.svg?height=200&width=300"
                    totalLessons={18}
                    completedLessons={0}
                    estimatedHours={35}
                  />
                  <SubjectCard
                    id="cognitive-psychology"
                    title="Cognitive Psychology"
                    description="Understand how the mind works, from perception to memory and problem-solving"
                    progress={0}
                    image="/placeholder.svg?height=200&width=300"
                    totalLessons={20}
                    completedLessons={0}
                    estimatedHours={30}
                  />
                  <SubjectCard
                    id="data-science"
                    title="Data Science"
                    description="Master the skills to analyze and interpret complex data sets"
                    progress={0}
                    image="/placeholder.svg?height=200&width=300"
                    totalLessons={22}
                    completedLessons={0}
                    estimatedHours={38}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    "Computer Science",
                    "Mathematics",
                    "Physics",
                    "Biology",
                    "Psychology",
                    "Economics",
                    "History",
                    "Literature",
                    "Philosophy",
                    "Art & Design",
                    "Engineering",
                    "Medicine",
                  ].map((category, index) => (
                    <Link href={`/subjects/category/${category.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                      <div className="border rounded-lg p-4 hover:bg-muted transition-colors">
                        <h3 className="font-medium">{category}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Recently Added</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <SubjectCard
                    id="blockchain"
                    title="Blockchain Technology"
                    description="Understand the principles behind blockchain and its applications beyond cryptocurrency"
                    progress={0}
                    image="/placeholder.svg?height=200&width=300"
                    totalLessons={16}
                    completedLessons={0}
                    estimatedHours={25}
                  />
                  <SubjectCard
                    id="climate-science"
                    title="Climate Science"
                    description="Learn about the science of climate change, its impacts, and potential solutions"
                    progress={0}
                    image="/placeholder.svg?height=200&width=300"
                    totalLessons={20}
                    completedLessons={0}
                    estimatedHours={30}
                  />
                  <SubjectCard
                    id="neuroscience"
                    title="Neuroscience"
                    description="Explore the structure and function of the nervous system and the brain"
                    progress={0}
                    image="/placeholder.svg?height=200&width=300"
                    totalLessons={22}
                    completedLessons={0}
                    estimatedHours={36}
                  />
                  <SubjectCard
                    id="game-theory"
                    title="Game Theory"
                    description="Study mathematical models of strategic interaction between rational decision-makers"
                    progress={0}
                    image="/placeholder.svg?height=200&width=300"
                    totalLessons={14}
                    completedLessons={0}
                    estimatedHours={28}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="my-subjects">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">In Progress</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <SubjectCard
                      id="machine-learning"
                      title="Machine Learning"
                      description="Learn the fundamentals of machine learning algorithms and their applications"
                      progress={65}
                      image="/placeholder.svg?height=200&width=300"
                      totalLessons={24}
                      completedLessons={16}
                      estimatedHours={40}
                    />
                    <SubjectCard
                      id="quantum-physics"
                      title="Introduction to Quantum Physics"
                      description="Explore the fascinating world of quantum mechanics and its implications"
                      progress={32}
                      image="/placeholder.svg?height=200&width=300"
                      totalLessons={18}
                      completedLessons={6}
                      estimatedHours={35}
                    />
                    <SubjectCard
                      id="cognitive-psychology"
                      title="Cognitive Psychology"
                      description="Understand how the mind works, from perception to memory and problem-solving"
                      progress={78}
                      image="/placeholder.svg?height=200&width=300"
                      totalLessons={20}
                      completedLessons={16}
                      estimatedHours={30}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Completed</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <SubjectCard
                      id="python-programming"
                      title="Introduction to Python Programming"
                      description="Learn the basics of Python programming language"
                      progress={100}
                      image="/placeholder.svg?height=200&width=300"
                      totalLessons={15}
                      completedLessons={15}
                      estimatedHours={25}
                    />
                    <SubjectCard
                      id="statistics"
                      title="Statistics for Data Science"
                      description="Master statistical concepts essential for data analysis"
                      progress={100}
                      image="/placeholder.svg?height=200&width=300"
                      totalLessons={18}
                      completedLessons={18}
                      estimatedHours={30}
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Saved for Later</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <SubjectCard
                      id="blockchain"
                      title="Blockchain Technology"
                      description="Understand the principles behind blockchain and its applications beyond cryptocurrency"
                      progress={0}
                      image="/placeholder.svg?height=200&width=300"
                      totalLessons={16}
                      completedLessons={0}
                      estimatedHours={25}
                    />
                    <SubjectCard
                      id="neuroscience"
                      title="Neuroscience"
                      description="Explore the structure and function of the nervous system and the brain"
                      progress={0}
                      image="/placeholder.svg?height=200&width=300"
                      totalLessons={22}
                      completedLessons={0}
                      estimatedHours={36}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="generate">
              <LearningPathGenerator />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-bold">Smart Scholar</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

