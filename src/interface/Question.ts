export interface Question {
  order: number;
  question: string;
  choices: Choices[];
}
export interface Choices {
  content: string;
}
export interface QuestionList {
  questionList: Question[];
}
export interface Answer {
  answer: string;
}
export interface AnswerList {
  answerList: Answer[];
}
