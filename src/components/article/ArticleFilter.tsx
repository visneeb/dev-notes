import { SearchBar } from "../ui/search-bar";
import {
  ArticleCategorySelect,
  ArticleButtonGroup,
  type CategoryOption,
} from "../ui/article-category";
import type { Post } from "@/hooks/useBlogPosts";

type Props = {
  selectedCategory: string;
  categories: CategoryOption[];
  onCategoryChange: (categoryId: number | null, categoryName: string) => void;
  onSearch: (keyword: string) => void;
  suggestions: Post[];
  onSelectSuggestion: (title: string) => void;
};

export function ArticleFilter({
  selectedCategory,
  categories,
  onCategoryChange,
  onSearch,
  suggestions,
  onSelectSuggestion,
}: Props) {
  return (
    <div className="bg-brown-200 h-43 flex flex-col justify-around px-4 py-4 md:flex-row-reverse md:items-center md:justify-between md:h-20 md:rounded-2xl">
      <SearchBar
        className="md:w-80"
        onSearch={onSearch}
        suggestions={suggestions}
        onSelectSuggestion={onSelectSuggestion}
      />

      <ArticleCategorySelect
        className="md:hidden"
        value={selectedCategory}
        categories={categories}
        onChange={onCategoryChange}
      />

      <ArticleButtonGroup
        className="hidden md:flex md:pl-2"
        activeCategory={selectedCategory}
        categories={categories}
        onSelectCategory={onCategoryChange}
      />
    </div>
  );
}
