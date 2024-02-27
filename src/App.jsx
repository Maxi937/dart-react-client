import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import SiteHeader from "./components/SiteHeader";
import { ThemeProvider } from "@mui/material/styles";
import Dark from "./themes/Dark.jsx";

const rootElement = createRoot(document.getElementById("root"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 0, // 1 hour in ms
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
      refetchOnReconnect: false
    },
  },
});

rootElement.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={Dark}>
        <SiteHeader />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
