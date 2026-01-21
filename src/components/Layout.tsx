import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
