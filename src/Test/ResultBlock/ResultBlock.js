import styles from './ResultBlock.module.scss';

function ResultBlock({totalAnswered,count,total}){
    if (totalAnswered === 0){
        totalAnswered = 1;
    }
    return (
        <div className={styles.resultblock}>
            <div>
                Ваш результат: {count} / {total}
            </div>
            <div>
                Правильних вiдповiдей: {Math.floor((count/totalAnswered)*100)}%
            </div>
        </div>
    )
}

export default ResultBlock;