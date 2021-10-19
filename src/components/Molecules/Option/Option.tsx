import React, { FC, useContext, useState } from "react";
import appContext from "../../../AppContext";
import { Option as OptionType } from "../../../interfaces";
import { Container, Icon } from "./option.styles";

type Props = {
  id: string;
  option: OptionType;
  questionRef: string;
};

const Option: FC<Props> = ({ id, option, questionRef }) => {
  const { setSelectedTest } = useContext(appContext);

  function selectIconByStatus(): string {
    if (!option.isSelected) {
      return "";
    }
    if (option.isCorrect && option.isSelected) {
      return "";
    }
    if (!option.isCorrect && option.isSelected) {
      return "";
    }
    return "";
  }

  function handleOptionChange() {}

  return (
    <Container>
      <input
        type="radio"
        name={`answer-${questionRef}`}
        value={option.answer}
        checked={option.isSelected}
        onChange={handleOptionChange}
      />
      {option.answer}
      <Icon src={selectIconByStatus()} />
    </Container>
  );
};

export default Option;
