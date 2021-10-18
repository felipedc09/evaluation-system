import React, { FC } from "react";
import { Option, Question } from "../../../interfaces";
import { Column, Container, Icon } from "./status.styles";

type Props = {
  questions: Question[];
};

const Status: FC<Props> = ({ questions }) => {
  function getCountAnswersByQuestions(questions: Question[]) {
    return questions.reduce(
      (countAnswers, nextQuestion) => {
        const { correct, wrong } = getCountAnswersByOptions(
          nextQuestion.options
        );
        return {
          correct: countAnswers.correct + correct,
          wrong: countAnswers.wrong + wrong,
        };
      },
      { correct: 0, wrong: 0 }
    );
  }

  function getCountAnswersByOptions(options: Option[]) {
    return options.reduce(
      (countAnswers, nextOption) => {
        if (nextOption.isCorrect) {
          return { ...countAnswers, correct: countAnswers.correct + 1 };
        }
        return { ...countAnswers, wrong: countAnswers.wrong + 1 };
      },
      { correct: 0, wrong: 0 }
    );
  }

  const { correct: correctAnswers, wrong: wrongAnswers } =
    getCountAnswersByQuestions(questions);
  const score = (correctAnswers / wrongAnswers) * 100;
  return (
    <Container>
      <Column>
        <Icon /> {`-> ${correctAnswers}`}
        <Icon /> {`-> ${wrongAnswers}`}
      </Column>
      <Column>
        <span>Score</span>
        <span>
          {score} <Icon />
        </span>
      </Column>
    </Container>
  );
};

export default Status;
