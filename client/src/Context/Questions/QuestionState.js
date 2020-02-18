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
