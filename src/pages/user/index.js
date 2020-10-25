import React from 'react'
import {connect} from 'react-redux'
class Index extends React.Component {
    constructor(props){
        super();
        console.log(props);
    }
    outLogin(){
        localStorage.clear() //清除本地储存
        this.props.history.replace('/login')
    }
    render() {
        return (
            <div>
                <h2>欢迎{this.props.state.user.username}大帅哥回来！！！</h2>
                <button type='button' onClick={()=>{this.outLogin()}}>安全退出</button>
            </div>
        )
    }
}
export default connect((state)=>({state}))(Index)