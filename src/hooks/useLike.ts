import { useState } from "react";

export function useLike(initialLike: number) {
  const [count, setCount] = useState(initialLike);

  const handleLike = () => {
    setCount((prev) => prev + 1);
  };

  return { count, handleLike };
}

