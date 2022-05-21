import React, { useState } from 'react';
import { fetchQuestions } from './API';
//components
import QuestionCard from './Components/QuestionCard';
//types
import { Difficulty, QuestionState } from './API';
//styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {

  //states

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(questions)

  const startTrivia = async () => { //when start button clicked, trigger fetch 
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY); //TODO add error handling
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value //gets users answer
      const isCorrect = questions[number].correct_answer === answer //boolean checking if user answer = correct answer
      if (isCorrect) setScore(prev => prev + 1);
      //add to array
      const answerObject = {
        question: questions[number].question,
        answer: answer,
        isCorrect: isCorrect,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }
  const nextQuestion = () => {
    //check if last question, if not move onto next

    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>
        {/*only render start button if game is over or final question has been answered*/}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (<button className='start' onClick={startTrivia}>Start</button>) : null}

        {!gameOver ? <p className='score'>Score : {score} </p> : null}
        {loading && <p className='loading'>Loading Questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            handleClick={checkAnswer} />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (<button className='next' onClick={nextQuestion}>Next</button>) : null}
      </Wrapper>
    </>
  );
};

export default App;
