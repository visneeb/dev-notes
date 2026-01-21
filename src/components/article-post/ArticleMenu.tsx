import { LikeButton } from "./LikeButton";
import ShareButtons from "./ShareButtons";

type ArticleMenuProps = {
  like: number;
};

export function ArticleMenu({ like }: ArticleMenuProps) {
  return (
    <div className="flex flex-col  sm:flex-row justify-between bg-brown-200 py-6 px-6 md:rounded-2xl gap-3">
      <LikeButton like={like} />
      <ShareButtons />
    </div>
  );
}
