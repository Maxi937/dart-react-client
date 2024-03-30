import { Box, Typography } from "@mui/material";
import Comparison from "./Comparison";
import RecordSetTest from "./RecordSetTest";
import Or from "./Or";

const styles = {
  container: {
    display: "flex",
  },
};

const components = {
  Comparison,
  RecordSetTest,
  Or
};

function getKeyFromProps(props) {
  let key = "";

  Object.keys(components).map((c) => {
    if (c in props) {
      key = c;
    }
  });
  return key;
}

export default function Condition({ props }) {
  const key = getKeyFromProps(props);
  const Render = components[key];

  if (!Render) {
    return;
  }

  return <Render props={props[key]} />;
}
