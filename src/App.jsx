import { useState, useEffect } from 'react'
import './App.css'
import Categories from './components/Categories'
import Nav from './components/Nav'
import Question from './components/Question'
import general from './assets/books.jpg'
import nature from './assets/nature.jpg'
import computer from './assets/computer.jpg'
import math from './assets/math.jpg'
import sports from './assets/sports.jpg'
import history from './assets/history.jpg'
import geography from './assets/geography.jpg'
import arts from './assets/arts.jpg'
import animals from './assets/animals.jpg'

function App() {
  const [questions, setQuestions] = useState([])
  const [questionNum, setQuestionNum] = useState(1)
  const [actualQuestion, setActualQuestion] = useState()
  const [actualOptions, setActualOptions] = useState([])
  const [correct, setCorrect] = useState(false)
  const [correctIndex, setCorrectIndex] = useState(-1); // Inicialmente no se selecciona ninguna opción
  const [incorrectIndex, setIncorrectIndex] = useState(-1); // Inicialmente no se selecciona ninguna opción
  const [category, setCategory] = useState('')
  const [score, setScore] = useState(0)
  console.log(actualQuestion)

  const restart = () => {
    setCategory('')
    setScore(0)
    setQuestionNum(1)
  }
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
    <div className="app"    >
      {<img className='background'
        src={category === '&category=9' ? general : category === '&category=17' ? nature : category === '&category=18' ? computer : category === '&category=19' ? math : category === '&category=21' ? sports : category === '&category=22' ? geography : category === '&category=23' ? history : category === '&category=25' ? arts : category === '&category=27' ? animals : general}
        alt="" />}
      <Nav
        score={score}
        category={category}
        restart={restart} />
      <div className="questions_options">
        {!category &&
          <Categories
            setCategory={setCategory} />}

      </div>
      {category && questions.length > 0 ?
        <main>
          <Question
            restart={restart}
            questionNum={questionNum}
            questions={questions}
            correct={correct}
            setScore={setScore}
            setCorrect={setCorrect}
            setCorrectIndex={setCorrectIndex}
            setIncorrectIndex={setIncorrectIndex}
            actualQuestion={actualQuestion}
            correctIndex={correctIndex}
            incorrectIndex={incorrectIndex}
            setQuestionNum={setQuestionNum}
            fetchData={fetchData}
            actualOptions={actualOptions}
          />
        </main> : null
      }

    </div >
  )
}

export default App
