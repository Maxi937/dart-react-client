import DocGenItemDetail from "../../components/DocGen/DocGenItemDetail";
import { docgenitemSuccess, docgenitemFail } from "../fixtures/docgen";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "DocGen/Item Detail",
  component: DocGenItemDetail,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = () => {
  return (
    <DocGenItemDetail docgenitem={docgenitemSuccess} />
  );
};
