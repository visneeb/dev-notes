import { useEffect, useState } from "react";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { usePagination } from "@/hooks/usePagination";
import { ArticleFilter } from "../article/ArticleFilter";
import { ArticleList } from "../article/ArticleList";
import { LoadMoreButton } from "../article/LoadMoreButton";
import type { Post } from "@/hooks/useBlogPosts";

export function ArticleSection() {
  const {
    posts,
    loading,
    getAllPosts,
    searchPosts,
    filterByCategory,
    getTitleSuggestions,
  } = useBlogPosts();
  const { visible, paginate, reset } = usePagination(6);
  const [selectedCategory, setSelectedCategory] = useState("Highlight");
  const [suggestions, setSuggestions] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    reset();
    filterByCategory(value);
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
