import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const styles = {
  container: (theme) => ({
    zIndex: 2,
    borderRadius: "5px",
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    flexDirection: "column",
    transition: "0.2s all ease",
  }),
  node: (theme, props) => ({
    position: "relative",
    borderRadius: "5px",
    padding: "10px",
    "& > svg": {
      fontSize: "40px",
    },
    display: "flex",
    gap: "15px",
    alignItems: "center",
    background: theme.palette.primaryBackground,
    transition: "0.2s all ease",
    border: `solid 2px ${props.evaluated ? "green" : "black "}` ,
    "&:hover": {
      cursor: "pointer",
      border: `solid 2px ${theme.palette.primaryHighlight}`,
    },
  }),
  items: (theme) => ({
    marginLeft: "14px",
    borderLeft: `solid 2px ${theme.palette.primaryBackground}`,
    display: "flex",
    flexDirection: "column",
  }),
  title: (theme, color) => ({
    fontWeight: "700",
    background: color,
    borderRadius: "5px 5px 0px 0px",
    overflow: "hidden",
    padding: "10px",
  }),
  content: (theme) => ({
    fontSize: "10px",
    alignItems: "center",
    padding: "10px",
  }),
  tooltip: {
    marginLeft: "10px",
    background: "red",
    borderRadius: "20px",
    padding: "2px 8px",
    fontSize: "14px",
    position: "absolute",
    left: "100%",
  },
};

export default function Container(props) {
  const theme = useTheme();

  function handleClick(e) {
    e.stopPropagation()
    e.preventDefault()
    props.render.goToSequence(props.items)
  }

  return (
    <Box sx={styles.container(theme)}>
      <Box sx={styles.node(theme, props)} onClick={handleClick}>
        {props.Icon}
        {props.title && (
          <Typography fontSize={"1.0rem"} noWrap>
            {props.title}
          </Typography>
        )}

        {props.tooltip && (
          <Box sx={styles.tooltip}>
            <Typography fontSize={"0.8rem"} noWrap>
              {props.tooltip}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
