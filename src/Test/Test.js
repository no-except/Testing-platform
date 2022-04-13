import styles from './Test.module.scss'
import Line from './Line/Line'
import React from 'react'
import SubLine from './SubLine/SubLine'
import Question from './Question/Question'
import ResultBlock from './ResultBlock/ResultBlock'

function CountofCorrect(props){
    let k = 0;
    for (let i=0;i<props.testInfo.testQuestionsCount;i++){
        if (props.testInfo.questions[i].questionBody.questionCorrectAnswer === Number.parseInt(props.answersArray[props.testIndex][i])){
            k++;
        }
    }
    return k;
}
function CountofAnswered(props){
    let k = 0;
    for (let i=0;i<props.testInfo.testQuestionsCount;i++){
        if (Number.parseInt(props.answersArray[props.testIndex][i]) !== 0){
            k++;
        }
    }
    return k;
}

function buttonText(props){
    if (Number.parseInt(props.currentQuestion) !== props.testInfo.testQuestionsCount){
        return `Наступне`;
    }
    else {
        if (props.testsState[props.testIndex] === 'false'){
            return `Завершити тест`;
        }
        else {
            return `Пройти ще раз`;
        }
    }
}

function Test(props){
    return (
        <div className={styles.test__body}>
            <div className={styles.test__title}>{props.testInfo.testName}</div>
            <Line finished={props.testsState[props.testIndex]} questions = {props.testInfo.questions}
            answersArray={props.answersArray} testIndex={props.testIndex}
            currentQuestion = {props.currentQuestion} setQuestion = {props.setQuestion} questionsCount ={props.testInfo.testQuestionsCount}>
            </Line>
            {
                (props.testsState[props.testIndex] === 'false')&&
                <SubLine currentQuestion = {props.currentQuestion} questionsCount ={props.testInfo.testQuestionsCount} />
            }
            {
                (props.testsState[props.testIndex] === 'true')&&
                 <ResultBlock totalAnswered={CountofAnswered(props)}count={CountofCorrect(props)} total={props.testInfo.testQuestionsCount}/>
            }
            <Question finished={props.testsState[props.testIndex]} testIndex={props.testIndex}
            answersArray={props.answersArray}  SetAnswer={props.SetAnswer}
            questionAnswers={props.testInfo.questions[props.currentQuestion-1].questionBody.questionAnswers}
            question={props.testInfo.questions[props.currentQuestion-1]}>
            </Question>
            <button onClick={()=>{
                if(Number.parseInt(props.currentQuestion) !== props.testInfo.testQuestionsCount){
                    props.setQuestion(Number.parseInt(props.currentQuestion)+1,props.testIndex)
                }
                else {
                    props.SetTestState(props.testIndex);
                }
            }
            } className={styles.btn}>{buttonText(props)}</button>
        </div>
    )
}

export default Test;