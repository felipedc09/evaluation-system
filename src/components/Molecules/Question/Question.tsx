import React, { FC } from "react";
import { Question as QuestionType } from "../../../interfaces";
import OptionsList from "../../Organisms/OptionList/OptionsList";
import {
  Container,
  Head,
  Options,
  StateIcon,
  ToggleIcon,
} from "./question.styles";

type Props = {
  id: string;
  question: QuestionType;
};

const Question: FC<Props> = ({ id, question }) => {
  return (
    <Container>
      <Head>
        <ToggleIcon />
        {question.statement}
        <StateIcon />
      </Head>
      <Options>
        <OptionsList options={question.options} questionRef={id} />
      </Options>
    </Container>
  );
};

export default Question;
