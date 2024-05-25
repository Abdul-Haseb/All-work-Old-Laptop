import styled from "styled-components";

export const TotalNum = ({ score }) => {
  return (
    <TotalScore>
      <h1>{score}</h1>
      <p>Total Score</p>
    </TotalScore>
  );
};

const TotalScore = styled.div`
  max-width: 150px;
  text-align: center;
  margin: 5px;
  h1 {
    font-size: 32px;
    font-weight: 700;
  }
  p {
    font-weight: 700;
    font-size: 18px;
  }
`;
