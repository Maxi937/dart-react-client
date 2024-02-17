import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";

function Router() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/generate" element={<GeneratePage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/filenet" element={<FilenetPage />} />
      <Route path="/carryforward" element={<CarryForwardPage />} /> */}
    </Routes>
  );
}

export default Router;
