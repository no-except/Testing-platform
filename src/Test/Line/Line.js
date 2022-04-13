import styles from './Line.module.scss';
import LineItem from './LineItem'

function Line({finished,questions,answersArray,currentQuestion,setQuestion,questionsCount,testIndex}){
    let a = [];
    for (let i=0;i<questionsCount;i++){
        a.push(i+1);
    }
    return (
    <div className = {styles.line}>
        {
            a.map((index)=>{
                return <LineItem finished={finished} correctAnswer= {questions[index-1].questionBody.questionCorrectAnswer} answersArray={answersArray} testIndex={testIndex} setQuestion={setQuestion} key={index} currentQuestion={currentQuestion} questionNumber={index}/>
            })
        }
    </div>
    );
}

export default Line;