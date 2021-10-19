import { spawn } from "child_process";
import React, { FC, useState } from "react";
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
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  function getStatusIcon() {
    const status = Object.values(question.options).find(
      (option) => option.isSelected && option.isCorrect
    );
    if (status) {
      return "/static/icons/correct.svg";
    }
    return "/static/icons/wrong.svg";
  }

  function toggleOptions() {
    setIsOpenOptions(!isOpenOptions);
  }

  function showIcon() {
    if (isOpenOptions) {
      return <span>▼</span>;
    }
    return <span>►</span>;
  }

  function showOptions() {
    if (isOpenOptions) {
      return (
        <Options>
          <OptionsList options={question.options} questionRef={id} />
        </Options>
      );
    }
    return <></>;
  }

  return (
    <Container>
      <Head onClick={toggleOptions}>
        {showIcon()}
        {question.statement}
        <StateIcon src={getStatusIcon()} />
      </Head>
      {showOptions()}
    </Container>
  );
};

export default Question;
