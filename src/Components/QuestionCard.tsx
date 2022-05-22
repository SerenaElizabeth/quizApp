import React from 'react';
import { AnswerObject } from '../App'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

//define props and types
type Props = {
    question: string;
    answers: string[];
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, handleClick, userAnswer, questionNum, totalQuestions }) => {

    //API repsonse contains &quot characters, this regex replaces them
    question = question.replace(/&quot;/g, '"').replace(/(&rsquo;|&#039;)/g, "'");
    answers = answers.map((answer) => answer.replace(/&quot;/g, '"').replace(/&rsquo;&#039/g, "'"))

    return (
        <Wrapper>
            <p className='number'>
                Question: {questionNum} / {totalQuestions}
            </p>
            <p> {question}</p>
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper isCorrect={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} key={answer}>
                        <button disabled={userAnswer ? true : false} onClick={handleClick} value={answer}>
                            <span>{answer}</span>
                        </button>
                    </ButtonWrapper>

                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard