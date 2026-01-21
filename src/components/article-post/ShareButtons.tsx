import { Facebook, Linkedin, Twitter, Copy } from "lucide-react";
import { showCustomToastError, showCustomToast } from "../ui/custom-toast";

type ShareButtonsProps = {
  url?: string;
};

export default function ShareButtons({ url }: ShareButtonsProps) {
  const shareUrl =
    url ?? (typeof window !== "undefined" ? window.location.href : "");

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      showCustomToast();
    } catch {
      showCustomToastError();
    }
  };

  const openShare = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const buttonStyle =
    "bg-brown-100 px-3 py-3 rounded-full border border-brown-500";
  const socialButtonStyle =
    "bg-brown-100 p-3 rounded-full border border-brown-500";

  return (
    <div className="flex justify-between items-center gap-2 ">
      {/* Copy button */}
      <div>
        <button
          onClick={copyLink}
          aria-label="Copy link"
          className={`${buttonStyle} flex flex-row gap-2 px-6 w-fit justify-center items-center`}
        >
          <Copy className="w-5 h-5 " />{" "}
          <span className="text-body-1 text-brown-600 ">
            Copy link
          </span>
        </button>
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
