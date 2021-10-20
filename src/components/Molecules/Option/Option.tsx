import React, { FC, useContext } from "react";
import { useRouter } from "next/router";
import appContext from "../../../AppContext";
import { Option as OptionType } from "../../../interfaces";
import { Container, Icon } from "./option.styles";

type Props = {
  id: string;
  option: OptionType;
  questionRef: string;
  isEvaluated: boolean;
};

const Option: FC<Props> = ({
  id: optionId,
  option,
  questionRef,
  isEvaluated,
}) => {
  const router = useRouter();
  const { selectOption, tests } = useContext(appContext);

  const testId = router.query.id as string;

  function selectIconByStatus(): string {
    if (!isEvaluated) {
      return "";
    }
    if (option.isCorrect) {
      return "/static/icons/correct.svg";
    }
    return "/static/icons/wrong.svg";
  }

  function handleOptionChange(event) {
    if (!isEvaluated) {
      selectOption(
        testId,
        questionRef,
        optionId,
        event.target.value === optionId
      );
    }
  }

  return (
    <Container>
      <Icon src={selectIconByStatus()} />
      <input
        type="radio"
        name={`answer-${questionRef}`}
        value={optionId}
        checked={
          tests[testId].questions[questionRef].options[optionId].isSelected
        }
        onChange={handleOptionChange}
      />
      {option.answer}
    </Container>
  );
};

export default Option;
