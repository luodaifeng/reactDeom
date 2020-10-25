import React from 'react';
import ReactDOM from 'react-dom';
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
function App(){
  return(
    <React.Fragment>
      <ReactRouter></ReactRouter>
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
