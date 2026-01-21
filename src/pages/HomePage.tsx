import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/landing/HeroSection";
import { ArticleSection } from "@/components/landing/ArticleSection";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ArticleSection />
    </Layout>
  );
}

export default HomePage;
