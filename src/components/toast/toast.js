import React from 'react'
import './style.css'
export default class Toast extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render() {
        return(
            <div className='my-toast'>soast提示</div>
        )
    }
}