import React, { FC, useContext } from "react";
import appContext from "../../../AppContext";
import { Test } from "../../../interfaces";
import Status from "../../Atoms/Status/Status";
import QuestionList from "../../Organisms/QuestionList/QuestionList";
import { Button, Container, Score } from "./testTemplate.styles";

type Props = {
  id: string;
  test: Test;
};

const TestTemplate: FC<Props> = ({ id, test }) => {
  const { evaluateTest: evaluateTestContext } = useContext(appContext);
  function evaluateTest() {
    evaluateTestContext(id);
  }

  return (
    <Container>
      <h1>{test.title}</h1>
      {test.description}
      <Score>
        <Status
          isEvaluated={test.isEvaluated}
          questions={Object.values(test.questions)}
        />
      </Score>

      <QuestionList isEvaluated={test.isEvaluated} questions={test.questions} />
      {!test.isEvaluated && <Button onClick={evaluateTest}>Grade</Button>}
    </Container>
  );
};

export default TestTemplate;
