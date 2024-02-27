import React, { useState, useEffect } from "react";
import DocGenStatus from "../components/DocGenStatus";
import PageTemplate from "../components/PageTemplate";
import EnvPicker from "../components/Pickers/EnvPicker";

const MonitorPage = (props) => {
  const [env, setEnv] = useState("");

  return (
    <PageTemplate>
      <EnvPicker onSelected={(env) => setEnv(env)} />
      {env && <DocGenStatus env={env} />}
    </PageTemplate>
  );
};

export default MonitorPage;
