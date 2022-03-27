import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Quiz from './components/quiz/quiz';
import axios from "axios"
import {useState} from 'react'
import Home from './components/home/home';
import Header  from './components/header.js';
import Result from './components/result/result';
import Footer from './components/footer';
import { useEffect } from 'react';
function App() {
    const [name,setName]=useState("");
    const [score,setScore]=useState(0);
    const [questions,setQuestions]=useState();
    useEffect(()=>{
      console.log("Questions have changed");
    },[questions]);
    const fetchQuestions=async(category,difficulty)=>{
       const {data}=await axios(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
       setQuestions(data.results);
    }
  return (
    <BrowserRouter>
     <div className="App">
      <Header/>
       <Routes>
        <Route path="/home" exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}></Route>
        <Route path="/quiz" exact element={<Quiz name={name} questions={questions} score={score} setScore={setScore} />}></Route>
       </Routes>
      <Footer></Footer>
     </div>
    </BrowserRouter>
  );
}

export default App;
