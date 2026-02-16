import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "sonner";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster
          toastOptions={{
            className: "w-fit md:w-fit",
          }}
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
