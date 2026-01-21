import { LikeButton } from "./LikeButton";
import ShareButtons from "./ShareButtons";

type ArticleMenuProps = {
  like: number;
};

export function ArticleMenu({ like }: ArticleMenuProps) {
  return (
    <div className="flex justify-between bg-brown-200 py-6 px-6 rounded-2xl">
      <LikeButton like={like} />
      <ShareButtons />
    </div>
  );
}
