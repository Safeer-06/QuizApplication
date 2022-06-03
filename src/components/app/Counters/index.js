import React from "react";
import { Row, Col } from "antd";
import Counter from "./Counter";

const Counters = ({ correct, incorrect, total }) => {
  return (
    <Row justify="center">
      <Col md={8} xs={24}>
        <Row justify="space-between">
          <Col>
            <Counter isLike count={correct} total={total} />
          </Col>
          <Col>
            <Counter count={incorrect} total={total} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Counters;
