import { Link } from "react-router-dom";
import type { Post } from "@/hooks/useBlogPosts";

type BlogCardProps = Pick<Post, "id" | "image" | "category" | "title" | "description" | "author"> & {
  date: string;
};

export function BlogCard(props: BlogCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <Link
        key={props.id}
        to={`/post/${props.id}`}
        className="relative h-53 sm:h-90"
      >
        <img
          className="w-full h-full object-cover rounded-md"
          src={props.image}
          alt={props.title}
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {props.category}
          </span>
        </div>
        <Link key={props.id} to={`/post/${props.id}`}>
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline h-8">
            {props.title}
          </h2>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 grow line-clamp-3">
          {props.description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt="Tomson P."
          />
          <span>{props.author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
}
