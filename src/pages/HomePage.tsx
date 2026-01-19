import { NavBar } from "../components/landing/nav-bar.tsx";
import { HeroSection } from "../components/landing/hero-section.tsx";
import { Footer } from "../components/landing/footer.tsx";
import { ArticleSection } from "../components/landing/article-section.tsx";

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
