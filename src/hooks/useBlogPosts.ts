import { useState, useCallback, useEffect } from "react";
import { filterPosts } from "@/lib/filterPosts";
import { api } from "@/utils/axios";

export type Post = {
  id: number;
  image: string;
  category_id: number;
  category_name: string;
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
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [keyword, setKeyword] = useState<string>("");

  /*all posts*/
  const getAllPosts = useCallback(async () => {
    try {
      setLoading(true);

      const res = await api.get<{ data: Post[] }>("/posts");

      setAllPosts(res.data.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  /*logic for filter*/
  const applyFilters = useCallback(() => {
    if (!allPosts.length) {
      setPosts([]);
      return;
    }
    setPosts(
      filterPosts(allPosts, {
        categoryId: activeCategoryId,
        keyword,
      }),
    );
  }, [allPosts, activeCategoryId, keyword]);

  /*search */
  const searchPosts = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  /* category filter*/
  const filterByCategory = useCallback((categoryId: number | null) => {
    setActiveCategoryId(categoryId);
  }, []);

  /* call applyFilters when state change */
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  /*id fetch*/
  const getPostById = useCallback(async (id: number | string) => {
    try {
      setLoading(true);

      const res = await api.get<{ data: Post }>(`/posts/${id}`);
      setPost(res.data.data);
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setLoading(false);
    }
  }, []);

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
