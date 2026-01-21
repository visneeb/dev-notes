import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { formatDate } from "@/lib/formatDate";
import NotFoundPage from "../PageNotFound";
import { ArticleMenu } from "./ArticleMenu";
import Comment from "./Comment";
import { Spinner } from "../ui/spinner";

export function ArticlePostPage() {
  const { id } = useParams<{ id: string }>();
  const { post, loading, getPostById } = useBlogPosts();

  useEffect(() => {
    if (id) getPostById(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (!post) return <NotFoundPage />;

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-xl mb-10"
        />
      )}
      <div className=" text-gray-500 mb-8 flex flex-row gap-5 items-center">
        <span className="text-brand-green text-body-2 bg-green-100 p-1 px-3 rounded-full">
          {post.category}
        </span>{" "}
        <span className="text-body-1 p-1">{formatDate(post.date)}</span>
      </div>
      <h2 className="text-headline-2 font-bold mb-4">{post.title}</h2>

      <div className="markdown pb-12">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div>
        <ArticleMenu like={post.likes} />
      </div>
      <div className="pt-12">
        <Comment />
      </div>
    </article>
  );
}
