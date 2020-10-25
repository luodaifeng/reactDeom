import React from 'react'
class Input extends React.Component{ //有状态组件
    constructor(){ 
        super();
        this.state={
            title:'实现数据双向绑定组件',
            amount:'1'
        }
    }
    render(){
        return(
            <div className='App'>
                <h2>{this.state.title}</h2>
            数量:<input value={this.state.amount} type='text' onChange={(e)=>{this.setState({amount:e.target.value})}}/><br />
            数据值：{this.state.amount}
            </div>
        )
    }
} 
export default Input