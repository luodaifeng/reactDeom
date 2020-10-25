import React, { lazy, Suspense } from 'react'
import {Route, Switch,Redirect } from 'react-router-dom'
import GoodsNav from '../../components/goodsNav/index'
let goodsItem = lazy(() => import('./item'))
let goodsDetails = lazy(() => import('./details'))
let goodsAssess = lazy(() => import('./assess'))
export default class Index extends React.Component {
    render() {
        return (
            <div>
                 <button onClick={()=>{this.props.history.go(-1)}}>返回</button>
                   <GoodsNav></GoodsNav>
                <div>
                        <Switch> 
                            <Suspense fallback={<React.Fragment></React.Fragment>}>
                                <Route path='/goods/item' component={goodsItem}></Route>
                                <Route path='/goods/details' component={goodsDetails}></Route>
                                <Route path='/goods/assess' component={goodsAssess}></Route>
                                <Redirect to='/goods/item'></Redirect>  
                            </Suspense>
                        </Switch>
                </div>
            </div>
        )
    }
}