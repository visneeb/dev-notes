import { Smile } from "lucide-react";
import { useLike } from "@/hooks/useLike";

type LikeButtonProps = {
  like: number;
};

export function LikeButton({ like }: LikeButtonProps) {
  const { count, handleLike } = useLike(like);
  const buttonStyle = "bg-brown-100 p-3 rounded-full border border-brown-500";

  return (
    <button
      onClick={handleLike}
      className={`${buttonStyle} flex items-center gap-2 px-10`}
    >
      <Smile className="w-5 h-5" />
      <span className="text-body-1 text-brown-600">{count}</span>
    </button>
  );
}
