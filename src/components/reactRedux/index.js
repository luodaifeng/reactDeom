import React from 'react'
import {connect} from 'react-redux'
class Index extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
        <div>子组件计数器：{this.props.state.counter.count}</div>
        )
    }
}
export default connect((state)=>({state}))(Index)