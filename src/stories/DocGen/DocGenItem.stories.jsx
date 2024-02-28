import DocGenItem from "../../components/DocGenItem";
import { docgenitemSuccess, docgenitemFail } from "../fixtures/docgen";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "DocGen/Item",
  component: DocGenItem,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success = () => {
  return (
    <DocGenItem docgenitem={docgenitemSuccess} />
  );
};

export const Fail = () => {
  return (
    <DocGenItem docgenitem={docgenitemFail} />
  );
};
