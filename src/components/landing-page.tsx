import { Menu } from "lucide-react";


export function NavBar() {
  return (
    <nav className="flex justify-between items-center h-14 md:h-20 border-b bg-brown-100">
      <div className="pl-8 md:pl-[7vw]">
        <h1>VB_</h1>
      </div>

      {/* Mobile menu icon */}
      <button className="pr-3 md:hidden">
        <Menu size={28} className="text-brown-400" />
      </button>

      {/* Desktop menu */}
      <span className="hidden md:flex md:flex-row gap-2 pr-2 md:pr-[7vw]">
        <a className="text-body-1 text-brown-600 px-10 py-[0.7rem] bg-white border border-brown-400 rounded-full cursor-pointer">
          Log in
        </a>
        <a className="text-body-1 text-white px-11 py-[0.7rem] bg-brown-600 rounded-full cursor-pointer">
          Sign up
        </a>
      </span>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="max-w-6xl px-4 pt-10  flex flex-col items-center gap-6 m-auto md:grid md:grid-cols-3 md:gap-15">
      <div className="text-center md:text-right">
        <h1 className="text-headline-2 leading-12 pb-4 text-brown-600 md:text-headline-1">
          Stay <span className="inline md:block "> Informed,</span>
          <span className="block ">Stay Inspired</span>
        </h1>
        <p className="text-body-1 text-brown-400">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>
      <div className="relative w-full max-w-md aspect-4/5 overflow-hidden rounded-3xl mx-auto">
        <img
          className="w-full h-full object-cover"
          src="./img/landing-page/mocking-img.jpg"
        />
        <div className="absolute inset-0 bg-[rgba(190,186,177,0.25)]"></div>
      </div>
      <div className="self-start flex flex-col md:self-center">
        <p className="text-body-3 text-brown-400 pb-1">-Author</p>
        <h3 className="text-headline-3 pb-3">Visnee Bunyachatphisuth</h3>
        <p className="text-body-1 text-brown-400">
          Dev Notes is my personal developer journal where I document projects,
          experiments, and lessons learned. I also welcome idea exchange in the
          comments, creating a space for feedback, discussion, and continuous
          improvement.
        </p>
      </div>
    </section>
  );
}


