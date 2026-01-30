import { LayoutNoFooter } from "@/components/LayoutNoFooter.tsx";
import SignUpPage from "@/pages/SignUpPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import { SuccessRigis } from "@/components/signup-login/SuccessRigis.tsx";

export const authRoutes = [
  {
    element: <LayoutNoFooter />,
    children: [
      { path: "/signup", element: <SignUpPage /> },
      { path: "/signup/success", element: <SuccessRigis /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
];
