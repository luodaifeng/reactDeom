import React from 'react'
// import {Link} from 'react-router-dom'
export default class NewsDetails extends React.Component{
    componentDidMount(){
        console.log('id:'+this.props.match.params.id,'title:'+this.props.match.params.title);
    }
    render(){
        return(
            <React.Fragment>
            新闻详情页gogogo
            </React.Fragment>
        )
    }
}