import { SearchBar } from "../ui/search-bar";
import {
  ArticleCategorySelect,
  ArticleButtonGroup,
} from "../ui/article-category";
import { BlogCard } from "../ui/blog-card";
import { useState, useEffect } from "react";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { usePagination } from "@/hooks/usePagination";
import { Spinner } from "@/components/ui/spinner";

export function ArticleSection() {
  const { posts, loading, getAllPosts } = useBlogPosts();
  const { visible, paginate, reset } = usePagination(2);
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
    <section className="article-section w-300 max-w-full mx-auto md:pb-30">
      <h3 className="text-brown-600 text-headline-3 py-4 pb-8 px-4 md:px-0">
        Latest articles
      </h3>
      {/* Category */}
      <div className="bg-brown-200 h-43 flex flex-col justify-around px-4 py-4 md:flex-row-reverse md:items-center md:justify-between md:h-20  md:rounded-2xl mg">
        <SearchBar className="md:w-80" />
        <ArticleCategorySelect
          className="md:hidden"
          onChange={handleCategoryChange}
          value={selectedCategory}
        />
        <ArticleButtonGroup
          className="hidden md:flex md:pl-2"
          onSelectCategory={handleCategoryChange}
          activeCategory={selectedCategory}
        />
      </div>
      {/* Card */}
      <article className=" grid gap-6 md:grid-cols-2 px-4 md:px-0 pt-6">
        {loading ? (
          <div className="col-span-full flex flex-col items-center justify-center min-h-[50vh]">
            <Spinner className="size-10" />
            <p className="text-body-1 pt-5">Loading...</p>
          </div>
        ) : (
          posts.slice(0, visible).map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          ))
        )}
      </article>
      {visible < posts.length && (
        <button
          onClick={paginate}
          disabled={loading}
          className="text-brown-600 text-body-1 underline decoration-brown-600 mx-auto block w-max pt-20 cursor-pointer"
        >
          View more
        </button>
      )}
    </section>
  );
}
