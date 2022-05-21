//shuffle the array of answers so the correct answer is not always in the same place

export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5) //randomly sorts the array