import React, { FC } from "react";
import { Test } from "../../../interfaces";
import QuestionList from "../../Organisms/QuestionList/QuestionList";

type Props = {
  test: Test;
};

const TestTemplate: FC<Props> = ({ test }) => {
  return (
    <div>
      <h1>{test.title}</h1>
      {test.description}
      <QuestionList questions={test.questions} />
    </div>
  );
};

export default TestTemplate;
