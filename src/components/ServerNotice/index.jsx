import React, { useState, useEffect } from "react";
import DartMenu from "../../components/Menu/DartMenu";
import PageTemplate from "../../components/PageTemplate";
import { Box, Typography } from "@mui/material";
import { useServerNotifications } from "../../hooks/useServerNotifications";
import CenteredSpinner from "../Primitives/CenteredSpinner";
import Carousel from "../Primitives/Carousel";
import ServerNoticeItem from "./ServerNoticeItem";

const style = {
  container: {
    padding: "10px",
    margin: "10px",
  },
};

const ServerNotice = (props) => {
  const { data, isLoading, isError } = useServerNotifications();

  if (isLoading) {
    return <CenteredSpinner />;
  }

  const {notifications} = data;
  console.log(data)

  return (
    <Carousel>
      {notifications.map((n) => <ServerNoticeItem title={n.title} data={n.data} />)}
    </Carousel>
  );
};

export default ServerNotice;
