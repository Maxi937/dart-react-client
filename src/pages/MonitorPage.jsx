import React, { useState, useEffect } from "react";
import DocGenStatus from "../components/DocGen/DocGenStatus";
import PageTemplate from "../components/PageTemplate";

const MonitorPage = (props) => {
  

  return (
    <PageTemplate>
      <DocGenStatus/>
    </PageTemplate>
  );
};

export default MonitorPage;
