/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "./ReusableStyles/Button";

export const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" width={500} height={500} />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1190px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;

  .content {
    h1 {
      font-size: 50px;
      margin: 0;
    }
  }
`;

/* @media screen and (max-width: 640px) {
    max-width: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 20px 10px;
  } */
