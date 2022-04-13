import styles from './Question.module.scss';

function Question({question,finished,testIndex,answersArray,SetAnswer}){
    let abcd = ['А','Б','В','Г','Д'];
    let questionCorrectAnswer = question.questionBody.questionCorrectAnswer;
    let questionText =  question.questionBody.questionText;
    function style(index){
        if (finished === 'false'){
            return (Number.parseInt(answersArray[testIndex][question.questionNumber-1]) === index+1)? `${styles.checkbox__input} ${styles.checkbox__input__active}` : `${styles.checkbox__input}`
        }
        else {
            if ((Number.parseInt(answersArray[testIndex][question.questionNumber-1]) === index+1)){
                if (Number.parseInt(answersArray[testIndex][question.questionNumber-1]) === questionCorrectAnswer){
                    return `${styles.checkbox__input} ${styles.checkbox__input__greenOK}`;
                }
                else {
                    return `${styles.checkbox__input} ${styles.checkbox__input__red}`;
                }
            }
            else if (index+1===questionCorrectAnswer){
                return `${styles.checkbox__input} ${styles.checkbox__input__green}`;
            }
            else {
                return `${styles.checkbox__input}`;
            }
        }
    }
    return (
        <>
        <div className={styles.questiontext}>{questionText}</div>
        <div className={styles.options}>
           {
               question.questionBody.questionAnswers.map((option,index)=>{
                    return (
                    <div key={index} className={styles.option}>
                        <div className={styles.option__symbol}>{abcd[index]}</div>
                        <div className={styles.option__text}>{option}</div>
                    </div>)
               })
           }
        </div>
        <div className={styles.checkboxlist}>
            <div className={styles.checkboxlist__text}>Позначте вiдповiдь</div>
            <div className={styles.checkboxes}>
            {
               question.questionBody.questionAnswers.map((option,index)=>{
                    return (
                        <div className={styles.checkbox} key={index}>
                            <div className={styles.checkbox__symbol} >{abcd[index]}</div>
                            <div onClick={()=>{
                                if (finished==='false'){
                                    SetAnswer(question.questionNumber,testIndex,index+1);
                                }
                            }} className={style(index)}></div>
                        </div>
                    )
               })
           }
           </div> 
        </div>
        </>
    );
}

export default Question;