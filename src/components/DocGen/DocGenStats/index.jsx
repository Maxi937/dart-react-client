import React, { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTheme } from "@emotion/react";
import Stat from "./Stat";

const styles = {
  container: (theme) => {
    return {
      userSelect: "none",
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      padding: "20px",
      transition: "all 0.2s ease",
    };
  },
  failRate: (failRate, failTolerance) => ({
    color: failRate > failTolerance ? "red" : "lightgreen",
  }),
};

export default function DocGenStats(props) {
  const theme = useTheme();

  const fails = totalFailures();
  const success = totalSuccess();
  const mostFrequent = mostFrequentDocumentModel();
  const failTolerance = 3;

  function totalFailures() {
    let fails = 0;
    props.data.forEach((d) => {
      if (d.stat_cd === "GENERROR") {
        fails += 1;
      }
    });
    return fails;
  }

  function totalSuccess() {
    let success = 0;
    props.data.forEach((d) => {
      if (d.stat_cd != "GENERROR") {
        success += 1;
      }
    });
    return success;
  }

  function mostFrequentDocumentModel() {
    let res = [];
    for (let x of props.data) {
      if (!res.filter((e) => e.model === x.mdl_cd).length > 0) {
        let count = 0;
        const model = x.mdl_cd;

        if (model) {
          for (let i of props.data) {
            if (i.mdl_cd == model) {
              count++;
            }
          }
          res.push({
            model: model,
            count: count,
          });
        }
      }
    }
    res.sort((a, b) => {
      return b.count - a.count;
    });

    if (!res[0]) {
      return {
        model: "-",
      };
    }

    return res[0];
  }

  function failRate() {
    if (fails == 0 && success == 0) {
      return <Typography color={"white"}>-</Typography>;
    }

    if (fails > success) {
      return (
        <Typography sx={styles.failRate(100, failTolerance)}>{100}%</Typography>
      );
    } else {
      const failPercent = ((fails / success) * 100).toFixed(2);
      return (
        <Typography sx={styles.failRate(failPercent, failTolerance)}>
          {failPercent}%
        </Typography>
      );
    }
  }

  return (
    <Box sx={styles.container(theme)}>
      <Stat title={"Fails"}>{fails}</Stat>

      <Stat title={"Success"}>{success}</Stat>

      <Stat title={"Fail Rate"}>{failRate()}</Stat>

      <Stat title={"Most Generated"}>{mostFrequent.model}</Stat>
    </Box>
  );
}
