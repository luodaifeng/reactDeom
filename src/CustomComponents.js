import React from 'react'
import Swiper from './components/swiper'
import Toast from './components/toast/toast.js'
import './assets/css/app.css'
export default class CustomComponents extends React.Component{
  constructor(){
      super();
      this.state={
          imgUrl:[
              {
                  src:'https://img10.360buyimg.com/babel/s1920x740_jfs/t1/145801/20/11488/124667/5f900b0eEa25cecde/912d49972bd2f392.jpg!cc_1920x740',
                  href:'http://www.baidu.com'
              },
              {
                src:'https://img30.360buyimg.com/babel/s1920x740_jfs/t1/136812/21/11307/309957/5f746094Ece12c4aa/1bc5557def254eec.jpg!q70!cc_1920x740',
                href:'http://www.baidu.com'
            },
            {
                src:'https://img13.360buyimg.com/babel/s1920x740_jfs/t1/127495/11/15763/141004/5f8ff8c9E8a4c594d/8d6d2476462a9fdb.jpg!cc_1920x740',
                href:'http://www.baidu.com'
            }
          ]
      }
  }
  render(){
      return(
          <div className='App'>
              <h1>自定义组件(轮播图)</h1>
             <div className='banner'>
             <Swiper imgUrl={this.state.imgUrl}></Swiper>
             </div>
             <div>
                 <Toast></Toast>
             </div>
          </div>
      )
  }
}