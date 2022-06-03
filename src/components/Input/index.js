import React from "react";
import { Input as AntInput } from "antd";
import styled from "styled-components";

const StyledInput = styled(AntInput)`
  background: #ffffff;
  box-shadow: -6px 6px 10px rgba(255, 103, 0, 0.3),
    6px -6px 10px rgba(231, 190, 163, 0.3);
  border-radius: 10px;
  border-color: transparent;

  line-height: normal;
  font-size: 24px;
  height: 50px;

  :focus,
  :hover {
    border-color: #ff6700;
    box-shadow: none;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    height: 40px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    height: 36px;
  }
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
