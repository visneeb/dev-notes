import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { formatDate } from "@/lib/formatDate";
import NotFoundPage from "../PageNotFound";
import { ArticleMenu } from "./ArticleMenu";
import Comment from "./Comment";
import { Loading } from "../ui/loading";
import { AuthorCard } from "../ui/author-card";

export function ArticlePostPage() {
  const { id } = useParams<{ id: string }>();
  const { post, loading, getPostById } = useBlogPosts();

  useEffect(() => {
    if (id) getPostById(id);
  }, [id, getPostById]);

  if (loading) {
    return <Loading />;
  }

  if (!post) return <NotFoundPage />;

  return (
    <article className="w-full">
      <div className="mx-auto max-w-291.25 md:px-4 px-0">
        {/* image */}
        <div className="aspect-1200/587 overflow-hidden pb-6 md:pb-12 md:pt-15">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover md:rounded-xl"
            />
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-12 lg:gap-20">
          {/* Article content  */}
          <div className="flex flex-col">
            <div className="text-gray-500 mb-8 flex gap-5 items-center px-4 md:px-0">
              <span className="text-brand-green text-body-2 bg-green-100 p-1 px-3 rounded-full">
                {post.category}
              </span>{" "}
              <span className="text-body-1 p-1">{formatDate(post.date)}</span>
            </div>
            <h2 className="text-headline-2 font-bold mb-4 px-4 md:px-0">
              {post.title}
            </h2>

            <div className="markdown pb-6 px-4 md:px-0">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* AuthorCard for mobile */}
            <div className="lg:hidden pb-10 px-4 md:px-0">
              <AuthorCard />
            </div>

            <ArticleMenu like={post.likes} />

            <div className="pt-12 px-4 md:px-0">
              <Comment />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-full sticky top-11 self-start">
            <AuthorCard />
          </aside>
        </div>
      </div>
    </article>
  );
}
