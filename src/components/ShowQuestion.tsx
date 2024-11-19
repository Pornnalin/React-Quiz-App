import { useState } from "react";
import { question } from "../data/Question";

interface indexProp {
  index: number;
  handleNewQuestion: () => void;
  addAnswer: (answerText: string) => void;
  isFinish: (isFinish: boolean) => void;
}
export default function ShowQuestion({
  index,
  handleNewQuestion,
  isFinish,
  addAnswer,
}: indexProp) {
  const [textAn, setTextAn] = useState<string>("");
  const [selectIndexBtn, setSelectIndexBtn] = useState<number | null>(null);

  const handleClickAnswer = (btnIndex: number, answerText: string) => {
    setSelectIndexBtn(btnIndex);
    setTextAn(answerText);
  };

  const resetIndexAndNextQuestion = () => {
    if (index === question.questionList.length - 1) {
      isFinish(true);
    } else {
      handleNewQuestion();
    }
    addAnswer(textAn);
    setSelectIndexBtn(null);
    setTextAn("");
  };

  return (
    <div className=" flex flex-col gap-4 items-center ">
      <p className="text-black font-semibold">
        {question.questionList[index].question}
      </p>
      <ol>
        {question.questionList[index].choices.map((item, index) => (
          <li key={question.questionList[index].order}>
            <div className="mb-3">
              <button
                key={index}
                onClick={() => {
                  handleClickAnswer(index, item.content);
                  console.log(item.content);
                }}
                className={`btn ${
                  selectIndexBtn === index
                    ? " btn-primary "
                    : "btn-outline  btn-primary"
                }max-w-sm w-48`}
              >
                {item.content}
              </button>
            </div>
          </li>
        ))}
      </ol>

      <button
        onClick={resetIndexAndNextQuestion}
        className={`${
          selectIndexBtn != null ? "btn btn-default w-48 " : "btn-disabled"
        }`}
      >
        {index !== question.questionList.length - 1 ? "Next" : `Finish`}
      </button>
    </div>
  );
}
