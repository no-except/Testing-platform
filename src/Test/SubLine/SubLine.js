import styles from './SubLine.module.scss';

function SubLine({currentQuestion,questionsCount}){
    return (
        <div className = {styles.subline}><span>Завдання {currentQuestion} з {questionsCount}</span></div>
    )
}

export default SubLine;