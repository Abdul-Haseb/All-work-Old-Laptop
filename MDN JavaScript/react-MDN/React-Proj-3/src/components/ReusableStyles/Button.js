import styled from "styled-components";

export const Button = styled.button`
  background-color: #000;
  padding: 10px 16px;
  color: white;
  min-width: 220px;
  border-radius: 5px;
  border: none;
  transition: 0.5s all;
  cursor: pointer;
  font-size: 18px;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 0 5px black;
    transform: scale(1.05);
    background-color: #fff;
    color: black;
    border: 1px solid black;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: #000;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
