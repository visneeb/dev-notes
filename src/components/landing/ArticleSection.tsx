import { useEffect, useState, useMemo } from "react";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { useCategories } from "@/hooks/useCategories";
import { usePagination } from "@/hooks/usePagination";
import { ArticleFilter } from "../article/ArticleFilter";
import { ArticleList } from "../article/ArticleList";
import { LoadMoreButton } from "../article/LoadMoreButton";
import type { Post } from "@/hooks/useBlogPosts";
import type { CategoryOption } from "@/components/ui/article-category";

export function ArticleSection() {
  const {
    posts,
    loading,
    keyword,
    searchPosts,
    filterByCategory,
    getTitleSuggestions,
  } = useBlogPosts();
  const { categories } = useCategories();
  const { visible, paginate, reset } = usePagination(6);
  const [selectedCategory, setSelectedCategory] = useState("Highlight");
  const [suggestions, setSuggestions] = useState<Post[]>([]);

  const categoryOptions: CategoryOption[] = useMemo(
    () => [{ id: null, name: "Highlight" }, ...categories.map((c) => ({ id: c.id, name: c.name }))],
    [categories],
  );

  useEffect(() => {
    if (keyword) {
      setSuggestions(getTitleSuggestions(keyword));
    } else {
      setSuggestions([]);
    }
  }, [posts, keyword, getTitleSuggestions]);

  const handleCategoryChange = (categoryId: number | null, categoryName: string) => {
    setSelectedCategory(categoryName);
    reset();
    filterByCategory(categoryId);
  };

  const handleSearch = (keyword: string) => {
    searchPosts(keyword);
    setSuggestions(getTitleSuggestions(keyword));
  };

  const handleSelectSuggestion = (title: string) => {
    searchPosts(title);
    setSuggestions([]);
  };
  return (
    <section className="article-section w-300 max-w-full mx-auto pb-30">
      <h3 className="text-brown-600 text-headline-3 py-4 pb-8 px-4 md:px-0">
        Latest articles
      </h3>

      <ArticleFilter
        selectedCategory={selectedCategory}
        categories={categoryOptions}
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
        suggestions={suggestions}
        onSelectSuggestion={handleSelectSuggestion}
      />

      <ArticleList posts={posts} loading={loading} visible={visible} />

      <LoadMoreButton
        visible={visible}
        total={posts.length}
        loading={loading}
        onClick={paginate}
      />
    </section>
  );
}
