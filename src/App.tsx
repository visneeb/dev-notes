import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import { Layout } from "./components/Layout.tsx";
import { LayoutNoFooter } from "./components/LayoutNoFooter.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<ArticlePage />} />
        </Route>
        <Route element={<LayoutNoFooter />}>
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
