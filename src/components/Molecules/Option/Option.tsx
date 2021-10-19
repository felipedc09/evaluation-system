import React, { FC, useContext } from "react";
import { useRouter } from "next/router";
import appContext from "../../../AppContext";
import { Option as OptionType } from "../../../interfaces";
import { Container, Icon } from "./option.styles";

type Props = {
  id: string;
  option: OptionType;
  questionRef: string;
};

const Option: FC<Props> = ({ id: optionId, option, questionRef }) => {
  const router = useRouter();
  const { selectOption, tests } = useContext(appContext);

  const testId = router.query.id as string;

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

  function handleOptionChange(event) {
    selectOption(testId, questionRef, optionId, event.target.value);
  }

  return (
    <Container>
      <input
        type="radio"
        name={`answer-${questionRef}`}
        value={option.answer}
        checked={
          tests[testId].questions[questionRef].options[optionId].isSelected
        }
        onChange={handleOptionChange}
      />
      {option.answer}
      <Icon src={selectIconByStatus()} />
    </Container>
  );
};

export default Option;
