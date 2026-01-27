import { Dropdown } from "./ui/nav-dropdown";
import { Button } from "./ui/button";
import { AuthButton } from "./ui/styled-button";
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
          <Button variant="outline" >Log in</Button>
          <Link to="/signup">
            <AuthButton variant="primary">Sign up</AuthButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}
