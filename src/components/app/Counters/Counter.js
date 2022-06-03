import React from "react";
import { Row, Col } from "antd";
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
import styled from "styled-components";

const StyledRow = styled(Row)`
  color: #ff6700;
  line-height: normal;
  .icon {
    margin-right: 10px;
  }
  .count {
    font-size: 20px;
  }
  @media only screen and (max-width: 1200px) {
    .count {
      font-size: 16px;
    }
  }
`;

const Counter = ({ isLike, count, total }) => {
  return (
    <StyledRow align="middle">
      <Col className="icon">
        {isLike ? (
          <HiOutlineThumbUp size={24} color="#FF6700" />
        ) : (
          <HiOutlineThumbDown size={24} color="#FF6700" />
        )}
      </Col>
      <Col className="count">
        {count}/{total}
      </Col>
    </StyledRow>
  );
};

export default Counter;
