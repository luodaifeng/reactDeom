import React from 'react'
import {Link} from 'react-router-dom'
export default class IndexPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                首页 <br />
                    <Link to='/news'>跳转到新闻页面</Link>
                    <br />
                    <Link to='/goods'>跳转到商品页面</Link>
                    <br />
                    <Link to='/login'>跳转到会员登录页面</Link>
                    <br />
                    <Link to='/user'>跳转到会员中心页面</Link>
            </React.Fragment>
        )
    }
}