import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: 900;
  font-size: 24px;
  line-height: normal;
  background: #ff6700;
  height: auto;
  padding: 15px;
  border-radius: 10px;
  border-color: transparent;

  :focus,
  :active {
    color: white;
    background: #ff6700;
    border-color: #ff6700;
  }

  :hover {
    color: white;
    background: #ff670080;
    border-color: #ff670080;
  }

  :after {
    --antd-wave-shadow-color: #ff6700 !important;
  }

  @media only screen and (max-width: 1200px) {
      font-size: 20px;
      padding: 14px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
