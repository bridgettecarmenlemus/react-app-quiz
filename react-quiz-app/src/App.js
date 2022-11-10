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

      ]
    }
  ]
}
