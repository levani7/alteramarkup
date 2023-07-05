import styled from "styled-components";

export const Button = styled.button`
  /* Define your CSS styles here */
  padding: 10px 20px;
  background-color: #eaeaea;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* Add any dynamic styles using props */
  ${({ variant }) =>
    variant === "primary" &&
    `
    background-color: #007bff;
    color: #fff;
  `}

  /* Add media queries or other responsive styles */
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
