import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";
import GeneratePage from "./pages/GeneratePage";
import ComparePage from "./pages/ComparePage";
import CarryForwardPage from "./pages/CarryForwardPage";
import FilenetPage from "./pages/FilenetPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const location = useLocation();

  return (
    <>
      <SiteHeader />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/filenet" element={<FilenetPage />} />
        <Route path="/carryforward" element={<CarryForwardPage />} />
      </Routes>
    </>
  );
}

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
