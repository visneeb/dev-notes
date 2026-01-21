import { useEffect, useState } from "react";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { usePagination } from "@/hooks/usePagination";
import { ArticleFilter } from "../article/ArticleFilter";
import { ArticleList } from "../article/ArticleList";
import { LoadMoreButton } from "../article/LoadMoreButton";

export function ArticleSection() {
  const { posts, loading, getAllPosts } = useBlogPosts();
  const { visible, paginate, reset } = usePagination(6);
  const [selectedCategory, setSelectedCategory] = useState("Highlight");

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    reset();
    getAllPosts(value);
  };

  return (
    <section className="article-section w-300 max-w-full mx-auto pb-30">
      <h3 className="text-brown-600 text-headline-3 py-4 pb-8 px-4 md:px-0">
        Latest articles
      </h3>

      <ArticleFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
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
