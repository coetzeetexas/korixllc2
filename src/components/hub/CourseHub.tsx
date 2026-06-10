import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, ChevronRight } from "lucide-react";
import type { Course } from "./data";

type Props = {
  courses: Course[];
  onOpen: (id: string) => void;
};

export function CourseHub({ courses, onOpen }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Your Courses</h2>
        <p className="text-sm text-muted-foreground">Select a course to manage its roster and modules.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {course.code} · {course.term}
              </div>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <CardDescription>{course.instructor}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  {course.students.length}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  {course.modules.length} modules
                </span>
              </div>
              <Button onClick={() => onOpen(course.id)} className="w-full">
                Open course <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
