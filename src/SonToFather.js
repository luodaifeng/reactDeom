import React from 'react'
import Cate from './components/cate'
class SonToFather extends React.Component{
    constructor(){
        super();
        this.state={
            title:'组件通信（子传父）'
        }
    }
    getChildren(val){
      console.log(val);
    }
    render(){
        return(
            <div className='App'>
            <h2>{this.state.title}</h2>
            <Cate bShow={true} sendParent={this.getChildren.bind(this)}></Cate>
            </div>
        )
    }
}
export default SonToFather