import React from 'react'
import './style.css'
export default class Button extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <button
                    type={this.props.type}
                    style={this.props.style}
                    className={'my-button ' + this.props.className}
                    onClick={this.props.onClick} 
                   >
                    {this.props.children}
                </button>
            </React.Fragment>
        )
    }
}
Button.defaultProps = { //默认内容，在父元素没有传值的时候
    type: 'button'
}