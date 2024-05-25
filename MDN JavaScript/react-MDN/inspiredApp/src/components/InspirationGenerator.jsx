/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import quotes from "./quotes";
import FancyText from "./FancyText";
import * as React from "react";

const InspirationGenerator = ({ Children }) => {
  const [Index, setIndex] = React.useState(0);
  const quote = quotes[Index];
  const next = () => setIndex((Index + 1) % quotes.length);
  return (
    <>
      <p>Your inspirational quote is</p>
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {Children}
    </>
  );
};

export default InspirationGenerator;
