import { useState } from "react";
import axios from "axios";

export type Post = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  likes: number;
  content: string;
};

export function useBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  const getAllPosts = async (category?: string) => {
    try {
      setLoading(true);

      const res = await axios.get<{ posts: Post[] }>(
        "https://blog-post-project-api.vercel.app/posts",
        category ? { params: { category } } : undefined,
      );

      setPosts(res.data.posts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPostById = async (id: number | string) => {
    try {
      setLoading(true);

      const res = await axios.get<Post>(
        `https://blog-post-project-api.vercel.app/posts/${id}`,
      );

      setPost(res.data);
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setLoading(false);
    }
  };

  return { posts, post, loading, getAllPosts, getPostById };
}
