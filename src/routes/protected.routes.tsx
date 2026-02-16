import { Layout } from "@/components/Layout";
import { ProtectedRoute } from "./ProtectedRoute";
//import DashboardPage from "@/pages/DashboardPage";

export const protectedRoutes = [
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      //{ path: "/dashboard", element: <DashboardPage /> },
    ],
  },
];
