import { useState } from "react";
import { StartGame } from "./components/StartGame";
import "./global.css";
import { Game } from "./components/Game";

export const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleGameStart = () => {
    setGameStarted(!gameStarted);
  };
  return <>{gameStarted ? <Game /> : <StartGame toggle={handleGameStart} />}</>;
};
