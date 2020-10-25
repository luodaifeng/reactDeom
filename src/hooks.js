import React,{useState,useEffect} from 'react'
//hooks用于无状态组件
function App(){
    const [title,setTitle]=useState('代丰最帅！！！')
    function changeTitle(){ //setTitle的改变是同步的
        setTitle('代丰还是最帅的！！！')
    } 
    useEffect(()=>{ //useEffect的是异步处理
        console.log(title);
        return ()=>{ //这个相当于页面离开时触发的销毁生命函数
            console.log('componentWillUnmount');
        }
    })
    return(
        <React.Fragment>
            <div>{title}</div>
            <button type='button' onClick={changeTitle}>改变hooks的值</button>
        </React.Fragment>
    )
}
export default App