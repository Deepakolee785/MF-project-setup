import React from "react";

import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputEl = styled.input<{ inputColor?: string }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  /* background: papayawhip; */
  border: 1px solid gray;
  outline: 0;
  border-radius: 3px;
`;

const Input: React.FC<InputProps> = ({ title, ...props }) => {
  return <InputEl {...props} />;
};
export default Input;
