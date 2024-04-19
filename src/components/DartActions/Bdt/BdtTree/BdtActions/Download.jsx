import React, { useState, useEffect } from "react";
import DartButton from "../../../../Form/DartButton";
import { useCompileBdt } from "../../../../../hooks/useCompileBdt";
import CenteredSpinner from "../../../../Primitives/CenteredSpinner";
import { useQueryClient } from "react-query";
import { dartService } from "../../../../../service/dart-service";

const styles = {};

export default function Download(props) {
  // const { data, refetch, isFetching } = useCompileBdt(
  //   props.documentModel,
  //   props.env,
  //   xml,
  //   false
  // );

  async function handleDownload() {
    const { bdtXml } = await dartService.getBdt(props.documentModel, props.env);

    const blob = new Blob([bdtXml], {
      type: "text/plain",
    });

    const blobUrl = window.URL.createObjectURL(blob);
    const anchor = window.document.createElement("a");
    anchor.download = String(props.documentModel.mdl_nm).concat(".xml");
    anchor.href = blobUrl;
    anchor.click();
    window.URL.revokeObjectURL(blobUrl);
  }

  return <DartButton handleClick={handleDownload}>Download BDT</DartButton>;
}
