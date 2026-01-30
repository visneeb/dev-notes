
import HomePage from "../pages/HomePage.tsx";
import ArticlePage from "../pages/ArticlePage.tsx";
import { Layout } from "../components/Layout.tsx";

export const publicRoutes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/post/:id", element: <ArticlePage /> },
    ],
  },
];
