import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";
import { Layout } from "../components/Layout";

export const publicRoutes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/post/:id", element: <ArticlePage /> },
    ],
  },
];
