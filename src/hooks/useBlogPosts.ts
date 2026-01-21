import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { filterPosts } from "@/lib/filterPosts";

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
  /*state */
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  /*state for filter / search*/
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [keyword, setKeyword] = useState<string>("");

  /*all posts*/
  const getAllPosts = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get<{ posts: Post[] }>(
        "https://blog-post-project-api.vercel.app/posts",
      );

      setAllPosts(res.data.posts);
      setPosts(res.data.posts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  /*logic for filter*/
  const applyFilters = useCallback(() => {
    setPosts(
      filterPosts(allPosts, {
        category: activeCategory,
        keyword,
      }),
    );
  }, [allPosts, activeCategory, keyword]);

  /*search */
  const searchPosts = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  /* category filter*/
  const filterByCategory = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  /* call applyFilters when state change */
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  /*id fetch*/
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

  const getTitleSuggestions = useCallback(
    (keyword: string): Post[] => {
      if (!keyword.trim()) return [];

      const lower = keyword.toLowerCase();

      return allPosts
        .filter((post) => post.title.toLowerCase().includes(lower))
        .slice(0, 5);
    },
    [allPosts],
  );

  return {
    posts,
    post, 
    loading,
    getAllPosts,
    searchPosts,
    filterByCategory,
    getPostById,
    getTitleSuggestions,
  };
}
