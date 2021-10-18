import React, { FC } from "react";
import { Test } from "../../../interfaces";
import Status from "../../Atoms/Status/Status";
import { Container, Head } from "./testItem.styles";

type Props = {
  test: Test;
};

const TestItem: FC<Props> = ({ test }) => {
  return (
    <Container>
      <Head />
      {test.description}
      <Status questions={test.questions} />
    </Container>
  );
};

export default TestItem;
