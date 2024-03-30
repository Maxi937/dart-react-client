import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Box from "@mui/material/Box";
import Download from "./download.jsx";
import Zoom from "./zoom.jsx";
import { useTheme } from "@emotion/react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import CenteredSpinner from "../Primitives/CenteredSpinner/index.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const defaultstyle = {
  container: (theme) => ({
    border: `1px solid ${theme.palette.primaryHighlight}`,
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    overflowY: "scroll",
    overflowX: "hidden",
    ...theme.scrollbar,
  }),
  page: {
    margin: "20px",
    border: "3px solid black",
    borderRadius: "15px",
    overflow: "hidden",
  },
  controls: (theme) => ({
    border: `1px solid ${theme.palette.primaryHighlight}`,
    padding: "10px",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
  }),
};

const PdfViewer = ({ blob, style = defaultstyle }) => {
  const theme = useTheme();
  const [numPages, setNumPages] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function mapPages() {
    const pages = [];

    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <Box key={"container-" + i} sx={style.page}>
          <Page
            key={"page-" + i}
            scale={zoomLevel}
            pageNumber={i}
            renderAnnotationLayer={true}
            renderTextLayer={true}
            onLoadSuccess={async (page) =>
              console.log(await page.getAnnotations())
            }
          />
        </Box>
      );
    }
    return pages;
  }

  return (
    <>
      <Box sx={style.container}>
        <Document
          loading={""}
          id="pdf"
          file={blob}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {mapPages()}
        </Document>
      </Box>

      <Box sx={style.controls(theme)}>
        <Zoom zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
        <Download blob={blob} />
      </Box>
    </>
  );
};

export default PdfViewer;
