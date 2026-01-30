import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

export function Dropdown() {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          type="button"
          className="pr-3 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu size={28} className="text-brown-400" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen max-w-full px-6 py-4 flex flex-col gap-2 md:hidden">
        <DropdownMenuItem asChild className="rounded-full">
          <Link to="/login">
            <Button variant="outline" className="w-full py-[0.7rem]">
              Log in
            </Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="rounded-full">
          <Link to="/signup">
            <Button variant="primary" className="w-full py-[0.7rem]">
              Sign up
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
