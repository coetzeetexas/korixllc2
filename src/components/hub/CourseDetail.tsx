import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Roster } from "./Roster";
import { ModulesPanel } from "./ModulesPanel";
import type { Course, Module } from "./data";

type Props = {
  course: Course;
  onBack: () => void;
  onChange: (course: Course) => void;
};

export function CourseDetail({ course, onBack, onChange }: Props) {
  const setModules = (modules: Module[]) => onChange({ ...course, modules });

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" size="sm" onClick={onBack} className="-ml-2 mb-2">
          <ArrowLeft className="h-4 w-4" /> Back to courses
        </Button>
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {course.code} · {course.term}
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">{course.title}</h2>
        <p className="text-sm text-muted-foreground">{course.instructor}</p>
      </div>

      <Tabs defaultValue="modules">
        <TabsList>
          <TabsTrigger value="roster">Roster</TabsTrigger>
          <TabsTrigger value="modules">Modules & Content</TabsTrigger>
        </TabsList>
        <TabsContent value="roster" className="mt-6">
          <Roster students={course.students} />
        </TabsContent>
        <TabsContent value="modules" className="mt-6">
          <ModulesPanel modules={course.modules} onChange={setModules} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
