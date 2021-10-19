import React, { FC } from "react";
import { Option, Question } from "../../../interfaces";
import { Column, Container, Icon, Result, Score } from "./status.styles";

type Props = {
  questions: Question[];
};

const Status: FC<Props> = ({ questions }) => {
  function getCountAnswersByQuestions(questions: Question[]) {
    return questions.reduce(
      (countAnswers, nextQuestion) => {
        const evaluation = getCountAnswersByOptions(
          Object.values(nextQuestion.options)
        );
        if (evaluation) {
          return {
            ...countAnswers,
            correct: countAnswers.correct + 1,
          };
        } else {
          return {
            ...countAnswers,
            wrong: countAnswers.wrong + 1,
          };
        }
      },
      { correct: 0, wrong: 0 }
    );
  }

  function getCountAnswersByOptions(options: Option[]) {
    return options.find((option) => option.isCorrect && option.isSelected);
  }

  function showStatusIcon(score) {
    console.log(score);
    if (score < 50) {
      return <span>🙁</span>;
    }
    if (score > 50 && score < 80) {
      return <span>😐</span>;
    }
    return <span>🙂</span>;
  }

  const { correct: correctAnswers, wrong: wrongAnswers } =
    getCountAnswersByQuestions(questions);
  const score = (correctAnswers / questions.length) * 100;
  return (
    <Container>
      <Column>
        <Result>
          <Icon src="/static/icons/correct.svg" />
          {`→ ${correctAnswers}`}
        </Result>
        <Result>
          <Icon src="/static/icons/wrong.svg" />
          {`→ ${wrongAnswers}`}
        </Result>
      </Column>
      <Score>
        <h4>Score</h4>
        <div>
          {score.toFixed(2)}% {showStatusIcon(score)}
        </div>
      </Score>
    </Container>
  );
};

export default Status;
