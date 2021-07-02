import React from 'react'
import { Router, Route, useHistory, useListen, Switch } from './router'

/* 引用业务组件 */
import Detail from './testPage/detail'
import Home  from './testPage/home'
import List from './testPage/list'
import './index.scss'

const menusList = [
    {
        name:'首页',
        path:'/home'
    },
    {
        name:'列表',
        path:'/list'
    },
    {
        name:'详情',
        path:'/detail'
    }
]

function Menus() {
    const history  = useHistory()
    /* 路由跳转 */
    const RouterGo = (url) =>  history.push(url)

    const path = history.location.pathname
    return <div>
        {
            menusList.map((item=><span className={`nav ${ item.path===path ? 'active'  : '' }`}
                key={item.path}
                onClick={()=>RouterGo(item.path)}
                                 >{item.name}</span>))
        }
    </div>
}

function  Top() {
    /* 路由监听 */
    useListen((location)=>{
        console.log( '当前路由是：', location.pathname)
    })
    console.log(111)
    return <div>--------top------</div>
}

function Index() {
    console.log('根组件渲染')
    return <Router>
         <Top/>
        <Menus />
        <Switch>
        <Route component={Home}
            path="/home"
        ></Route>
        <Route  component={Detail}
            path="/detail"
        />
        <Route path="/list"
            render={(props)=> <List {...props} />}
        />
        </Switch>

        <div>--------bottom------</div>
    </Router>
}

export default Index