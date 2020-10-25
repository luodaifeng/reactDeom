import React from 'react'
import './assets/css/app.css'
// import Input from './input'
import Button from './components/Button/Button.js'
const Input = React.lazy(() => import('./input')); //懒加载（按需导入）
export default class Slot extends React.Component{
    constructor(){
        super();
        this.state={
            title:'插槽的使用',
            isShowInput:false
        }
    }
    del(){
        alert('删除')
    }
    showInput(){
       this.setState({isShowInput:true})
    }
    render(){
        return(
       <div className='App'>
           <h2>{this.state.title}</h2>
           <form action='http://www.baidu.com' target='_blank'>
               <input type='text'/>
           <Button type='submit'>提交</Button>
           <Button type='reset'>重置</Button>
           </form>
           <Button className='btn-color' style={{width:"100px",height:'50px',background:"blue"}}>更改</Button>
           <Button onClick={this.del.bind(this)}>删除</Button>
           <hr />
           <h1>lazy懒加载</h1>
           {
           this.state.isShowInput && 
           <React.Suspense fallback={<React.Fragment></React.Fragment>}>
               <Input></Input>
           </React.Suspense>
           }  
           <Button onClick={this.showInput.bind(this)}>显示</Button>
       </div>
        )
    }
}