import styles from './Content.module.scss';
import {Routes,Route} from 'react-router-dom'
import TestsList from '../../TestsList/TestsList'
import Test from './../../Test/Test'

function Content(props) {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="/" element={<TestsList data={props.data}/>}/>
                {
                    props.data.tests.map((test,index)=>{
                        return <Route key={index} path={`/${index+1}/*`} element={
                        <Test testsState={props.testsState} SetTestState={props.SetTestState} answersArray={props.answersArray}
                            SetAnswer={props.SetAnswer}  testIndex = {index} currentQuestion={props.currentQuestion[index]}
                            setQuestion={props.setQuestion} testInfo={test}/>
                       } />
                    })
                }
            </Routes>
        </div>
    );
}

export default Content;