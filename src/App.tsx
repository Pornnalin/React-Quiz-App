import { useEffect, useState } from "react";
import ShowQuestion from "./components/ShowQuestion";
import ResultScore from "./components/ResultScore";
function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState<string[]>([]);
  const [end, setEnd] = useState<boolean>(false);

  const addAnswer = (answerText: string) => {
    setAnswer([...answer, answerText]);
  };
  useEffect(() => {
    console.log(answer);
  }, [answer]);

  const handleNewQuestion = () => {
    const nextIndex = index + 1;
    setIndex(nextIndex);
  };
  const isEnd = (isFinish: boolean) => {
    setEnd(isFinish);
  };

  const updateScore = (newScore: number) => {
    setScore(newScore);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {!end && (
        <div className="bg-white shadow-lg rounded-xl p-20">
          <ShowQuestion
            index={index}
            addAnswer={addAnswer}
            handleNewQuestion={handleNewQuestion}
            isFinish={isEnd}
          />
        </div>
      )}
      {end && (
        <ResultScore answerList={answer} score={score} setScore={updateScore} />
      )}
    </div>
  );
}

export default App;
