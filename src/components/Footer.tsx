import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const wrapperClass =
    "flex items-center justify-center bg-brown-500 rounded-full w-6 h-6 hover:opacity-60";

  return (
    <footer className="bg-brown-200 px-4 py-10 flex flex-col justify-center items-center md:flex-row md:justify-between md:h-36">
      <div className="flex flex-row pb-6 gap-6 md:p-0 md:pl-[7vw]">
        <p className="text-body-1 text-brown-500">Get in touch</p>
        <span className="flex flex-row gap-4">
          <span className={wrapperClass}>
            <Linkedin fill="#efeeeb" stroke="none" size={16} />
          </span>
          <span className={wrapperClass}>
            <Github
              fill="#efeeeb"
              stroke="none"
              size={23}
              className="translate-y-0.75"
            />
          </span>
          <span className={wrapperClass}>
            <Mail color="#efeeeb" size={14} />
          </span>
        </span>
      </div>
      <div className="md:pr-[7vw]">
        <a
          href="/"
          className="text-body-1 text-brown-600 underline decoration-brown-600 "
        >
          Home page
        </a>
      </div>
    </footer>
  );
}
