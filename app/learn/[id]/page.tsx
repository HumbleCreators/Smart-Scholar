"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearnIdPage({ params }) {
  const { id } = params
  const [learningPath, setLearningPath] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLearningPath = async () => {
      if (id) {
        const { data, error } = await supabase
          .from("learning_paths")
          .select("*")
          .eq("id", id)
          .single();
        if (error) {
          console.error("Error fetching learning path:", error);
        } else {
          setLearningPath(data);
        }
      }
      setLoading(false);
    };

    fetchLearningPath();
  }, [id]);

  return (
    <div className="container py-6 md:py-8">
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : !learningPath ? (
        <p>Learning path not found.</p>
      ) : (
        <div className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight">{learningPath.path_name}</h1>
          <p className="text-lg text-muted-foreground mt-2">{learningPath.description}</p>
          <div className="mt-8 space-y-6">
            {learningPath.modules.map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{module.description}</p>
                  <p className="text-sm mt-2">Estimated time: {module.estimated_hours} hours</p>
                  <ul className="mt-4 list-disc list-inside space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex}>
                        <span className="font-semibold">{lesson.title}</span> ({lesson.type})
                        <p className="text-sm text-muted-foreground ml-4">{lesson.description}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
