import React, { useReducer } from 'react'
import Counter from './components/counter'
import ReactConText from './counter/index'
import {CounterReducer , defaultState  } from './counter/count'
let iCount = 0
function App() {
    let [state,dispatch] = useReducer(CounterReducer, defaultState )
    console.log(ReactConText);
    return (
        <React.Fragment>
            <div>
                <h3>计数器：{state.count}</h3>
                <button type='button' 
                onClick={()=>{dispatch({type:'inc',payload:{count:++iCount}})}}>+</button>
                <button type='button'>-</button>
                <Counter></Counter>
            </div>
        </React.Fragment>
    )
}
export default App
