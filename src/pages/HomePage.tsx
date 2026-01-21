import { NavBar } from "@/components/NavBar.tsx";
import { HeroSection } from "@/components/landing/HeroSection";
import { Footer } from "@/components/Footer";
import { ArticleSection } from "@/components/landing/ArticleSection";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default HomePage;
