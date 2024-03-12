import React, { useState, useEffect } from "react";
import DartMenu from "../../components/Menu/DartMenu";
import CreateIcon from "@mui/icons-material/Create";
import DartSubMenu from "../../components/Menu/DartSubMenu";
import PageTemplate from "../../components/PageTemplate";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const testMenu = [
  {
    icon: CreateIcon,
    title: "Baseline Reports",
    subtitle: "Generation Reports versus production",
    route: "/reports",
  },
  {
    icon: CompareArrowsIcon,
    title: "Compare",
    route: "/compare",
    subtitle: "Compare Pdf files and create Difference Report",
  },
  {
    icon: AccountTreeIcon,
    title: "BDT Analyser",
    route: "/test/bdt",
    subtitle: "Analyse a BDT",
  },
];

const TestingPage = (props) => {
  return (
    <PageTemplate>
      <DartSubMenu menuItems={testMenu} />
    </PageTemplate>
  );
};

export default TestingPage;
