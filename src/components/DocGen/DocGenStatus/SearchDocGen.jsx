import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useDocGenStatus } from "../../../hooks/useDocGenStatus.jsx";
import DocGenItem from "../DocGenItem/index.jsx";
import { jsDateToSqlDate } from "../../../utils/format-utils.js";
import CenteredSpinner from "../../Primitives/CenteredSpinner/index.jsx";
import DartDatePicker from "../../Form/DartDatePicker/index.jsx";
import moment from "moment";
import PaginateContent from "../../Primitives/PaginatedContent/index.jsx";
import DocGenStats from "../DocGenStats/index.jsx";
import Spacer from "../../Primitives/Spacer/index.jsx";
import SearchForm from "../DocGenSearch";
import DartModal from "../../Primitives/DartModal/index.jsx";
import DartButton from "../../Form/DartButton/index.jsx";

const styles = {};

function SearchDocGen({ query, setQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError } = useDocGenStatus(query);

  if (isLoading) {
    return <CenteredSpinner />;
  }

  if (isError) {
    return <Typography>Error</Typography>;
  }

  const { docgeninfo } = data;

  return (
    <Box>
      <DocGenStats data={docgeninfo} />
      <Spacer padding={"10px"} />
      <PaginateContent
        title={<DartButton handleClick={() => setIsOpen(true)}>Search</DartButton>}
        data={docgeninfo}
        pageSize={10}
        render={(item) => <DocGenItem docgenitem={item} />}
      />
      <DartModal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <SearchForm
          handleSearch={(query) => {
            setIsOpen(false);
            setQuery(query);
          }}
        />
      </DartModal>
    </Box>
  );
}

export default SearchDocGen;
