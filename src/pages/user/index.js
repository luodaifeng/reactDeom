import React from 'react'
export default class Index extends React.Component {
    outLogin(){
        localStorage.clear() //清除本地储存
        this.props.history.replace('/login')
    }
    render() {
        return (
            <div>
                <h2>欢迎{localStorage['username']}大帅哥回来！！！</h2>
                <button type='button' onClick={()=>{this.outLogin()}}>安全退出</button>
            </div>
        )
    }
}