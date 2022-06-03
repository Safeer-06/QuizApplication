import React, { useState } from "react";
import { Row, Col, message } from "antd";
import styled from "styled-components";
import { Input, Button } from "../../index";
import Counters from "../../app/Counters";
import initialQuestions from "../../../constants/questions";
import { getRandom } from "../../../utils";

const StyledRow = styled(Row)`
  height: 100%;

  padding: 25px 25px 50px;

  .image img {
    border-radius: 10px;
    width: 100%;
    height: 464px;
    object-fit: cover;

    @media only screen and (max-width: 1200px) {
      height: 265px;
    }

    @media only screen and (max-width: 768px) {
      height: 400px;
    }

    @media only screen and (max-width: 576px) {
        height: 205px;
    }

  }
  .text p {
    margin: 0;
    text-align: center;
    font-weight: 600;
    font-size: 24px;

    @media only screen and (max-width: 1200px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  .counters-mobile {
    display: none;
  }

  @media only screen and (max-width: 1200px) {
    padding: 50px 25px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    .counters-mobile {
      display: block;
    }
    .counters-desktop {
      display: none;
    }
  }
`;

const Quiz = () => {
  const [questions, setQuestions] = useState([...initialQuestions]);
  const [currentIndex, setCurrentIndex] = useState(getRandom(questions.length));
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [showSerbian, setShowSerbian] = useState(Boolean(getRandom(2)));
  const [answer, setAnswer] = useState("");

  const { english, serbian, image } = questions[currentIndex];

  const handleSubmit = () => {
    if (!answer) {
      message.error("Please type an answer!");
      return;
    }

    const isCorrectAnswer = showSerbian
      ? answer === english
      : answer === serbian;

    if (isCorrectAnswer) {
      message.success("Correct answer!");
      if (questions.length === 1) {
        resetQuiz();
        return;
      }

      let newQuestions = [...questions];
      newQuestions.splice(currentIndex, 1);

      setCorrectCount(correctCount + 1);
      setQuestions(newQuestions);
      setCurrentIndex(getRandom(newQuestions.length));
    } else {
      message.error("Wrong answer!");
      setIncorrectCount(incorrectCount + 1);
      setCurrentIndex(getRandom(questions.length));
    }

    setAnsweredCount(answeredCount + 1);
    setShowSerbian(Boolean(getRandom(2)));
    setAnswer("");
  };

  const resetQuiz = () => {
    setQuestions([...initialQuestions]);
    setCurrentIndex(getRandom(initialQuestions.length));
    setCorrectCount(0);
    setIncorrectCount(0);
    setAnsweredCount(0);
    setShowSerbian(Boolean(getRandom(2)));
    setAnswer("");
  };

  return (
    <StyledRow gutter={[0, 50]}>
      <Col span={24}>
        <Row justify="center" gutter={[0, 25]}>
          <Col span={24} className="counters-mobile">
            <Counters
              correct={correctCount}
              incorrect={incorrectCount}
              total={answeredCount}
            />
          </Col>
          <Col xl={16} lg={8} md={16} xs={24} className="image">
            <img src={image} />
          </Col>
          <Col span={24} className="text">
            <p>{showSerbian ? serbian : english}</p>
          </Col>
          <Col xxl={16} md={10} xs={18}>
            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => e.keyCode == 13 && handleSubmit()}
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center" gutter={[0, 27]}>
          <Col sm={7} xs={18}>
            <Button block onClick={handleSubmit}>
              Let’s see
            </Button>
          </Col>
          <Col span={24} className="counters-desktop">
            <Counters
              correct={correctCount}
              incorrect={incorrectCount}
              total={answeredCount}
            />
          </Col>
        </Row>
      </Col>
    </StyledRow>
  );
};

export default Quiz;
