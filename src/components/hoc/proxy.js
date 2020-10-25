//属性代理
import React from 'react'
export default function Hoc(WithComponent,val){
    return class HocComponent extends React.Component{
        render(){
            return(
                <React.Fragment>
                    {val}
                    <WithComponent title='我是组件代理传过来的参数！！！'></WithComponent>
                </React.Fragment>
            )
        }
    }
}