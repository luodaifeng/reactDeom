import React from 'react'
// import ProxyHoc from './components/hoc/proxy'
import EctendHoc from './components/hoc/extend'
function NoStatusComponent(props){
    return(
    <div>
        {props.title}
        <button onClick={props.sendParent.bind(this,'我是子组件传过来的值！！！')}>子传父</button>
        </div>
    )
}

class Assembly extends React.Component{
    constructor(){
        super();
        this.state={
            age:30
        }
    }
    getNoStatus(val){
        console.log(val);
    }
    render(){
        return(
           <React.Fragment>
                <NoStatusComponent title='无状态组件' sendParent={this.getNoStatus}></NoStatusComponent>
            <div>有状态组件</div>
        <div>{this.props.title}</div>
           </React.Fragment>
        )
    }
}
// export default ProxyHoc(Assembly,'我是属性代理高阶函数参数！！！')
export default EctendHoc(Assembly,'我是属性代理高阶函数参数！！！')