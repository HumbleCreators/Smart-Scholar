import Link from "next/link"
import { ArrowRight, BookOpen, Brain, BarChart3, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Smart Scholar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#subjects" className="text-sm font-medium hover:text-primary">
              Subjects
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Learn Anything with AI-Powered Education
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Smart Scholar uses AI to create personalized learning experiences from academic resources, adapting
                    to your pace and style.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="gap-1">
                      Start Learning <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline">
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Smart Scholar platform interface showing personalized learning dashboard"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Powerful Learning Features</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with academic resources to create a unique learning experience.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Brain className="h-10 w-10 text-primary" />}
                title="AI-Powered Learning"
                description="Our AI analyzes your learning style and adapts content to optimize your understanding and retention."
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-primary" />}
                title="Academic Resources"
                description="Access content from arXiv, Google Scholar, and open access databases, simplified for easier understanding."
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-primary" />}
                title="Interactive Discussions"
                description="Ask questions and engage in AI-guided discussions that deepen your understanding of complex topics."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-primary" />}
                title="Progress Tracking"
                description="Sophisticated analytics map your knowledge acquisition and suggest optimal review schedules."
              />
              <FeatureCard
                icon={
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Personalized Pacing"
                description="Learn at your own speed with content that adjusts to your progress and background knowledge."
              />
              <FeatureCard
                icon={
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Custom Exercises"
                description="Practice with AI-generated exercises tailored to your learning goals and current knowledge level."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">How Smart Scholar Works</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Our platform uses a sophisticated AI system to create personalized learning experiences.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <StepCard
                number="1"
                title="Choose Your Subject"
                description="Select from a wide range of subjects or describe what you want to learn in natural language."
              />
              <StepCard
                number="2"
                title="AI Analysis"
                description="Our AI analyzes academic resources and creates a personalized learning path based on your goals."
              />
              <StepCard
                number="3"
                title="Interactive Learning"
                description="Engage with content through reading, exercises, and AI-guided discussions."
              />
              <StepCard
                number="4"
                title="Track Progress"
                description="Monitor your learning journey with detailed analytics and receive suggestions for improvement."
              />
            </div>
          </div>
        </section>

        {/* Popular Subjects Section */}
        <section id="subjects" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Explore Popular Subjects</h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Discover a wide range of subjects with personalized learning paths.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SubjectCard title="Computer Science" count="1,245 courses" />
              <SubjectCard title="Mathematics" count="987 courses" />
              <SubjectCard title="Physics" count="756 courses" />
              <SubjectCard title="Biology" count="892 courses" />
              <SubjectCard title="Psychology" count="645 courses" />
              <SubjectCard title="Economics" count="523 courses" />
              <SubjectCard title="History" count="712 courses" />
              <SubjectCard title="Literature" count="498 courses" />
            </div>
            <div className="mt-8 text-center">
              <Link href="/subjects">
                <Button variant="outline" size="lg">
                  View All Subjects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Ready to Transform Your Learning?</h2>
                <p className="mt-4 text-lg opacity-90">
                  Join Smart Scholar today and experience the future of education with AI-powered personalized learning.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link href="/signup">
                  <Button size="lg" variant="secondary">
                    Sign Up for Free
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Try Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">Smart Scholar</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                AI-powered learning platform that revolutionizes how people learn.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/features" className="text-gray-500 hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/subjects" className="text-gray-500 hover:text-primary">
                    Subjects
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-500 hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-500 hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-500 hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-500 hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-500 hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="text-gray-500 hover:text-primary">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-500 hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-500 hover:text-primary">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-gray-500 hover:text-primary">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Smart Scholar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

function SubjectCard({ title, count }) {
  return (
    <div className="group flex flex-col p-6 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{count}</p>
    </div>
  )
}

