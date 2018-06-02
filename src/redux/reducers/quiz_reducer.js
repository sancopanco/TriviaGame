import { FETCH_QUESTIONS, ANSWER_QUESTION, START_QUIZ } from "../actions/types";
const INITIAL_STATE = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case ANSWER_QUESTION:
      const copyUserAnswers = {
        ...state.userAnswers,
        [state.currentQuestionIndex]: action.payload
      };

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        userAnswers: copyUserAnswers
      };
    case START_QUIZ:
      return INITIAL_STATE;
    default:
      return state;
  }
}
