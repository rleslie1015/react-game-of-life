const createNewGrid = () => {
    return Array.from({length: 25}).map(() => Array.from({length: 25}).fill(0))
}

export {createNewGrid }