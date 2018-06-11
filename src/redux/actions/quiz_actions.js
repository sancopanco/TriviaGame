import { getQuestions } from "../../Api";
import { FETCH_QUESTIONS, ANSWER_QUESTION, START_QUIZ } from "./types";

export const fetchQuestions = () => async dispatch => {
  try {
    let results = await getQuestions();
    dispatch({ type: FETCH_QUESTIONS, payload: results });
  } catch (error) {
    console.log(error);
  }
};

export const answerQuestion = answer => async dispatch => {
  dispatch({ type: ANSWER_QUESTION, payload: answer });
};

export const quizStart = callback => async dispatch => {
  dispatch({ type: START_QUIZ });
  if (callback) {
    callback();
  }
};
