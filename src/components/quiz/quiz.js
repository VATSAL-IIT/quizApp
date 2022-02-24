import { TextField } from '@mui/material';
import React from 'react';
import './quiz.css';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const Quiz = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const { questions, score, name, setScore } = props;
  if(currentQuestion<10)
  {
  var optionss = [];
  optionss.push(questions[currentQuestion].correct_answer);
  optionss.push(questions[currentQuestion].incorrect_answers[0]);
  optionss.push(questions[currentQuestion].incorrect_answers[1]);
  optionss.push(questions[currentQuestion].incorrect_answers[2]);
  console.log(optionss);
  }
  const [options, setoptions] = useState(optionss);
  var [selected, setSelected] = useState(false);
 
  const handleChange = () => {
    setCurrentQuestion(currentQuestion => currentQuestion + 1);
    if(currentQuestion>10)
    setShowScore(true);
    setoptions(optionss);
    setSelected(false);
  }
  const endQuiz = () => {
    setShowScore(true);
  }
  function checkAnswer(e) {
    setSelected(true);
    selected = true;
    if (!selected) {
      if (currentQuestion == 10)
        setShowScore(true);
    }
    if (optionss[Number(e.target.value)] == questions[currentQuestion].correct_answer)
      setScore(score => score + 1);
    setSelected(false);
    handleChange();
  }
  return (
    <div className='quiz'>
      <span className="subtitle">Welcome ,{name}</span>
      {!showScore && currentQuestion<10 && 
        <div className="questionSection">
          <div className="question">
            <h3 style={{ color: 'white', font: 'Roboto', marginTop: 30, padding: 20 }}>{questions[currentQuestion].question}</h3>
            <div className="options">
              {
                options.map((option, key) => {
                  return (
                    <>
                      <button
                        value={key}
                        disabled={selected}
                        className="option"
                        onClick={(e) => checkAnswer(e)}
                      >{option}
                      </button>
                      <br />
                    </>);
                })
              }
            </div>
            <div className="actionbuttons">
              <button className="nextbtn" onClick={handleChange}>Next</button>
              <button className="endbtn" onClick={endQuiz}>End Quiz</button>
            </div>
          </div>
        </div>
      }
      {
        (showScore || currentQuestion>9) &&
        <div className="scoresection">
          <h1 style={{color:"blue"}}>Thanks for Participating.Your Total Score is {score}</h1>
        </div>
      }
    </div>
  );
};

export default Quiz;
