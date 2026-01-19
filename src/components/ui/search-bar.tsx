import { Search } from "lucide-react";
import { ButtonGroup } from "./button-group";
import { Button } from "./button";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export function SearchBar({ className }: { className?: string }) {
  return (
    <ButtonGroup
      className={cn(
        "flex items-center w-full rounded-xl border border-border bg-background transition focus-within:border-border/60 focus-within:ring-2 focus-within:ring-ring/20",
        className
      )}
    >
      <Input
        type="search"
        placeholder="Search"
        className="h-12 flex-1 pl-4 border-0 bg-transparent text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-body-1"
      />

      <Button
        type="submit"
        variant="ghost"
        size="icon"
        aria-label="Search"
        className="h-12 w-12 rounded-none  hover:bg-transparent text-brown-600"
      >
        <Search className="h-5 w-5" />
      </Button>
    </ButtonGroup>
  );
}
