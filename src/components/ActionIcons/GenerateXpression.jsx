import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { dartService } from "../../service/dart-service.js";
import { useNavigate } from "react-router";

const styles = {
  notFavourite: {
    color: "rgb(12, 255, 255)",
  },
};

const GenerateXpression = ({ content, size = "large" }) => {
  const navigate = useNavigate();
  //   const userContext = useContext(UserContext);

  async function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const data = await dartService.testGenerateXpression();

    if (data.success) {
      alert(JSON.stringify(data));
    }
  }

  return (
    <IconButton aria-label="generate" onClick={handleClick}>
      <FavoriteBorder fontSize={size} />
    </IconButton>
  );
};

export default GenerateXpression;
