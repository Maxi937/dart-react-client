import { Buffer } from "buffer";

export async function getPostX() {
  const response = await fetch("testpostx.xml");
  const xml = await response.text();
  return xml;
}

export async function createDocument() {
  let response = await fetch("testdocument.pdf");
  let data = await response.blob();
  let metadata = {
    type: "application/pdf",
  };

  const file = new File([data], "testfile.pdf", metadata);
  const bytes = await file.arrayBuffer();

  const document = {
    filename: "My-Test-File",
    pdfbytes: {
      data: Buffer.from(bytes),
    },
  };
  return document;
}
