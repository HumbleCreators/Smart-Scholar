import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface SubjectCardProps {
  id: string
  title: string
  description: string
  progress: number
  image: string
  totalLessons: number
  completedLessons: number
  estimatedHours: number
}

export function SubjectCard({
  id,
  title,
  description,
  progress,
  image,
  totalLessons,
  completedLessons,
  estimatedHours,
}: SubjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video relative">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <div className="flex justify-between text-sm mb-1">
          <span>{progress}% complete</span>
          <span>
            {completedLessons}/{totalLessons} lessons
          </span>
        </div>
        <Progress value={progress} className="h-1.5" />
        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5" />
          <span>{estimatedHours} hours estimated</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/subjects/${id}`}>View Details</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={`/learn/${id}`}>Continue</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

