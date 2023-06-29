import { Sun } from "lucide-react";

export function Header() {
  return (
    <div className="my-8 flex w-full items-center justify-between">
      <h1 className="text-2xl font-bold">devfinder</h1>
      <div className="flex items-center justify-center gap-4">
        CLARO
        <Sun className="h-5 w-5" />
      </div>
    </div>
  );
}
