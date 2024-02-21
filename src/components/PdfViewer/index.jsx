import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Box from "@mui/material/Box";
import Download from "./download.jsx";
import Zoom from "./zoom.jsx";
import { useTheme } from "@emotion/react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const defaultstyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "inherit",
  },
  pdf: (theme) => {
    return {
      width: "90%",
      display: "flex",
      justifyContent: "center",
      overflowY: "scroll",
      overflowX: "hidden",
      transition: "all 0.2s ease",
      ...theme.scrollbar
    };
  },
  controls: {
    padding: "1px",
    display: "flex",
  },
  download: {
    marginLeft: "auto",
  },
};

const PdfViewer = ({ blob, style = defaultstyle }) => {
  const theme = useTheme();
  const [numPages, setNumPages] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1.2);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function mapPages() {
    console.log(numPages);
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <>
          <Page
            key={"page-" + i}
            scale={zoomLevel}
            pageNumber={i}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
          <br></br>
        </>
      );
    }
    return pages;
  }

  return (
    <>
      <Box sx={style.container}>
        <Box sx={style.pdf(theme)}>
          <Document id="pdf" file={blob} onLoadSuccess={onDocumentLoadSuccess}>
            {mapPages()}
          </Document>
        </Box>

        <Box sx={style.controls}>
          <Zoom zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
          <Box sx={style.download}>
            <Download blob={blob} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PdfViewer;
