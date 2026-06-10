import { Card } from "@/components/ui/card";
import type { Student } from "./data";

export function Roster({ students }: { students: Student[] }) {
  return (
    <Card className="overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-muted/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-t">
              <td className="px-4 py-3 font-medium">{s.name}</td>
              <td className="px-4 py-3 text-muted-foreground">{s.email}</td>
            </tr>
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan={2} className="px-4 py-8 text-center text-muted-foreground">
                No students enrolled yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
