import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux'  //引入redux
import {Provider} from 'react-redux'   ////引入react-redux
import './assets/css/common/public.css'
// import App from './App';
// import Input from './input'
// import SonToFather from './SonToFather'
// import Slot from './slot'
// import CustomComponents from './CustomComponents'
// import Assembly from './assembly'
// import Hooks from './hooks'
// import HooksReducer from './hooksreducer'
import ReactRouter from './reactRouter'
import * as serviceWorker from './serviceWorker';
//第二步商品装车
function counterReduxcer(state={count:0},actions){
   switch(actions.type){
     case 'INC':
     return{...state, ...actions.data}
     case 'DEC':
     return{...state, ...actions.data}
     default:
     return state

   }
}
//会员
let defaultStore ={
  username:localStorage['username']?localStorage['username']:'',
  isLogin:localStorage['isLogin']?Boolean(localStorage['isLogin']):false
}
function loginReduxcer(state=defaultStore,actions){
  switch(actions.type){
    case 'LOGIN':
    localStorage['username'] = actions.data.username
    localStorage['isLogin'] = true
    return{...state, ...actions.data}
    default:
    return state

  }
}
//第三步存入仓库
let store = createStore(combineReducers({
  counter:counterReduxcer,
  user:loginReduxcer
}))

function App(){
  return(
    <React.Fragment>
      <Provider store={store}>
        <ReactRouter></ReactRouter>
        </Provider>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Input /> */}
    {/* <SonToFather /> */}
    {/* <Slot /> */}
    {/* <CustomComponents /> */}
    {/* <Assembly /> */}
    {/* <Hooks /> */}
    {/* <HooksReducer /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
