import styled from "styled-components";
import { SelectNum } from "./SelectNum";
import { TotalNum } from "./TotalNum";
import { RollDice } from "./RollDice";
import { useState } from "react";

export const Game = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const GenerateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const ChangeDiceImg = () => {
    if (!selectedNum) {
      setError("You havn't selected Any Number");
      return;
    }
    const randomNum = GenerateRandomNum(1, 7);
    setCurrentDice(() => randomNum);

    if (selectedNum === randomNum) {
      setScore((prev) => prev + currentDice);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNum();
  };

  const handleReset = () => {
    setScore(0);
  };

  return (
    <div>
      <GameHeadSec>
        <TotalNum score={score} />
        <SelectNum
          error={error}
          setError={setError}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </GameHeadSec>
      <RollDice
        currentDice={currentDice}
        ChangeDiceImg={ChangeDiceImg}
        handleReset={handleReset}
      />
    </div>
  );
};

const GameHeadSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 10px 20px;
`;
