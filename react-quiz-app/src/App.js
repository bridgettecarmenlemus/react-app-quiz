import React, { useState } from "react";
import styles from "./App.css";


export default function App() {
  const questions = [
    {
      textQuestion: "Which property can be used in a flex container?",
      answerOptions: [
        { answerText: "center-content", isCorrect: false },
        { answerText: "justify-content", isCorrect: true },
        { answerText: "align-container", isCorrect: false },
        { answerText: "merge-conflict", isCorrect: false },
      ],
    },
    {
      textQuestion: "How do you initizialize a git repo",
      answerOptions: [
        { answerText: "git add .", isCorrect: false },
        { answerText: "git status", isCorrect: false },
        { answerText: "git clone", isCorrect: false },
        { answerText: "git init", isCorrect: true },
      ],
    },
    {
      textQuestion:
        "What command would you rub in the terminal to install express and cors?",
      answerOptions: [
        { answerText: "npx create express cors", isCorrect: false },
        { answerText: "npm init -y", isCorrect: false },
        { answerText: "firebase deploy", isCorrect: false },
        { answerText: "npm i express cors", isCorrect: true },
      ],
    },
    {
      textQuestion:
        "Which of the following routes would you most likely expect to return all of the fruits?",
      answerOptions: [
        { answerText: "app.create('/fruits', createFruits)", isCorrect: false },
        { answerText: "app.post('/fruits', createFruits)", isCorrect: false },
        { answerText: "app.get('/fruits', getAllFruits)", isCorrect: false },
        { answerText: "app.add('/fruits', getAllFruits)", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleClickAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    
    <div className="app-container">
      {showScore ? (
        <div className="score-section-container">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section-container">
            <div className="question-count-container">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text-container">
              {questions[currentQuestion].textQuestion}
            </div>
          </div>
          <div className="answer-section-container">
            {questions[currentQuestion].answerOptions.map((answerOption,index) => (
              <button key={index} onClick={() => handleClickAnswer(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    
  );
}
