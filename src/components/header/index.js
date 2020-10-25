import React from 'react'
class HeaderComponent extends React.Component{
    render(){
    return(
        <div>
            <div id='header'>
            {
                this.props.title.map((item,index)=>{
                    return(
                    <div key={index}>{item.title}</div>
                    )
                })
            }
            </div>
        </div>
        
    )
    }
}
export default HeaderComponent
