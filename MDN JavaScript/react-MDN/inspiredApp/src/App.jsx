import { CopyRight } from "./components/CopyRights";
import FancyText from "./components/FancyText";
import InspirationGenerator from "./components/InspirationGenerator";

export const App = () => {
  return (
    <>
      <FancyText title text="Get inspired App" />
      <InspirationGenerator>
        <CopyRight year={2004} />
      </InspirationGenerator>
    </>
  );
};
