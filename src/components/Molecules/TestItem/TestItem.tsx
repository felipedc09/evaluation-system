import React, { FC, useContext } from "react";
import Link from "next/link";
import { Test } from "../../../interfaces";
import Status from "../../Atoms/Status/Status";
import { Container, Head } from "./testItem.styles";
import appContext from "../../../AppContext";

type Props = {
  id: string;
  test: Test;
};

const TestItem: FC<Props> = ({ id, test }) => {
  const { setSelectedTest } = useContext(appContext);

  function openTest() {
    setSelectedTest(id);
  }
  return (
    <Link href={`/test/${id}`}>
      <a>
        <Container onClick={openTest}>
          <Head>
            <h2>{test.title}</h2>
          </Head>
          {test.description}
          <Status questions={Object.values(test.questions)} />
        </Container>
      </a>
    </Link>
  );
};

export default TestItem;
