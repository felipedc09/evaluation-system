import React, { FC } from "react";
import { Option, Question } from "../../../interfaces";
import { Column, Container, Icon, Result, Score } from "./status.styles";

type Props = {
  questions: Question[];
  isEvaluated: boolean;
};

const Status: FC<Props> = ({ questions, isEvaluated }) => {
  function getCountAnswersByQuestions(questions: Question[]) {
    return questions.reduce(
      (countAnswers, nextQuestion) => {
        const isCorrect = isCorrectAnswer(Object.values(nextQuestion.options));
        if (isCorrect) {
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

  function isCorrectAnswer(options: Option[]) {
    return options.find((option) => option.isCorrect && option.isSelected);
  }

  function showStatusIcon(score) {
    if (score < 50) {
      return <span>🙁</span>;
    }
    if (score > 50 && score < 80) {
      return <span>😐</span>;
    }
    return <span>🙂</span>;
  }

  function renderScore() {
    return (
      <Score>
        <h4>Score</h4>
        {isEvaluated ? (
          <div>
            {score.toFixed(2)}% {showStatusIcon(score)}
          </div>
        ) : (
          " ---"
        )}
      </Score>
    );
  }

  function renderResults() {
    if (isEvaluated) {
      return (
        <>
          <Result>
            <Icon src="/static/icons/correct.svg" />
            {`→ ${correctAnswers}`}
          </Result>
          <Result>
            <Icon src="/static/icons/wrong.svg" />
            {`→ ${wrongAnswers}`}
          </Result>
        </>
      );
    }
    return "---";
  }

  const { correct: correctAnswers, wrong: wrongAnswers } =
    getCountAnswersByQuestions(questions);
  const score = (correctAnswers / questions.length) * 100;
  return (
    <Container>
      <Column>{renderResults()}</Column>
      {renderScore()}
    </Container>
  );
};

export default Status;
