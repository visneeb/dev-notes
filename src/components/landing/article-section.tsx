import { SearchBar } from "../ui/search-bar";
import {
  ArticleCategorySelect,
  ArticleButtonGroup,
} from "../ui/article-category";
import { BlogCard } from "../ui/blog-card";
import { useState, useEffect } from "react";
import { useBlogPosts } from "../../hooks/useBlogPosts";

export function ArticleSection() {
  const { posts, getPost } = useBlogPosts();
  const [category, setCategory] = useState<string>("Highlight");

  useEffect(() => {
    getPost();
  }, []);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    getPost(value);
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
          value={category}
        />
        <ArticleButtonGroup
          className="hidden md:flex md:pl-2"
          onSelectCategory={handleCategoryChange}
          activeCategory={category}
        />
      </div>
      {/* Card */}
      <article className=" grid gap-6 md:grid-cols-2 px-4 md:px-0 pt-6">
        {posts.map((post) => (
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
        ))}
      </article>
      <a
        href="#"
        className="text-brown-600 text-body-1 underline decoration-brown-600  mx-auto block w-max pt-20"
      >
        View more
      </a>
    </section>
  );
}
