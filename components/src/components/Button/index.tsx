import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonEl = styled.button<{ primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <ButtonEl {...props} className="btn" primary>
      {label}
    </ButtonEl>
  );
};
export default Button;
