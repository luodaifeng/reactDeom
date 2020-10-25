import React from 'react';
// import ReactDOM from 'react-dom' 
import './assets/css/app.css'
class App extends React.Component { //有状态组件
  constructor() {
    super();
    this.state = {
      goods: '代丰大帅哥！！！',
      isActive: false,
      top:'0',
      left:'0'
    }
  }
  componentDidMount() { //生命周期，数据初始化
  }
  click(val) {
    console.log(val);
  }
  clicks = () => {
    console.log('Es6点击事件');
  }
  mouseOvers() { //鼠标移入事件
    this.setState({ isActive: true })
  }
  onmouseout() { //鼠标移出事件
    this.setState({ isActive: false })
  }
  onMouseMove(e,val){ //鼠标移动事件
    console.log(e.pageX,e.pageY,val);
  }
  onTouchStart(){ //触摸事件（开始）
    console.log("触摸事件（开始）");
  }
  onTouchEnd(){   //触摸事件（结束）
    console.log("触摸事件（结束）");
  }
  onTouchMove(e,val){ //触摸移动事件
   console.log(e.touches[0].pageX,val);
  }
  onTouchMoves(e){ //推拽的实现
   console.log(e.touches[0].pageX,e.touches[0].pageY);
   this.setState({left:e.touches[0].pageY,top:e.touches[0].pageX})
  }
  render() {
    return (
      <div className='App'>
         <div  //推拽的deom
        className='box2' 
        style={{marginTop:'30px',top:this.state.left+'px',left:this.state.top+'px'}}
        onTouchMove={(e)=>{this.onTouchMoves(e)}}
        ></div>
        <div> {this.state.goods}</div>

        {/* 点击事件 */}
        <button type='button' onClick={this.click.bind(this, '点击事件传参')}>点击事件Es5</button><br />
        <button type='button' onClick={this.clicks}>点击事件Es6</button><br />
        <button type='button' onClick={() => { this.click('点击事件方式二') }}>点击事件方式二</button>

        {/* 鼠标移入移出事件 */}
        <div 
        className={this.state.isActive ? 'box active' : 'box'} 
        onMouseOver={() => { this.mouseOvers() }} 
        onMouseOut={() => { this.onmouseout() }} 
        onMouseMove={(e)=>{this.onMouseMove(e,'onMouseMove的传参方法')}}></div>

        {/* 移动端事件 */}
        <div 
        className='box' 
        style={{marginTop:'30px'}}
        onTouchStart={()=>{this.onTouchStart()}}
        onTouchEnd={()=>{this.onTouchEnd()}}
        onTouchMove={(e)=>{this.onTouchMove(e,'触摸移动事件')}}
        ></div>

       
      </div>
    )
  }
}

// function App() { //无状态组件
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default App;
