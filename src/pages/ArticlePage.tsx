import { ArticlePostPage } from "@/components/article-post/ArticlePost";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

function ArticlePage() {
  return (
    <>
      <Toaster />
      <NavBar />
      <ArticlePostPage />
      <Footer />
    </>
  );
}

export default ArticlePage;
