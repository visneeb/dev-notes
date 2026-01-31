import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public.routes";
import { authRoutes } from "./auth.routes";

export function AppRoutes() {
  return useRoutes([...publicRoutes, ...authRoutes]);
}
