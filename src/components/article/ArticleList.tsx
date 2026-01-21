import { BlogCard } from "../ui/blog-card";
import { Spinner } from "@/components/ui/spinner";
import { Link } from "react-router-dom";
import { formatDate } from "@/lib/formatDate";

type Props = {
  posts: any[];
  loading: boolean;
  visible: number;
};

export function ArticleList({ posts, loading, visible }: Props) {
  return (
    <article className="grid gap-6 md:grid-cols-2 px-4 md:px-0 pt-6">
      {loading ? (
        <div className="col-span-full flex flex-col items-center justify-center min-h-[50vh]">
          <Spinner className="size-10" />
          <p className="text-body-1 pt-5">Loading...</p>
        </div>
      ) : (
        posts.slice(0, visible).map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <BlogCard
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              author={post.author}
              date={formatDate(post.date)}
            />
          </Link>
        ))
      )}
    </article>
  );
}
