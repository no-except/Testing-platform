import styles from './TestsList.module.scss'
import { NavLink } from 'react-router-dom';

function TestsList(props){
    return (
        <>
        <div className={styles.content__title}>Тести</div>
        <div className={styles.tests}>
            {
                props.data.tests.map((test,index)=>{
                    return <NavLink key={index} to={`/${index+1}/`}>{test.testName}</NavLink>;
                })
            }
        </div>
        </>
    )
}

export default TestsList;