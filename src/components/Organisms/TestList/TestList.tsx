import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { Test } from "../../../interfaces";
import TestItem from "../../Molecules/TestItem/TestItem";
import { Container } from "./testList.styles";

type Props = {
  tests: Test[];
};

const TestList: FC<Props> = ({ tests }) => {
  return (
    <Container>
      {tests.map((test) => (
        <TestItem key={uuidv4()} test={test} />
      ))}
    </Container>
  );
};

export default TestList;
