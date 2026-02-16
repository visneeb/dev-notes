import { Facebook, Linkedin, Twitter, Copy } from "lucide-react";
import { showCustomToast } from "../ui/custom-toast";
import { Button } from "@/components/ui/button";

type ShareButtonsProps = {
  url?: string;
};

export default function ShareButtons({ url }: ShareButtonsProps) {
  const shareUrl =
    url ?? (typeof window !== "undefined" ? window.location.href : "");

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      showCustomToast({
        title: "Copied!",
        description: "This article has been copied to your clipboard",
        variant: "success",
      });
    } catch {
      showCustomToast({
        title: "Failed!",
        description: "Unable to copy link",
        variant: "error",
      });
    }
  };

  const openShare = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const socialButtonStyle = "bg-white p-3 rounded-full border border-brown-500";

  return (
    <div className="flex justify-between items-center gap-2 ">
      {/* Copy button */}
      <div>
        <Button
          variant="outline"
          onClick={copyLink}
          aria-label="Copy link"
          className="gap-2"
        >
          <Copy className="w-5 h-5 " /> Copy link
        </Button>
      </div>

      {/* Social media share*/}
      <div className="flex gap-1.5">
        <button
          type="button"
          className={socialButtonStyle}
          aria-label="Share on Facebook"
          onClick={() =>
            openShare(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl,
              )}`,
            )
          }
        >
          <Facebook size={20} />
        </button>

        <button
          type="button"
          className={socialButtonStyle}
          aria-label="Share on LinkedIn"
          onClick={() =>
            openShare(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                shareUrl,
              )}`,
            )
          }
        >
          <Linkedin className="w-5 h-5" />
        </button>

        <button
          type="button"
          className={socialButtonStyle}
          aria-label="Share on Twitter"
          onClick={() =>
            openShare(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl,
              )}`,
            )
          }
        >
          <Twitter className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
