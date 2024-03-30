import React, { useState, useEffect } from "react";
import DartButton from "../../../../Form/DartButton";
import { useQueryClient } from "react-query";
import { useTestBdt } from "../../../../../hooks/useTestBdt";

const styles = {};

export default function Test(props) {
  const queryClient = useQueryClient();

  const [enabled, setEnabled] = useState(false);

  const { data, refetch, isFetching } = useTestBdt(
    props.documentModel,
    props.env,
    props.bdt,
    false
  );

  async function handleCompile() {
    refetch();
  }

  if (data) {
    console.log(data);
  }

  return (
    <DartButton loading={isFetching} handleClick={handleCompile}>
      Test
    </DartButton>
  );
}
