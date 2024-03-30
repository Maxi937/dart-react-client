import BdtSequence from "../../components/DartActions/Bdt/BdtTree/Sequence";
import { sampleBdtSequence } from "../fixtures/bdt";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Bdt/Sequence",
  component: BdtSequence,
  tags: ["autodocs"],
  argTypes: {},
};


export const Default = () => {
  return (
    <BdtSequence sequence={sampleBdtSequence.sequence}/>
  );
};

