import "./App.css";
import styled from "styled-components";
import { Row, Col } from "antd";
import Quiz from "./components/app/Quiz";

const StyledRow = styled(Row)`
  padding: 50px;
  max-width: 1920px;
  margin: auto;

  .logo img {
    width: 100%;
  }
  .container {
    background-color: #FFFFFF;
    border-radius: 10px;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 16px;
    .container {
      border-radius: 40px;
    }
  }
`;

function App() {
  return (
    <StyledRow justify="center" align="middle" gutter={[0, 50]}>
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col
            xl={16}
            xs={24}
            className="container"
          >
            <Quiz />
          </Col>
        </Row>
      </Col>
    </StyledRow>
  );
}

export default App;
