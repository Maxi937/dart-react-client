import React, { useState, useEffect } from "react";
import DocGenStatus from "../components/DocGenStatus";
import PageTemplate from "../components/PageTemplate";
import EnvPicker from "../components/Pickers/EnvPicker";

const MonitorPage = (props) => {
  

  return (
    <PageTemplate>
      <DocGenStatus/>
    </PageTemplate>
  );
};

export default MonitorPage;
