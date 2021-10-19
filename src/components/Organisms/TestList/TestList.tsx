import React, { FC } from "react";
import { Test } from "../../../interfaces";
import TestItem from "../../Molecules/TestItem/TestItem";
import { Container } from "./testList.styles";

type Props = {
  tests: Test[];
};

const TestList: FC<Props> = ({ tests }) => {
  return (
    <Container>
      {Object.keys(tests).map((testId) => (
        <TestItem key={testId} id={testId} test={tests[testId]} />
      ))}
    </Container>
  );
};

export default TestList;
