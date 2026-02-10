/*Categories select*/
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type CategoryOption = {
  id: number | null;
  name: string;
};

interface ArticleCategorySelectProps {
  className?: string;
  value: string;
  onChange?: (categoryId: number | null, categoryName: string) => void;
  categories: CategoryOption[];
}
interface ArticleButtonGroupProps {
  className?: string;
  activeCategory: string;
  onSelectCategory?: (categoryId: number | null, categoryName: string) => void;
  categories: CategoryOption[];
}

/*Categories dropdown*/
export function ArticleCategorySelect({
  className,
  value,
  onChange,
  categories,
}: ArticleCategorySelectProps) {
  const selectItemLeftCheck =
    "relative pl-8 [&>span]:left-2 [&>span]:right-auto";

  return (
    <div className="md:hidden">
      <p className="text-body-1 text-brown-400 pb-0.5 pl-1">Category</p>

      <Select
        value={value}
        onValueChange={(val) => {
          const cat = categories.find((c) => c.name === val);
          if (cat) onChange?.(cat.id, cat.name);
        }}
      >
        <SelectTrigger
          className={cn(
            "flex h-12! w-full items-center rounded-xl border border-border bg-background px-4 text-body-1 text-brown-400! [&_svg]:text-brown-600 [&_svg]:opacity-100",
            className,
          )}
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup className="text-body-1 text-brown-400">
            {categories.map((cat) => (
              <SelectItem
                key={cat.id ?? "all"}
                value={cat.name}
                className={selectItemLeftCheck}
              >
                {cat.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

/*Categories button*/
import { Button } from "@/components/ui/button";

const buttonActive = "bg-brown-300 text-brown-500 px-5 py-5";

const buttonInactive = "text-brown-400 px-5 py-5";

const VISIBLE_COUNT = 4;

export function ArticleButtonGroup({
  className,
  activeCategory,
  onSelectCategory,
  categories,
}: ArticleButtonGroupProps) {
  const visibleCategories = categories.slice(0, VISIBLE_COUNT);
  const hiddenCategories = categories.slice(VISIBLE_COUNT);

  return (
    <div className={cn("flex gap-2", className)}>
      {visibleCategories.map((cat) => {
        const isActive = activeCategory === cat.name;
        const value = cat.id === null ? "all" : String(cat.id);

        return (
          <Button
            key={value}
            variant="secondary"
            onClick={() => onSelectCategory?.(cat.id, cat.name)}
            className={cn(isActive ? buttonActive : buttonInactive)}
          >
            {cat.name}
          </Button>
        );
      })}
      {hiddenCategories.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="px-5 py-5 underline">
              More
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            {hiddenCategories.map((cat) => {
              const isActive = activeCategory === cat.name;

              return (
                <DropdownMenuItem
                  key={cat.id}
                  onClick={() => onSelectCategory?.(cat.id, cat.name)}
                  className={cn(
                    "cursor-pointer",
                    isActive && "bg-brown-100 text-brown-500",
                  )}
                >
                  {cat.name}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
