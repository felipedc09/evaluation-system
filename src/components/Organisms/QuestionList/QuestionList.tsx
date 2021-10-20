import React, { FC } from "react";
import { Question as QuestionType } from "../../../interfaces";
import Question from "../../Molecules/Question/Question";
import { Container } from "./questionList.styles";

type Props = {
  questions: { [questionId: string]: QuestionType };
  isEvaluated: boolean;
};

const QuestionList: FC<Props> = ({ isEvaluated, questions }) => {
  return (
    <Container>
      {Object.keys(questions).map((questionId) => (
        <Question
          key={questionId}
          id={questionId}
          isEvaluated={isEvaluated}
          question={questions[questionId]}
        />
      ))}
    </Container>
  );
};

export default QuestionList;
