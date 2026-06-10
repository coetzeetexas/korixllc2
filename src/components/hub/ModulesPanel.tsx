import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, X } from "lucide-react";
import { UploadZone } from "./UploadZone";
import { FileRow } from "./FileRow";
import type { CourseFile, Module } from "./data";

type Props = {
  modules: Module[];
  onChange: (modules: Module[]) => void;
};

export function ModulesPanel({ modules, onChange }: Props) {
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addModule = () => {
    if (!title.trim()) return;
    const m: Module = {
      id: `m${Date.now()}`,
      title: title.trim(),
      description: desc.trim() || undefined,
      files: [],
    };
    onChange([...modules, m]);
    setTitle("");
    setDesc("");
    setCreating(false);
  };

  const updateModule = (id: string, patch: Partial<Module>) => {
    onChange(modules.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  };

  const addFile = (moduleId: string, file: CourseFile) => {
    onChange(
      modules.map((m) => (m.id === moduleId ? { ...m, files: [...m.files, file] } : m)),
    );
  };

  const updateFile = (moduleId: string, fileId: string, patch: Partial<CourseFile>) => {
    onChange(
      modules.map((m) =>
        m.id === moduleId
          ? { ...m, files: m.files.map((f) => (f.id === fileId ? { ...f, ...patch } : f)) }
          : m,
      ),
    );
  };

  const removeFile = (moduleId: string, fileId: string) => {
    onChange(
      modules.map((m) =>
        m.id === moduleId ? { ...m, files: m.files.filter((f) => f.id !== fileId) } : m,
      ),
    );
  };

  const removeModule = (id: string) => {
    onChange(modules.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-4">
      {modules.length > 0 && (
        <Accordion type="multiple" defaultValue={modules.map((m) => m.id)} className="space-y-3">
          {modules.map((module) => (
            <AccordionItem
              key={module.id}
              value={module.id}
              className="rounded-lg border bg-card px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-1 items-center justify-between gap-3 pr-3">
                  <div className="text-left">
                    <div className="font-medium">{module.title}</div>
                    {module.description && (
                      <div className="text-xs text-muted-foreground">{module.description}</div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {module.files.length} file{module.files.length === 1 ? "" : "s"}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pb-2">
                  {module.files.length > 0 && (
                    <div className="divide-y rounded-md border">
                      {module.files.map((file) => (
                        <FileRow
                          key={file.id}
                          file={file}
                          onTogglePublish={(v) =>
                            updateFile(module.id, file.id, { isPublished: v })
                          }
                          onDelete={() => removeFile(module.id, file.id)}
                        />
                      ))}
                    </div>
                  )}
                  <UploadZone onUpload={(f) => addFile(module.id, f)} />
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeModule(module.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      Delete module
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {creating ? (
        <Card className="space-y-3 p-4">
          <Input
            autoFocus
            placeholder="Module title (e.g. Week 3 — Functions)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Optional description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={2}
          />
          <div className="flex justify-end gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                setCreating(false);
                setTitle("");
                setDesc("");
              }}
            >
              <X className="h-4 w-4" /> Cancel
            </Button>
            <Button onClick={addModule} disabled={!title.trim()}>
              Save module
            </Button>
          </div>
        </Card>
      ) : (
        <Button variant="outline" onClick={() => setCreating(true)} className="w-full">
          <Plus className="h-4 w-4" /> Add New Module
        </Button>
      )}

      {modules.length === 0 && !creating && (
        <p className="text-center text-sm text-muted-foreground">
          No modules yet. Add your first module to start uploading content.
        </p>
      )}
    </div>
  );
}
