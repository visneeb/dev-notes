import { Dropdown } from "./ui/nav-dropdown";
import { Button } from "./ui/button";

import { Link } from "react-router-dom";

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
          <Link to="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary">Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
