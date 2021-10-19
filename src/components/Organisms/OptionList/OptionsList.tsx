import React, { FC, useState } from "react";
import { Option as OptionType } from "../../../interfaces";
import Option from "../../Molecules/Option/Option";
import { Container } from "./optionList.styles";
type Props = {
  options: { [optionId: string]: OptionType };
  questionRef: string;
};

const OptionsList: FC<Props> = ({ options, questionRef }) => {

  return (
    <Container>
      {Object.keys(options).map((optionId) => (
        <Option
          key={optionId}
          id={optionId}
          option={options[optionId]}
          questionRef={questionRef}
        />
      ))}
    </Container>
  );
};

export default OptionsList;
