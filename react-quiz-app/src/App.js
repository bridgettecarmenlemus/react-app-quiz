import React, { useState } from "react";

export default function App () {
  const questions = [
    {
      textQuestion: 'Which property can be used in a flex container?',
      answerOptions: [
        { answerText: 'center-content', isCorrect: false },
        { answerText: 'justify-content', isCorrect: true },
        { answerText: 'align-container', isCorrect: false },
        { answerText: 'merge-conflict', isCorrect: false }
      ],
    },
    {
      textQuestion: 'How do you initizialize a git repo',
      answerOptions: [
        { answerText: 'git add .', isCorrect: false },
        { answerText: 'git status', isCorrect: false },
        { answerText: 'git clone', isCorrect: false },
        { answerText: 'git init', isCorrect: true },
      ],
    },
    {
      textQuestion: 'What command would you rub in the terminal to install express and cors?',
      answerOptions: [
        { answerText: 'npx create express cors', isCorrect: false },
        { answerText: 'npm init -y', isCorrect: false },
        { answerText: 'firebase deploy', isCorrect: false },
        { answerText: 'npm i express cors', isCorrect: true },
      ],
    },
    {
      textQuestion: 'Which of the following routes would you most likely expect to return all of the fruits?',
      answerOptions: [
        { answerText: "app.create('/fruits', createFruits)", isCorrect: false },
        { answerText: "app.post('/fruits', createFruits)", isCorrect: false },
        { answerText: "app.get('/fruits', getAllFruits)", isCorrect: false },
        { answerText: "app.add('/fruits', getAllFruits)", isCorrect: true },

      ]
    }
  ]
}
