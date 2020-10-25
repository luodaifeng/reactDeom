//方向继承属性
import React from 'react'
export default function Hoc(WithComponent,val){
    return class HocComponent extends WithComponent{
        render(){
            return(
                <React.Fragment>
                    {val}
                    年龄：{this.state.age}
                    <WithComponent title='我是方向继承组件传过来的参数！！！'></WithComponent>
                </React.Fragment>
            )
        }
    }
}