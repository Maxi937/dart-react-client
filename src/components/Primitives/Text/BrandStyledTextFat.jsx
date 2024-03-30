import Typography from "@mui/material/Typography";

const style = {
  fontWeight: "900",
  background:
    "-webkit-linear-gradient(-89.5deg, rgba(10,190,265,1) 20%, rgba(90,150,285,1) 50%, rgba(249,45,255,1) 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "Verdana, Arial, sans-serif",
};

function BrandStyledTextFat({ text }) {
  return (
    <Typography sx={style} variant="h4">
      {text}
    </Typography>
  );
}

export default BrandStyledTextFat;
