import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [questions, setQuestions] = useState([])
  const [questionNum, setQuestionNum] = useState(1)
  const [actualQuestion, setActualQuestion] = useState()
  const [actualOptions, setActualOptions] = useState([])
  const [correct, setCorrect] = useState(false)
  const [correctIndex, setCorrectIndex] = useState(-1); // Inicialmente no se selecciona ninguna opción
  const [incorrectIndex, setIncorrectIndex] = useState(-1); // Inicialmente no se selecciona ninguna opción
  const [category, setCategory] = useState()
  const fetchData = async () => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&type=multiple${category}`);
      const data = await response.json();
      setQuestions(data.results)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  useEffect(() => {
    setActualQuestion(questions[questionNum - 1])
  }, [questions, questionNum])

  useEffect(() => {
    if (actualQuestion) {
      const correctAnswer = actualQuestion.correct_answer
      const incorrectAnswers = actualQuestion.incorrect_answers
      setActualOptions([...incorrectAnswers, correctAnswer])

    }
    setActualOptions(prev => prev.sort(() => Math.random() - 0.5))
  }, [actualQuestion]);

  return (
    <div className="app">
      <div className="questions_options">
        {!category && <div className="category">
          <h3>Select category</h3>
          <ul>
            <li
              onClick={() => setCategory('')}
            >Any</li>
            <li
              onClick={() => setCategory('&category=9')}
            >General knowledge</li>
            <li
              onClick={() => setCategory('&category=17')}

            >Science & Nature</li>
            <li
              onClick={() => setCategory('&category=18')}

            >Computers</li>
            <li
              onClick={() => setCategory('&category=19')}

            >Mathematics</li>
            <li
              onClick={() => setCategory('&category=21')}
            >Sports</li>
            <li
              onClick={() => setCategory('&category=22')}

            >Geography</li>
            <li
              onClick={() => setCategory('&category=23')}

            >History</li>
            <li
              onClick={() => setCategory('&category=25')}

            >Arts</li>
            <li
              onClick={() => setCategory('&category=27')}

            >Animals</li>

          </ul>
        </div>}

      </div>
      {category && questions.length > 0 ?
        <div className="question_wrapper">
          <p>Question {questionNum}/10</p>
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

                  } else {
                    setIncorrectIndex(index)
                    console.log(index, correctIndex, incorrectIndex)

                  }
                }}
              >{option}</button>
            )}
          </div>
          <button
            onClick={() => {
              setQuestionNum(num => num + 1)
              setCorrect(false)
              setCorrectIndex(-1)
              setIncorrectIndex(-1)
            }}
          >
            Next question</button>
        </div> : null
      }

    </div >
  )
}

export default App
