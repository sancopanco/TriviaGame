const API = "https://opentdb.com/";
const QUESTION_URL = "api.php?amount=10&difficulty=hard&type=boolean";
var he = require("he");
export const getQuestions = async (url = QUESTION_URL) => {
  const response = await fetch(`${API}/${url}`);
  const data = await response.json();
  return data.results.map(q => ({ ...q, question: he.decode(q.question) }));
};
