import { Smile } from "lucide-react";
import { useLike } from "@/hooks/useLike";
import { CreateAccountAlert } from "../ui/create-account-dialog";
import { useState } from "react";

type LikeButtonProps = {
  like: number;
  isLoggedIn?: boolean;
};

export function LikeButton({ like, isLoggedIn = false }: LikeButtonProps) {
  const { count, handleLike } = useLike(like);
  const [open, setOpen] = useState(false);

  const buttonStyle = "bg-brown-100 p-3 rounded-full border border-brown-500";

  const onClick = () => {
    if (!isLoggedIn) {
      setOpen(true);
      return;
    }

    handleLike();
  };

  return (
    <>
      <button
        onClick={onClick}
        className={`${buttonStyle} flex items-center justify-center gap-2 px-10`}
      >
        <Smile className="w-5 h-5" />
        <span className="text-body-1 text-brown-600">{count}</span>
      </button>
      <CreateAccountAlert open={open} onOpenChange={setOpen} />
    </>
  );
}

{
  /*return (
    <button
      onClick={handleLike}
      className={`${buttonStyle} flex items-center gap-2 px-10`}
    >
      <Smile className="w-5 h-5" />
      <span className="text-body-1 text-brown-600">{count}</span>
    </button>
  );
}*/
}
