import { useState } from "react";
import SearchDocGenForm from "../../components/DocGen/DocGenSearch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "DocGen/SearchForm",
  component: SearchDocGenForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success = () => {
  const [query, setQuery] = useState({});
  return <SearchDocGenForm query={query} setQuery={setQuery} />;
};
