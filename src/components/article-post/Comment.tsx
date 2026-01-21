import { Textarea } from "@/components/ui/textarea";
import { CreateAccountAlert } from "../ui/create-account-dialog";
import { useState } from "react";

type LogInProps = {
  isLoggedIn?: boolean;
};

function Comment({ isLoggedIn = false }: LogInProps) {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (!isLoggedIn) {
      setOpen(true);
      return;
    }
  };

  return (
    <div className="flex flex-col gap-3 pb-11">
      <p className="text-body-1 text-brown-400">Comment</p>
      <Textarea placeholder="What are your thoughts?" />
      <div className="w-full flex md:justify-end ">
        <button
          className="text-body-1 px-10 py-[0.7rem] border rounded-full text-white bg-brown-600 border-brown-600"
          onClick={onClick}
        >
          Send
        </button>
      </div>
      <CreateAccountAlert open={open} onOpenChange={setOpen} />
    </div>
  );
}

export default Comment;
