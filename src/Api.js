const getQuestion = () => {
  return fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  )
    .then(res => res.json())
    .then(data => {
      return data.results;
    });
};

export default getQuestion;
