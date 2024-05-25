/* eslint-disable react/prop-types */
import styled from "styled-components";

export const SelectNum = ({ error, setError, selectedNum, setSelectedNum }) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const handleNumSelector = (num) => {
    setSelectedNum(num);
    setError("");
  };
  return (
    <div>
      <p
        style={{
          color: "#800000",
        }}
      >
        {error}
      </p>
      {numbers.map((num, index) => (
        <Box
          isSelectedNum={num === selectedNum}
          onClick={() => handleNumSelector(num)}
          key={index}
        >
          {num}
        </Box>
      ))}
      <p
        style={{
          textAlign: "right",
          margin: "5px 0",
        }}
      >
        Selected Number
      </p>
    </div>
  );
};

const Box = styled.button`
  border: 1px solid black;
  color: black;
  padding: 12px 14px;
  margin: 5px 3px;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${(props) => (props.isSelectedNum ? "Black" : "white")};
  color: ${(props) => (props.isSelectedNum ? "white" : "black")};
`;
