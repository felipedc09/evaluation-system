import { createContext, FC, useContext, useState } from "react";
import { Test } from "./interfaces";

type AppContext = {
  tests: { [testId: string]: Test };
  selectedTestId: string;
  setTests: (tests: { [testId: string]: Test }) => void;
  setSelectedTest: (testId: string) => void;
};

const stateDefaultValues: AppContext = {
  tests: null,
  selectedTestId: null,
  setTests: () => {},
  setSelectedTest: () => {},
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
    optionId: string
  ) => {
    // setstate({ ...state, tests: { ...state.tests, [testId] : { ...state.tests[testId], [questionId] : {...state.tests[testId].questions[questionId], state.tests[testId].questions[questionId].options[optionId]} } } });
    const change = state.tests[testId].questions[questionId].options[optionId];
    setstate({ ...state });
  };

  const value = {
    tests: state.tests,
    selectedTest: state.selectedTestId,
    setTests,
    setSelectedTest,
  };

  return (
    <>
      <appContext.Provider value={value}>{children}</appContext.Provider>
    </>
  );
}

export default appContext;
