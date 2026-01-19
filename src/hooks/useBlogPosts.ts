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
  const [loading, setLoading] = useState(false);

  const getAllPosts = async (category?: string) => {
    setLoading(true);

    const res = await axios.get<{ posts: Post[] }>(
      "https://blog-post-project-api.vercel.app/posts",
      {
        params: category ? { category } : {},
      }
    );

    setPosts(res.data.posts);
    setLoading(false);
  };

  return { posts, loading, getAllPosts };
}
