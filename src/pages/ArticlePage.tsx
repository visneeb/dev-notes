import { ArticlePostPage } from "@/components/article-post/ArticlePost";
import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";

function ArticlePage() {
  return (
    <>
      <Toaster />
      <Layout>
        <ArticlePostPage />
      </Layout>
    </>
  );
}

export default ArticlePage;
