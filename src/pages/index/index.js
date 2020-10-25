import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactRedux from '../../components/reactRedux'
class IndexPage extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.num = 0
    }
    incCount() {
        //1:选择商品(选择对应的值)type："INC",是必填项，后面的参数最好大写
        this.props.dispatch({ type: 'INC', data: { count: ++this.num } })
    }
    decCount() {
        //1:选择商品(选择对应的值)type："INC",是必填项，后面的参数最好大写
        this.props.dispatch({ type: 'DEC', data: { count: --this.num } })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    首页 <br />
                    <Link to='/news'>跳转到新闻页面</Link>
                    <br />
                    <Link to='/goods'>跳转到商品页面</Link>
                    <br />
                    <Link to='/login'>跳转到会员登录页面</Link>
                    <br />
                    <Link to='/user'>跳转到会员中心页面</Link></div>
                <div>
                    <h3>计数器：{this.props.state.counter.count}</h3>
                    <div>
                        <button type='button' onClick={() => { this.incCount() }}>+</button>
                        <button type='button'  onClick={() => { this.decCount() }}>-</button>
                    </div>
                    <ReactRedux></ReactRedux>
                </div>
            </React.Fragment>
        )
    }
}
export default connect((state) => {
    return {
        state
    }
})(IndexPage)