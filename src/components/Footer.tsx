import { Contact } from "./Contact";

export function Footer() {
  return (
    <footer className="bg-brown-200 px-4 py-10 flex flex-col justify-center items-center md:flex-row md:justify-between md:h-36">
      <div className="flex flex-row pb-6 gap-6 md:p-0 md:pl-[7vw]">
        <p className="text-body-1 text-brown-500">Get in touch</p>
        <Contact />
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
