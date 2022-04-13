import React from 'react';
import Header from './MainPage/Header/Header';
import Content from './MainPage/Content/Content';
import Footer from './MainPage/Footer/Footer';
import data from './data';
import './App.css'

function App({answersarray,questionsarray,finishedarray}) {
  let [currentQuestion,setQuestion] = React.useState(questionsarray);
  let [answersArray,setAnswer] = React.useState(answersarray);
  let [testsState,setTestState] = React.useState(finishedarray);

  function SetAnswer(questionNumber,testIndex,answer){
    setAnswer(
      answersArray = answersArray.map((answerarray,index)=>{
        if (index === testIndex){
          answerarray = answerarray.map((element,index)=>{
              if (index+1 === Number.parseInt(questionNumber)){
                if (element === answer){
                  element = '0';
                }
                else {
                  element = answer;
                }
              }
              return element;
          })
        }
        return answerarray;
      })
    );
    localStorage.setItem('answersArray',answersArray);
  }
  function SetQuestion (questionNumber,testIndex){
    setQuestion(
      currentQuestion = currentQuestion.map((element,index)=>{
          if (index === testIndex){
            element = questionNumber;
          }
          return element;
      })
    );
    localStorage.setItem('questionArray',currentQuestion);
  }
  function SetTestState(testIndex){
    if (testsState[testIndex] === 'true'){
      for (let i=0;i<data.tests[testIndex].testQuestionsCount;i++){
        SetAnswer(i+1,testIndex,'0');
      }
      SetQuestion(1,testIndex);
    }
    setTestState(
    testsState = testsState.map((item,index)=>{
      if (index === testIndex){
        item = (item==='false')? 'true':'false';
      }
      return item;
    }))
    localStorage.setItem('finished',testsState);
  }
  return (
       <div className='wrapper'>
        <Header/>
        <Content testsState={testsState} SetTestState={SetTestState} answersArray={answersArray}  SetAnswer={SetAnswer} currentQuestion={currentQuestion} setQuestion={SetQuestion} data={data}/>
        <Footer/>
      </div>
  );
}

export default App;
