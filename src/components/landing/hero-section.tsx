export function HeroSection() {
  return (
    <section className="max-w-6xl px-4 pt-10  flex flex-col items-center gap-6 m-auto md:grid md:grid-cols-3 md:gap-15 p-10">
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
          src="./src/assets/img/landing-page/mocking-img.jpg"
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
