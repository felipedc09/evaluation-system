import React, { FC, useState } from "react";
import { Option as OptionType } from "../../../interfaces";
import Option from "../../Molecules/Option/Option";
import { Container } from "./optionList.styles";
type Props = {
  options: { [optionId: string]: OptionType };
  questionRef: string;
  isEvaluated: boolean;
};

const OptionsList: FC<Props> = ({ options, questionRef, isEvaluated }) => {
  return (
    <Container>
      {Object.keys(options).map((optionId) => (
        <Option
          key={optionId}
          isEvaluated={isEvaluated}
          id={optionId}
          option={options[optionId]}
          questionRef={questionRef}
        />
      ))}
    </Container>
  );
};

export default OptionsList;
