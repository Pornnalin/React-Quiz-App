import React, { useEffect } from "react";
import { answer, question } from "../data/Question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

interface ResultProp {
  answerList: string[];
  score: number;
  setScore: (score: number) => void;
}

export default function ResultScore({
  answerList,
  score,
  setScore,
}: ResultProp) {
  const isMatch = (a: string, b: string) => {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  };
  const calculateScore = () => {
    let newScore = 0;
    for (const key in question.questionList) {
      if (isMatch(answerList[key], answer.answerList[key].answer)) {
        newScore += 1;
      }
      setScore(newScore);
    }
  };
  useEffect(() => {
    calculateScore();
  }, [answerList]);
  return (
    <div className="flex flex-col gap-4 items-center h-screen">
      <h1 className="text-3xl font-bold pt-6">Your Score:{score}</h1>
      <ol className="list-decimal text-2xl">
        {question.questionList.map((item, index) => (
          <li key={index} className="mb-10">
            <span className="font-semibold text-2xl">{item.question}</span>
            {isMatch(answerList[index], answer.answerList[index].answer) ? (
              <div className="">
                <span className="text-2xl font-bo mb-5">
                  Answer :{answerList[index]}
                </span>
                <FontAwesomeIcon
                  className="text-green-500 ml-2"
                  icon={faCheck}
                />
              </div>
            ) : (
              <div className="">
                <span className="text-2xl font-semibold">Answer :</span>
                <span className="text-2xl line-through">
                  {answerList[index]}
                </span>
                <FontAwesomeIcon className="text-red-500 ml-2" icon={faTimes} />
                <span className="text-2xl mb-5 font-semibold ml-2">
                  {answer.answerList[index].answer}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
