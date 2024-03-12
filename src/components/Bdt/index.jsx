import { Box, Typography } from "@mui/material";
import { useAnalyseBdt } from "../../hooks/useAnalyseBdt";

export default function Bdt({ documentModel }) {
	console.log(documentModel)
  const { data, isLoading, isError } = useAnalyseBdt(documentModel.mdl_nm);

  return (
    <Box>
      <Typography>{documentModel.mdl_cd}</Typography>
    </Box>
  );
}
