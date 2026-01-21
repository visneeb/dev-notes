import { Textarea } from "@/components/ui/textarea";

function Comment() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-body-1 text-brown-400">Comment</p>
      <Textarea placeholder="What are your thoughts?" />
      <div className="w-full flex justify-end">
        <button className="text-body-1 px-10 py-[0.6rem] border rounded-full text-white bg-brown-600 border-brown-600">
          Send
        </button>
      </div>
    </div>
  );
}

export default Comment;
