import '../styles/Question.css'
const Question = ({ questionNum, questions, correct, setCorrect, setCorrectIndex, setIncorrectIndex, setScore, actualQuestion, correctIndex, incorrectIndex, setQuestionNum, fetchData, actualOptions }) => {
    return (
        <div className="question_wrapper">
            <h3>Question {questionNum}/10</h3>
            <p>{questions[questionNum - 1].question}</p>

            <div className="options">
                {actualOptions.map((option, index) =>
                    <button
                        className={(correct === true && correctIndex === index) || (option === actualQuestion.correct_answer && correct === false && correctIndex === -1 && incorrectIndex != -1) ? 'correct' : correct === false && incorrectIndex === index ? 'incorrect' : null}
                        key={index}
                        onClick={() => {
                            if (option === actualQuestion.correct_answer) {
                                setCorrect(true)
                                setCorrectIndex(index);
                                setScore(prev => prev + 1)

                            } else {
                                setIncorrectIndex(index)
                                console.log(index, correctIndex, incorrectIndex)

                            }
                        }}
                    >{option}</button>
                )}
            </div>
            {questionNum < 10 ?
                <button
                    className='orange_btn'
                    onClick={() => {
                        setCorrect(false)
                        setCorrectIndex(-1)
                        setIncorrectIndex(-1)
                        setQuestionNum(num => num + 1)

                    }}
                >
                    Next</button>
                :
                <button
                    onClick={() => {
                        fetchData()
                        setCorrect(false)
                        setCorrectIndex(-1)
                        setIncorrectIndex(-1)
                        setQuestionNum(1)
                    }}
                >Restart</button>
            }
        </div>)
}

export default Question