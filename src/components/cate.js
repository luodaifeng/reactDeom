import React from 'react'
import PropTypes from 'prop-types'
class Cate extends React.Component{
    render(){
        return(
            <div style={this.props.bShow?{display:'block'}:{display:'none'}}>
                {this.props.title}
                <button type='button' onClick={this.props.sendParent.bind(this,'子组件给父组件的值')}>子传父</button>
            </div>
        )
    }
}
Cate.propTypes={ //类型检测
    title:PropTypes.string.isRequired
}
Cate.defaultProps={ //默认内容，在父元素没有传值的时候
    title:'默认导航'
}
export default Cate