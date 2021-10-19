import { createContext, FC, useContext, useState } from "react";
import { Test } from "./interfaces";

type AppContext = {
  tests: { [testId: string]: Test };
  selectedTestId: string;
  setTests: (tests: { [testId: string]: Test }) => void;
  setSelectedTest: (testId: string) => void;
  selectOption: (
    testId: string,
    questionId: string,
    optionId: string,
    isSelected: boolean
  ) => void;
};

const stateDefaultValues: AppContext = {
  tests: null,
  selectedTestId: null,
  setTests: () => {},
  setSelectedTest: () => {},
  selectOption: () => {},
};

const appContext = createContext<AppContext>(stateDefaultValues);

export function ContextProvider({ children }) {
  const [state, setstate] = useState(stateDefaultValues);

  const setTests = (tests: { [testId: string]: Test }) => {
    setstate({ ...state, tests });
  };

  const setSelectedTest = (testId: string) => {
    setstate({ ...state, selectedTestId: testId });
  };

  const selectOption = (
    testId: string,
    questionId: string,
    optionId: string,
    isSelected: boolean
  ) => {
    const questions = state.tests[testId].questions;
    const options = state.tests[testId].questions[questionId].options;
    const lastOptionId = Object.keys(options).find(
      (optionId) => options[optionId].isSelected === true
    );
    setstate({
      ...state,
      tests: {
        ...state.tests,
        [testId]: {
          ...state.tests[testId],
          questions: {
            ...questions,
            [questionId]: {
              ...questions[questionId],
              options: {
                ...options,
                [lastOptionId]: {
                  ...options[optionId],
                  isSelected: false,
                },
                [optionId]: {
                  ...options[optionId],
                  isSelected,
                },
              },
            },
          },
        },
      },
    });
  };

  const value = {
    tests: state.tests,
    selectedTestId: state.selectedTestId,
    setTests,
    setSelectedTest,
    selectOption,
  };

  return (
    <>
      <appContext.Provider value={value}>{children}</appContext.Provider>
    </>
  );
}

export default appContext;
