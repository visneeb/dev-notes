import { SearchBar } from "../ui/search-bar";
import {
  ArticleCategorySelect,
  ArticleButtonGroup,
} from "../ui/article-category";

type Props = {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
};

export function ArticleFilter({ selectedCategory, onCategoryChange }: Props) {
  return (
    <div className="bg-brown-200 h-43 flex flex-col justify-around px-4 py-4 md:flex-row-reverse md:items-center md:justify-between md:h-20 md:rounded-2xl">
      <SearchBar className="md:w-80" />

      <ArticleCategorySelect
        className="md:hidden"
        value={selectedCategory}
        onChange={onCategoryChange}
      />

      <ArticleButtonGroup
        className="hidden md:flex md:pl-2"
        activeCategory={selectedCategory}
        onSelectCategory={onCategoryChange}
      />
    </div>
  );
}
