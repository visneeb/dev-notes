import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./public.routes";
import { authRoutes } from "./auth.routes";
import { protectedRoutes } from "./protected.routes";

export function AppRoutes() {
  return useRoutes([...publicRoutes, ...authRoutes, ...protectedRoutes]);
}
