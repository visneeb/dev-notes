type Post = {
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

type FilterOptions = {
  categoryId: number | null;
  keyword: string;
};

export function filterPosts(
  posts: Post[],
  { categoryId, keyword }: FilterOptions,
): Post[] {
  return posts.filter((post) => {
    const matchCategory =
      categoryId === null || post.category_id === categoryId;

    const matchKeyword =
      !keyword || post.title.toLowerCase().includes(keyword.toLowerCase());

    return matchCategory && matchKeyword;
  });
}
