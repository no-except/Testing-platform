import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import data from './data'
import './index.css';

let finishedarray = [];
let questionsarray = [];
let answersarray = [];

if (localStorage.getItem('finished')){
  finishedarray = localStorage.getItem('finished').split(',');
}
else {
  for (let i=0;i<data.testsCount;i++){
    finishedarray.push('false');
  }
  localStorage.setItem('finished',finishedarray);
}
if (localStorage.getItem('answersArray')){
  let store = localStorage.getItem('answersArray').split(',');
  let index = 0;
  for (let i=0;i<data.testsCount;i++){
    let q = [];
    for (let j=0;j<data.tests[i].testQuestionsCount;j++){
      q.push(store[index+j]);
    }
    index+=data.tests[i].testQuestionsCount;
    answersarray.push(q);
  }
}
else {
  for (let i=0;i<data.testsCount;i++){
    let q = [];
    for (let j=0;j<data.tests[i].testQuestionsCount;j++){
      q.push('0');  
    }
    answersarray.push(q);
  }
  localStorage.setItem('answersArray',answersarray);
}
if (localStorage.getItem('questionArray')){
  questionsarray = localStorage.getItem('questionArray').split(',');
}
else {
  for (let i=0;i<data.testsCount;i++){
    questionsarray.push(1);
  }
  localStorage.setItem('questionArray',questionsarray);
}

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App finishedarray={finishedarray} answersarray={answersarray} questionsarray={questionsarray}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
