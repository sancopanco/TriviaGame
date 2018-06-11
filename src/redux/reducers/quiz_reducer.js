import { FETCH_QUESTIONS, ANSWER_QUESTION, START_QUIZ } from "../actions/types";
const INITIAL_STATE = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case ANSWER_QUESTION:
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const correctAnswer = currentQuestion.correct_answer;
      const questionTitle = currentQuestion.question;
      const isCorrect = correctAnswer === action.payload;
      const copyUserAnswers = [
        ...state.userAnswers,
        {
          answer: action.payload,
          correctAnswer: correctAnswer,
          isCorrect,
          questionTitle
        }
      ];

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
