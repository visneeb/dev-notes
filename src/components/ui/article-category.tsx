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

const categories = ["Highlight", "Cat", "Inspiration", "General"];

interface ArticleCategorySelectProps {
  className?: string;
  value?: string;
  onChange?: (category: string) => void;
}
interface ArticleButtonGroupProps {
  className?: string;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

/*Categories dropdown*/
export function ArticleCategorySelect({
  className,
  value,
  onChange,
}: ArticleCategorySelectProps) {
  const selectItemLeftCheck =
    "relative pl-8 [&>span]:left-2 [&>span]:right-auto";

  return (
    <div className="md:hidden">
      <p className="text-body-1 text-brown-400 pb-0.5 pl-1">Category</p>

      <Select value={value} onValueChange={(value) => onChange?.(value)}>
        <SelectTrigger
          className={cn(
            "flex h-12! w-full items-center rounded-xl border border-border bg-background px-4 text-body-1 text-brown-400! [&_svg]:text-brown-600 [&_svg]:opacity-100",
            className
          )}
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup className="text-body-1 text-brown-400">
            {categories.map((item) => (
              <SelectItem
                key={item}
                value={item}
                className={selectItemLeftCheck}
              >
                {item}
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

export function ArticleButtonGroup({
  className,
  activeCategory,
  onSelectCategory,
}: ArticleButtonGroupProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {categories.map((label) => {
        const isActive = activeCategory === label;

        return (
          <Button
            key={label}
            variant="secondary"
            onClick={() => onSelectCategory?.(label)}
            className={cn( isActive ? buttonActive : buttonInactive)}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
}
