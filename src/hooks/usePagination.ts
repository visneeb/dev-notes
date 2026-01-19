import { useState } from "react";

export function usePagination(step = 6) {
  const [visible, setVisible] = useState(step);

  const paginate = () => {
    setVisible(prev => prev + step);
  };

  const reset = () => {
    setVisible(step);
  };

  return { visible, paginate, reset };
}
