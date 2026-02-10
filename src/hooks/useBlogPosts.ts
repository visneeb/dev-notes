import { useState, useCallback, useEffect } from "react";
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
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [keyword, setKeyword] = useState("");

  //fetch posts with filters
  const fetchPosts = useCallback(
    async (categoryId?: number | null, searchKeyword?: string) => {
      try {
        setLoading(true);
        const params = new URLSearchParams();

        if (categoryId != null && categoryId !== undefined) {
          params.set("category_id", String(categoryId));
        }
        if (searchKeyword?.trim()) {
          params.set("keyword", searchKeyword.trim());
        }

        const queryString = params.toString();
        const url = queryString ? `/posts?${queryString}` : "/posts";
        const res = await api.get<{ data: Post[] }>(url);

        setPosts(res.data.data ?? []);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  //re-fetch when filters change
  useEffect(() => {
    fetchPosts(activeCategoryId, keyword);
  }, [activeCategoryId, keyword, fetchPosts]);

  // actions
  const getAllPosts = useCallback(() => {
    fetchPosts(activeCategoryId, keyword);
  }, [fetchPosts, activeCategoryId, keyword]);

  const searchPosts = useCallback((value: string) => {
    setKeyword(value);
  }, []);

  const filterByCategory = useCallback((categoryId: number | null) => {
    setActiveCategoryId(categoryId);
  }, []);

  // fetch by id
  const getPostById = useCallback(async (id: number | string) => {
    try {
      setLoading(true);
      const res = await api.get<{ data: Post[] }>(`/posts/${id}`);
      const postData = Array.isArray(res.data.data)
        ? res.data.data[0]
        : res.data.data;
      setPost(postData ?? null);
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // title suggestions (from current posts)
  const getTitleSuggestions = useCallback(
    (searchKeyword: string): Post[] => {
      if (!searchKeyword.trim()) return [];

      const lower = searchKeyword.toLowerCase();
      return posts
        .filter((p) => p.title.toLowerCase().includes(lower))
        .slice(0, 5);
    },
    [posts],
  );

  return {
    posts,
    post,
    loading,
    keyword,
    getAllPosts,
    searchPosts,
    filterByCategory,
    getPostById,
    getTitleSuggestions,
  };
}
