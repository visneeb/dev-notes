import { Linkedin, Github, Mail } from "lucide-react";

export function Contact() {
  const wrapperClass =
    "flex items-center justify-center bg-brown-500 rounded-full w-6 h-6 hover:opacity-60";
  return (
    <span className="flex flex-row gap-4">
      <a
        href="https://www.linkedin.com/in/visnee-bunyachatphisuth"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={wrapperClass}
      >
        <Linkedin fill="#efeeeb" stroke="none" size={16} />
      </a>

      <a
        href="https://github.com/visneeb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={wrapperClass}
      >
        <Github
          fill="#efeeeb"
          stroke="none"
          size={23}
          className="translate-y-0.75"
        />
      </a>
      <a href="mailto:visinee@gmail.com" aria-label="Email" className={wrapperClass}>
        <Mail color="#efeeeb" size={14} />
      </a>
    </span>
  );
}
