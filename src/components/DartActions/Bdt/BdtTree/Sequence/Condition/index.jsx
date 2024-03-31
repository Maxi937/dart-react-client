import Comparison from "./Comparison";
import RecordSetTest from "./RecordSetTest";
import Or from "./Or";
import { Typography } from "@mui/material";

const components = {
  Comparison,
  RecordSetTest,
  Or,
  And: Or
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

export default function Condition({props}) {
  if(!props) {
    return <Typography>What is wrong with this language</Typography>
  }

  const key = getKeyFromProps(props);
  const Render = components[key];

  if (!Render) {
    return;
  }

  return <Render props={props} />;
}
