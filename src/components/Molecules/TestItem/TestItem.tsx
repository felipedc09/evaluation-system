import React, { FC, useContext } from "react";
import Link from "next/link";
import { Test } from "../../../interfaces";
import Status from "../../Atoms/Status/Status";
import { Container, Head, Image } from "./testItem.styles";
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
            <Image src={test.imagePath}/>
          </Head>
          {test.description}
          <Status
            isEvaluated={test.isEvaluated}
            questions={Object.values(test.questions)}
          />
        </Container>
      </a>
    </Link>
  );
};

export default TestItem;
