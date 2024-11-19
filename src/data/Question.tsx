import { AnswerList, QuestionList } from "../interface/Question";

export const question: QuestionList = {
  questionList: [
    {
      order: 1,
      question: "What is the capital city of France?",
      choices: [
        { content: "Berlin" },
        { content: "Madrid" },
        { content: "Paris" },
      ],
    },
    {
      order: 2,
      question: "Which planet is known as the Red Planet?",
      choices: [
        { content: "Venus" },
        { content: "Mars" },
        { content: "Jupiter" },
      ],
    },
    {
      order: 3,
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: [
        { content: "Charles Dickens" },
        { content: "William Shakespeare" },
        { content: "Jane Austen" },
      ],
    },
    {
      order: 4,
      question: "What is the chemical symbol for water?",
      choices: [{ content: "H2O" }, { content: "O2" }, { content: "CO2" }],
    },
    {
      order: 5,
      question: "How many continents are there in the world?",
      choices: [{ content: "5" }, { content: "6" }, { content: "7" }],
    },
  ],
};

export const answer: AnswerList = {
  answerList: [
    { answer: "Paris" },
    { answer: "Mars" },
    { answer: "William Shakespeare" },
    { answer: "H2O" },
    { answer: "7" },
  ],
};
