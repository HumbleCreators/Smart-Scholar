"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearningPathsPage() {
  const [learningPaths, setLearningPaths] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLearningPaths = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from("learning_paths")
          .select("*")
          .eq("user_id", user.id);
        if (error) {
          console.error("Error fetching learning paths:", error);
        } else {
          setLearningPaths(data);
        }
      }
      setLoading(false);
    };

    fetchLearningPaths();
  }, []);

  return (
    <div className="container py-6 md:py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">My Learning Paths</h1>
        <Button asChild>
          <Link href="/dashboard/learning-paths/new">Create New Path</Link>
        </Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : learningPaths.length === 0 ? (
        <p>You haven't created any learning paths yet.</p>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <Card key={path.id}>
              <CardHeader>
                <CardTitle>{path.path_name}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href={`/learn/${path.id}`}>Start Learning</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
