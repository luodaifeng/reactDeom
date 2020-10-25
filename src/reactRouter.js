import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {AuthRoute} from './routes/private'
import Load from './components/RouterLazy';
let IndexPage = Load(()=>import('./pages/index'));
let NewsPage = lazy(()=>import('./pages/news'))
let NewsDetailsPage = lazy(()=>import('./pages/news/details'))
let GoodsPage = lazy(()=>import('./pages/goods'))
let LoginPage = lazy(()=>import('./pages/login'))
let UserPage = lazy(()=>import('./pages/user'))
export default class reactRouter extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <React.Fragment>
                    <Suspense fallback={<React.Fragment></React.Fragment>}>
                        <Route component={IndexPage} path='/' exact></Route>
                        <Route component={GoodsPage} path='/goods'></Route>
                        <Route component={LoginPage} path='/login'></Route>
                        <AuthRoute component={UserPage} path='/user'></AuthRoute>
                        <Route component={NewsPage} path='/news' exact></Route>
                        <Route component={NewsDetailsPage} path='/news/details/:id/:title'></Route>
                    </Suspense>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}