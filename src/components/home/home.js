import React from 'react';
import './home.css'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Categories from './categories.js'
import {useNavigate} from 'react-router-dom'
import ErrorMessage from '../errormessage';

const Home = (props) => {
  const {name,setName,fetchQuestions}=props;
  const [category,setCategory]=useState("");
  const [difficulty,setDifficulty]=useState("");
  const [error,setError]=useState(false);
  const history=useNavigate();
  const handlesubmit=async ()=>{
    if(!category || !name || !difficulty)
     setError(true);
    else
     {
       await fetchQuestions(category,difficulty);
       history('/quiz')                //pushes it in the quiz route
     }
  }
  return (
  <>
  <div className="content">
      <div className="settings">
          <h2>Quiz Settings</h2>
      </div>
      <div className="settingsselect">
        {error && <ErrorMessage></ErrorMessage>}
        <TextField label="Enter Your Name" variant="outlined" onChange={(e)=>setName(e.target.value)} value={name}/>
        <TextField id="outlined-select-currency" select label="Select Category" variant="outlined" onChange={(e)=>setCategory(e.target.value)} value={category}>
         {
           Categories.map((cat)=>{
             return(
           <MenuItem key={cat.category}  value={cat.value}>{cat.category}</MenuItem>);
          })
         }
        </TextField>
        <TextField  select label="Select Difficulty" onChange={(e)=>setDifficulty(e.target.value)} value={difficulty}>
          <MenuItem label="Easy" value="easy">Easy</MenuItem>
          <MenuItem label="Medium" value="medium">Medium</MenuItem>
          <MenuItem label="Hard" value="hard">Hard</MenuItem>
        </TextField>
        <br/>
        <Button variant="contained" color="primary" onClick={handlesubmit}>Start Quiz</Button>
      </div>
     
  </div>
  </>
  );
};

export default Home;
