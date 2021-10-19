import React, { FC, useContext, useEffect } from "react";
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

  // useEffect(() => {
  //   if(optionId){
  //   }
  // }, [tests]);

  function handleOptionChange(event) {
    console.log(event.target.value === optionId);
    selectOption(
      testId,
      questionRef,
      optionId,
      event.target.value === optionId
    );
  }

  console.log(
    optionId,
    tests[testId].questions[questionRef].options[optionId].isSelected
  );
  return (
    <Container>
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
      <Icon src={selectIconByStatus()} />
    </Container>
  );
};

export default Option;
