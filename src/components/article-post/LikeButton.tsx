import { Smile } from "lucide-react";
import { useLike } from "@/hooks/useLike";
import { CreateAccountAlert } from "../ui/create-account-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type LikeButtonProps = {
  like: number;
  isLoggedIn?: boolean;
};

export function LikeButton({ like, isLoggedIn = false }: LikeButtonProps) {
  const { count, handleLike } = useLike(like);
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (!isLoggedIn) {
      setOpen(true);
      return;
    }

    handleLike();
  };

  return (
    <>
      <Button variant="outline" className="gap-1 " onClick={onClick}>
        <Smile className="w-5 h-5" />
        {count}
      </Button>
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
