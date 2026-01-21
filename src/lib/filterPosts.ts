import type { Post } from "@/hooks/useBlogPosts";

type FilterOptions = {
  category: string;
  keyword: string;
};

export function filterPosts(
  posts: Post[],
  { category, keyword }: FilterOptions,
): Post[] {
  let result = posts;

  if (category !== "All") {
    result = result.filter((post) => post.category === category);
  }

  if (keyword.trim()) {
    const lower = keyword.toLowerCase();
    result = result.filter(
      (post) =>
        post.title.toLowerCase().includes(lower) ||
        post.description.toLowerCase().includes(lower) ||
        post.content.toLowerCase().includes(lower),
    );
  }

  return result;
}
