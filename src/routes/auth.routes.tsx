import { LayoutNoFooter } from "@/components/LayoutNoFooter";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import { SuccessRegister } from "@/components/signup-login/SuccessRegister";

export const authRoutes = [
  {
    element: <LayoutNoFooter />,
    children: [
      { path: "/signup", element: <SignUpPage /> },
      { path: "/signup/success", element: <SuccessRegister /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
];
