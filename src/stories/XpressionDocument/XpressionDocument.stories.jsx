import XpressionDocument from "../../components/XpressionDocument";
import { createDocument, getPostX } from "../story-utils";

const document = await createDocument();

const documentWithPostX = await createDocument();
documentWithPostX.postx = await getPostX();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Xpression/Document",
  component: XpressionDocument,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = () => {
  return <XpressionDocument document={document} />;
};

export const WithPostX = () => {
  return <XpressionDocument document={documentWithPostX} />;
};
