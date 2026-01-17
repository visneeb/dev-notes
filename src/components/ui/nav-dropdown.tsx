import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useState } from "react";

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
        <DropdownMenuItem className="w-full flex justify-center items-center  text-body-1 text-brown-600  py-[0.7rem] bg-white border border-brown-400 rounded-full cursor-pointer ">
          Log in
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full flex justify-center titems-center  ext-body-1 text-white  py-[0.7rem] bg-brown-600 rounded-full cursor-pointer hover:bg-brown-500! hover:text-brown-100!">
          Sign up
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
