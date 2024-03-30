import React, { useState, useEffect } from "react";
import DartButton from "../../../../Form/DartButton";
import { useCompileBdt } from "../../../../../hooks/useCompileBdt";
import CenteredSpinner from "../../../../Primitives/CenteredSpinner";
import { useQueryClient } from "react-query";
import { dartService } from "../../../../../service/dart-service";

const styles = {};

export default function Compile(props) {
  // const { data, refetch, isFetching } = useCompileBdt(
  //   props.documentModel,
  //   props.env,
  //   xml,
  //   false
  // );

  async function handleCompile() {
    await dartService.testBdt(props.compile.all.sequence, props.candidateXml);
  }

  return <DartButton handleClick={handleCompile}>Compile</DartButton>;
}
