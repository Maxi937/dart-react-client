import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GeneratePage from "./pages/GeneratePage"
import ComparePage from "./pages/ComparePage";
import MonitorPage from "./pages/MonitorPage"
import DocumentationPage from "./pages/DocumentationPage"

function Router() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/generate" element={<GeneratePage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/monitor" element={<MonitorPage />} />
      <Route path="/documentation" element={<DocumentationPage />} />
      {/* <Route path="/filenet" element={<FilenetPage />} />
      <Route path="/carryforward" element={<CarryForwardPage />} /> */}
    </Routes>
  );
}

export default Router;
