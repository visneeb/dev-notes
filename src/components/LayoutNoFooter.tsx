import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

export function LayoutNoFooter() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
