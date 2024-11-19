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
    {
      order: 6,
      question: "Which is the largest ocean on Earth?",
      choices: [
        { content: "Atlantic Ocean" },
        { content: "Indian Ocean" },
        { content: "Pacific Ocean" },
      ],
    },
    {
      order: 7,
      question: "What is the speed of light?",
      choices: [
        { content: "300,000 km/s" },
        { content: "150,000 km/s" },
        { content: "1,000,000 km/s" },
      ],
    },
    {
      order: 8,
      question: "Who painted the Mona Lisa?",
      choices: [
        { content: "Vincent van Gogh" },
        { content: "Pablo Picasso" },
        { content: "Leonardo da Vinci" },
      ],
    },
    {
      order: 9,
      question: "Which element has the chemical symbol 'O'?",
      choices: [
        { content: "Oxygen" },
        { content: "Osmium" },
        { content: "Ozone" },
      ],
    },
    {
      order: 10,
      question: "What is the longest river in the world?",
      choices: [
        { content: "Amazon River" },
        { content: "Nile River" },
        { content: "Yangtze River" },
      ],
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
    { answer: "Pacific Ocean" },
    { answer: "300,000 km/s" },
    { answer: "Leonardo da Vinci" },
    { answer: "Oxygen" },
    { answer: "Amazon River" },
  ],
};
