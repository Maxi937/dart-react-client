import React, { useState, useEffect } from "react";
import DartMenu from "../../components/Menu/DartMenu";
import CreateIcon from "@mui/icons-material/Create";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import CallMergeIcon from "@mui/icons-material/CallMerge";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PageTemplate from "../../components/PageTemplate";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ServerNotice from "../../components/ServerNotice";
import Spacer from "../../components/Primitives/Spacer";

const homeMenu = [
  {
    icon: AddCircleIcon,
    title: "Create",
    route: "/create",
  },
  {
    icon: CreateIcon,
    title: "Generate",
    route: "/generate",
  },
  {
    icon: ContentPasteIcon,
    title: "Test",
    route: "/test",
  },
  {
    icon: CallMergeIcon,
    title: "Migration",
    route: "/migration",
  },
  {
    icon: MonitorHeartOutlinedIcon,
    title: "Monitor",
    route: "/monitor",
  },
  {
    icon: AutoStoriesOutlinedIcon,
    title: "Documentation",
    route: "/documentation",
  },
];

const HomePage = (props) => {
  return (
    <PageTemplate>
      <ServerNotice></ServerNotice>
      <Spacer padding={"2rem"}/>
      <DartMenu menuItems={homeMenu} />
    </PageTemplate>
  );
};

export default HomePage;
