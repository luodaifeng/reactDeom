
import React from 'react'
import {Link} from 'react-router-dom'
export default class NewsPage extends React.Component{
    render(){
        return(
            <React.Fragment>
            <ul>
                <li><Link to='/news/details/1/新闻详情页1'>新闻详情页1</Link></li>
                <li onClick={()=>{
                    this.props.history.push({
                        pathname:'/news/details',
                        query:{
                            id:1,
                            title:'新闻详情页2'
                        }
                    })
                }}>新闻详情页2</li>
            </ul>
            </React.Fragment>
        )
    }
}