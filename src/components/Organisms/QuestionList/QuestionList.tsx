import React, { FC } from "react";
import { Question as QuestionType } from "../../../interfaces";
import Question from "../../Molecules/Question/Question";
import { Container } from "./questionList.styles";

type Props = {
  questions: { [questionId: string]: QuestionType };
};

const QuestionList: FC<Props> = ({ questions }) => {
  return (
    <Container>
      {Object.keys(questions).map((questionId) => (
        <Question
          key={questionId}
          id={questionId}
          question={questions[questionId]}
        />
      ))}
    </Container>
  );
};

export default QuestionList;
