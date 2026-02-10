import { BlogCard } from "../ui/blog-card";
import { formatDate } from "@/lib/formatDate";
import { Loading } from "../ui/loading";
import type { Post } from "@/hooks/useBlogPosts";

type Props = {
  posts: Post[];
  loading: boolean;
  visible: number;
};

export function ArticleList({ posts, loading, visible }: Props) {
  return (
    <article className="grid gap-6 md:grid-cols-2 px-4 md:px-0 pt-6">
      {loading ? (
        <Loading />
      ) : (
        posts
          .slice(0, visible)
          .map((post) => (
            <BlogCard
              image={post.image}
              category_name={post.category_name}
              title={post.title}
              description={post.description}
              author={post.author}
              date={formatDate(post.date)}
              id={post.id}
            />
          ))
      )}
    </article>
  );
}
