import { FileText, FileVideo, FileType, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import type { CourseFile } from "./data";

const iconFor = (type: CourseFile["type"]) => {
  if (type === "video") return FileVideo;
  if (type === "pdf") return FileText;
  return FileType;
};

type Props = {
  file: CourseFile;
  onTogglePublish: (value: boolean) => void;
  onDelete: () => void;
};

export function FileRow({ file, onTogglePublish, onDelete }: Props) {
  const Icon = iconFor(file.type);
  return (
    <div className="flex items-center gap-3 px-3 py-2.5">
      <div className="grid h-9 w-9 place-content-center rounded-md bg-muted text-muted-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium">{file.name}</div>
        <div className="text-xs text-muted-foreground">{file.size}</div>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden text-xs text-muted-foreground sm:inline">
          {file.isPublished ? "Published" : "Draft"}
        </span>
        <Switch checked={file.isPublished} onCheckedChange={onTogglePublish} />
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
