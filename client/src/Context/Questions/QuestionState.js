import React, { useReducer } from "react";
import axios from "axios";
import QuestionContext from "./QuestionsContext";
import QuestionReducer from "./QuestionsReducer";
import {
  GET_QUESTIONS,
  ADD_QUESTION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_QUESTION,
  FILTER_QUESTION,
  CLEAR_QUESTIONS,
  CLEAR_FILTERS,
  QUESTION_ERROR
} from "../types";
const QuestionState = props => {
  const intialState = {
    questions: [
      {
        id: 1,
        title: "History",
        decription: "hello there history"
      },
      {
        id: 2,
        title: "Geography",
        decription: "hello there geography"
      }
    ]
  };
  const [state, dispatch] = useReducer(QuestionReducer, intialState);
  //add question

  //delete

  //set

  //update

  //filter

  //clear

  return (
    <QuestionContext.Provider
      value={{
        questions: state.questions
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionState;
