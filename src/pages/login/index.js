import React from 'react'
export default class Index extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
    doLogin(){
        if(this.state.username.match(/^\s*$/)){ //不能为空match(/^\s*$/)
            alert('请输入用户名！！！')
            return
        }
        if(this.state.password.match(/^\s*$/)){
            alert('请输入密码！！！')
            return
        }
        localStorage['username'] = this.state.username
        localStorage['isLogin'] = true
        this.props.history.go(-1)
    }
    render(){
        return(
            <div>
                用户名：<input type='text' placeholder='请输入用户名' onChange={(e)=>{this.setState({username:e.target.value})}}/>
                <br />
                密码<input type='password' placeholder='请输入密码' onChange={(e)=>{this.setState({password:e.target.value})}}/>
                <br />
                <button type='button' onClick={()=>{this.doLogin()}}>登录</button>
            </div>
        )
    }
}