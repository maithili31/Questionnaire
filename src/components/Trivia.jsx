import React from "react";
import { useEffect, useState } from "react"
import useSound from "use-sound";
import bgmusic from "../assets/bgmusic.wav"
import right from "../assets/right.wav"
import wrong from "../assets/wrong.wav"


export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
})
  {
    const [question, setQuestion]= useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className,setClassName]= useState("answer");
    const [letsPlay] = useSound(bgmusic)
    const [correctAnswer] = useSound(right)
    const [wrongAnswer] = useSound(wrong)

    useEffect(()=> {
      letsPlay();
    },[letsPlay])

    useEffect(()=> {
      setQuestion(data[questionNumber-1]);
    },[data, questionNumber])

    const delay = (duration, callback) => {
      setTimeout(()=> {
        callback();
      }, duration);
    }

    const handleClick = (a) => {
      setSelectedAnswer(a);
      setClassName("answer active");
      delay(3000, () => 
        setClassName(a.correct ? "answer correct" : 'answer wrong')
      );
      delay(5000, () => 
        {
          if (a.correct) {
            correctAnswer();

            delay (5000,() => {
              setQuestionNumber(prev=>prev+1);
              setSelectedAnswer(null);
            })
          } else {
            wrongAnswer();
            delay (3000, ()=> {
              setStop(true);
            })
          }
        }
      );
    };

  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a) => (
              <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
            ))}
        </div>
      
    </div>
  )
}
