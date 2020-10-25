import React from 'react'
import { withRouter } from 'react-router-dom'
// export default withRouter( class goodsNav extends React.Component{
//     goPage(url){
//         this.props.history.replace(url) //页面跳转的方法
//     }
//     render(){
//         return(
//            <div>
//                 <React.Fragment>
//                 <ul> 
//                     {/* 点击跳转 */}
//                     <li onClick={()=>{this.goPage('/goods/item')}}>商品</li>
//                     <li onClick={()=>{this.goPage('/goods/details')}}>详情</li>
//                     <li onClick={()=>{this.goPage('/goods/assess')}}>评价</li>
//                 </ul>
//             </React.Fragment>
//            </div>
//         )
//     }
// } )

function goodsNav(props) { //无状态组件
    let goPage=(url)=>{
     props.history.replace(url) //页面跳转的方法
    }
    return (
        <div>
            <React.Fragment>
                <ul>
                    {/* 点击跳转 */}
                    <li onClick={() => {goPage('/goods/item') }}>商品</li>
                    <li onClick={() => {goPage('/goods/details') }}>详情</li>
                    <li onClick={() => {goPage('/goods/assess') }}>评价</li>
                </ul>
            </React.Fragment>
        </div>
    )
}
export default withRouter(goodsNav)