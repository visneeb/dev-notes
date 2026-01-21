import { Dropdown } from "./ui/nav-dropdown";

export function NavBar() {
  return (
    <nav className="flex flex-col border-b bg-brown-100">
      <div className="flex justify-between items-center h-14 md:h-20">
        <div className="pl-8 md:pl-[7vw]">
          <h1>VB_</h1>
        </div>

        {/* Mobile menu icon */}
        <Dropdown />

        {/* Desktop menu */}
        <div className="hidden md:flex gap-2 pr-2 md:pr-[7vw]">
          <a
            className="inline-flex items-center justify-center
  text-body-1
  px-10 py-[0.6rem]
  border rounded-full
  text-brown-600 bg-white border-brown-400"
          >
            Log in
          </a>
          <a
            className="inline-flex items-center justify-center
  text-body-1
  px-10 py-[0.6rem]
  border rounded-full
  text-white bg-brown-600 border-brown-600"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
