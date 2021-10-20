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
  evaluateTest: (testId: string) => void;
};

const stateDefaultValues: AppContext = {
  tests: null,
  selectedTestId: null,
  setTests: () => {},
  setSelectedTest: () => {},
  selectOption: () => {},
  evaluateTest: () => {},
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

    const newOptions = Object.keys(
      state.tests[testId].questions[questionId].options
    ).reduce((accumulatorOptions, nextOptionId) => {
      accumulatorOptions = {
        ...accumulatorOptions,
        [nextOptionId]: { ...options[nextOptionId], isSelected: false },
      };
      return accumulatorOptions;
    }, {});

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
                ...newOptions,
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

  const evaluateTest = (testId) => {
    setstate({
      ...state,
      tests: {
        ...state.tests,
        [testId]: { ...state.tests[testId], isEvaluated: true },
      },
    });
  };

  const value = {
    tests: state.tests,
    selectedTestId: state.selectedTestId,
    setTests,
    setSelectedTest,
    selectOption,
    evaluateTest,
  };

  return (
    <>
      <appContext.Provider value={value}>{children}</appContext.Provider>
    </>
  );
}

export default appContext;
