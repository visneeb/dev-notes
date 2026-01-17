// hooks/useBlogPosts.ts
import { useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

export function useBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPost = async (category?: string) => {
    const result = await axios.get<{ posts: Post[] }>(
      "https://blog-post-project-api.vercel.app/posts",
      { params: category ? { category } : {} }
    );
    setPosts(result.data.posts);
  };

  return { posts, getPost };
}
