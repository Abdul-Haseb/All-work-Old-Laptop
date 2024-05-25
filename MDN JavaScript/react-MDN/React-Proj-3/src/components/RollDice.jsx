/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button, OutlineButton } from "./ReusableStyles/Button";
import { useState } from "react";

export const RollDice = ({ handleReset, currentDice, ChangeDiceImg }) => {
  const [showRules, setShowRules] = useState(false);

  const handleRulesDisplay = () => {
    setShowRules(!showRules);
  };

  return (
    <DiceContainer>
      <img
        onClick={ChangeDiceImg}
        src={`/images/dice_${currentDice}.png`}
        alt="dice 1"
      />
      <p>Click To Roll Dice</p>
      <OutlineButton onClick={handleReset}>Reset Score</OutlineButton>
      <Button onClick={handleRulesDisplay}>
        {showRules ? "Hide" : "Show"} Rules
      </Button>
      {showRules ? (
        <div className="rulesDiv">
          <h2>How to play dice game</h2>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
      ) : null}
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  p {
    font-size: 22px;
    font-weight: 500;
  }
  .rulesDiv {
    margin: 20px auto;
    max-width: fit-content;
    padding: 12px;
    background-color: #ccccff;
    border-radius: 5px;
  }
`;
