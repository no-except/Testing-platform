import styles from './Line.module.scss';

function LineItem({finished,correctAnswer,answersArray,testIndex,questionNumber,currentQuestion,setQuestion}){
    function style(){
        if (finished==='false'){
            if (answersArray[testIndex][questionNumber-1]!=='0'){
                if (questionNumber===Number.parseInt(currentQuestion)){
                    return `${styles.line__item} ${styles.line__item__completed} ${styles.line__item__completedactive} ${styles.line__item__border}`;
                }
                else {
                    return `${styles.line__item} ${styles.line__item__completed}`;
                }
            }
            else if (questionNumber===Number.parseInt(currentQuestion)){
                return `${styles.line__item} ${styles.line__item__active}`;
            }
            else {
                return `${styles.line__item}`;
            }
        }
        else {
            if (Number.parseInt(answersArray[testIndex][questionNumber-1])!==correctAnswer && answersArray[testIndex][questionNumber-1]!=='0'){
                if (questionNumber===Number.parseInt(currentQuestion)){
                    return `${styles.line__item} ${styles.line__item__activered} ${styles.line__item__red}`;
                }
                else {
                    return `${styles.line__item} ${styles.line__item__red}`;                    
                }
            }
            else if (Number.parseInt(answersArray[testIndex][questionNumber-1])===correctAnswer){
                if (questionNumber===Number.parseInt(currentQuestion)){
                    return `${styles.line__item} ${styles.line__item__activegreen} ${styles.line__item__green}`;
                }
                else {
                    return `${styles.line__item} ${styles.line__item__green}`;
                  
                }
            }
            else {
                if (questionNumber===Number.parseInt(currentQuestion)){
                    return `${styles.line__item} ${styles.line__item__border}`;
                }
                else {
                    return `${styles.line__item}`;
                }
            }
        }
    }
    return(
        <div onClick={(e)=>{
            setQuestion(e.target.textContent,testIndex);
        }} className={style()}>{questionNumber}</div>
    );
}

export default LineItem;