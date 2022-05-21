import { shuffleArray } from "./utils";

export type Question = { //these are the properties for each question returned from the API
    category: string;
    correct_answer: string;
    difficulty: string; //easy, medium, hard
    incorrect_answers: string[];
    question: string;
    type: string; //multiple
}

//correct answer and incorrect answers are separated into 2 properties but since we want to render them together we should combine these into 1 array

export type QuestionState = Question & { answers: string[] } //this uses the types from Question above and adds answers property

export enum Difficulty { //Enums allow us to define a set of named constants
    EASY = "easy", //if we have a string/number type but want to limit it to certain values
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json(); //await the fetch and then await to convert it to json
    console.log(data)
    //map over results returned from API
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]) //combinesincorrect and correct answers into an array and then calls the shuffle method defined in utils
        }
    ))
}