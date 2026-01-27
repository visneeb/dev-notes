import { Search } from "lucide-react";
import { ButtonGroup } from "./button-group";
import { Button } from "./button";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import type { Post } from "@/hooks/useBlogPosts";

import { useState, useEffect } from "react";

type Props = {
  className?: string;
  onSearch: (keyword: string) => void;
  suggestions: Post[];
  onSelectSuggestion: (title: string) => void;
};

export function SearchBar({
  className,
  onSearch,
  suggestions,
  onSelectSuggestion,
}: Props) {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(text);
    }, 400);

    return () => clearTimeout(timer);
  }, [text, onSearch]);

  return (
    <div>
      <ButtonGroup
        className={cn(
          "flex items-center w-full rounded-xl border border-border bg-background transition focus-within:border-border/60 focus-within:ring-2 focus-within:ring-ring/20",
          className,
        )}
      >
        <Input
          type="search"
          placeholder="Search"
          className="h-12 flex-1 pl-4 border-0 bg-transparent text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-body-1"
          value={text}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="ghost"
          aria-label="Search"
          className="h-12 w-12 rounded-none  hover:bg-transparent text-brown-600"
        >
          <Search className="h-5 w-5" />
        </Button>
      </ButtonGroup>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-md border bg-background shadow">
          {suggestions.map((post) => (
            <li
              key={post.id}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-muted"
              onClick={() => {
                onSelectSuggestion(post.title);
                setText(post.title);
              }}
            >
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
