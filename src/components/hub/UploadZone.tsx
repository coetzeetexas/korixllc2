import { useRef, useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { CourseFile } from "./data";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function detectType(name: string): CourseFile["type"] {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (["mp4", "mov", "webm", "avi", "mkv"].includes(ext)) return "video";
  if (ext === "pdf") return "pdf";
  return "doc";
}

type Upload = {
  id: string;
  name: string;
  progress: number;
  done: boolean;
};

export function UploadZone({ onUpload }: { onUpload: (file: CourseFile) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploads, setUploads] = useState<Upload[]>([]);

  const handleFiles = (files: FileList | File[]) => {
    Array.from(files).forEach((file) => {
      const id = `u${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setUploads((prev) => [...prev, { id, name: file.name, progress: 0, done: false }]);

      const start = performance.now();
      const duration = 1500;
      const tick = () => {
        const elapsed = performance.now() - start;
        const pct = Math.min(100, Math.round((elapsed / duration) * 100));
        setUploads((prev) => prev.map((u) => (u.id === id ? { ...u, progress: pct } : u)));
        if (pct < 100) {
          requestAnimationFrame(tick);
        } else {
          setUploads((prev) => prev.map((u) => (u.id === id ? { ...u, done: true } : u)));
          onUpload({
            id: `f${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            name: file.name,
            size: formatSize(file.size),
            type: detectType(file.name),
            isPublished: false,
          });
          setTimeout(() => {
            setUploads((prev) => prev.filter((u) => u.id !== id));
          }, 800);
        }
      };
      requestAnimationFrame(tick);
    });
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
        }}
        className={`flex w-full flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed px-4 py-6 text-sm transition-colors cursor-pointer ${
          dragOver
            ? "border-primary bg-primary/5 text-primary"
            : "border-border text-muted-foreground hover:border-primary/50 hover:bg-muted/30"
        }`}
      >
        <Upload className="h-5 w-5" />
        <span>Drag &amp; drop files here, or click to upload (PDF, Video, Doc)</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) handleFiles(e.target.files);
          e.target.value = "";
        }}
      />
      {uploads.length > 0 && (
        <div className="space-y-2">
          {uploads.map((u) => (
            <div key={u.id} className="rounded-md border bg-muted/30 px-3 py-2">
              <div className="flex items-center justify-between text-xs">
                <span className="truncate">{u.name}</span>
                {u.done ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                  <span className="text-muted-foreground">{u.progress}%</span>
                )}
              </div>
              <Progress value={u.progress} className="mt-1.5 h-1.5" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
