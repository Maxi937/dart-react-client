import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import GeneratePage from "./pages/Generate";
import GenerateXpressionPage from "./pages/Generate";
import MonitorPage from "./pages/MonitorPage";
import DocumentationPage from "./pages/DocumentationPage";
import TestingPage from "./pages/Test";
import ReportPage from "./pages/Test/ReportPage";
import ComparePage from "./pages/Test/ComparePage";
import BdtPage from "./pages/Test/BdtPage";
import MigrationPage from "./pages/Migration";

function Router() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/generate" element={<GeneratePage />} />

      <Route path="/monitor" element={<MonitorPage />} />
      <Route path="/documentation" element={<DocumentationPage />} />
      <Route path="/test" element={<TestingPage />} />
      <Route path="/test/bdt" element={<BdtPage />} />
      <Route path="/reports" element={<ReportPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/migration" element={<MigrationPage />} />
      {/* <Route path="/filenet" element={<FilenetPage />} />
      <Route path="/carryforward" element={<CarryForwardPage />} /> */}
    </Routes>
  );
}

export default Router;
