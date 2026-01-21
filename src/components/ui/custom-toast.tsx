import { toast } from "sonner";
import { X } from "lucide-react";

export const showCustomToast = () => {
  toast.custom((t) => (
    <div className="bg-[#00C666] text-white p-4 px-5 w-100 rounded-2xl font-sans">
      <div className="flex flex-row justify-between pb-2 ">
        <h3 className="text-headline-4">Copied!</h3>
        <button onClick={() => toast.dismiss(t)}>
          <X size={20} strokeWidth={2} />
        </button>
      </div>
      <p className="text-body-2">
        This article has been copied to your clipboard
      </p>
    </div>
  ));
};

export const showCustomToastError = () => {
  toast.error("Failed to copy link");
};
