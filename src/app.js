import React , { Profiler , StrictMode ,Suspense  } from 'react'
import './app.scss'
import { BrowserRouter as Router , useHistory   } from 'react-router-dom'

import { renderRoutes } from 'react-router-config'
import { KeepaliveRouterSwitch ,KeepaliveRoute} from 'react-keepalive-router'

import Detail from './page/jsx'
import List from './page/lifecycle'
import TheIndex from './page/home/index'
import Hook from './page/hooks/index'
import List2 from './page/state'
import List3 from './page/list2/index'
import PropTest from './page/props/index'
import Context from './page/context/index'
// import Render from './page/render/index'
import Render from './page/rendertwo/index'
import BigData from './page/bigData/index'
import VirtualList from './page/bigData/list'
// import RouterPage from './page/router/index'
import Details from './page/details/index'
import RefDemo from './page/ref/index'
import EventDemo from './page/event/index'
// import { render } from 'node-sass'

window.addEventListener('popstate',function(e){
  /* 监听改变 */
  console.log('监听变化')
})     

console.log(window.history)

const menusList = [
  {
    name: '首页',
    path: '/home',
    component:TheIndex
  },
  {
    name:'事件',
    path:'/event',
    component:EventDemo
  }
  // {
  //   name:'ref_Demo',
  //   path:'/ref',
  //   component:RefDemo,
  // }
  // {
  //   name:'React细节',
  //   path:'/details',
  //   component:Details
  // }
  // {
  //   name:'路由',
  //   path:'/router',
  //   // exact:true,
  //   component:RouterPage
  // }
  // {
  //   name:'海量数据',
  //   path:'/bigData',
  //   component:VirtualList
  // }
  // {
  //   name:'提供者模式',
  //   path:'/provider',
  //   component:Context
  // },
  // {
  //   name:'渲染调优',
  //   path:'/renderTwo',
  //   component:Render
  // },
  // {
  //   name:'hooks',
  //   path:'/hooks',
  //   component:Hook
  // }
  // {
  //   name:'渲染控制',
  //   path:'/render',
  //   component:Render,
  // }
  // {
  //   name: '生命周期demo',
  //   path: '/list',
  //   component:List,
  // },
  // {
  //   name: '列表demo',
  //   path: '/list2',
  //   component:List2,
  // },
  // {
  //   name: '表单demo',
  //   path: '/detail',
  //   component:()=><KeepaliveRoute path="/detail" component={Detail}  />
  // },
  // {
  //   name:'列表demo2',
  //   path:'/list3',
  //   component:List3
  // },
  // {
  //   name:'props测试',
  //   path:'/props',
  //   component:PropTest
  // }
]


// function Meuns(){
//   const history = useHistory()
//    return <div className="theStyle" >
//    { menusList.map(item=><span className="routerLink" onClick={()=> {  history.push(item.path) } }   key={item.path}  >{ item.name }</span>) }
//   </div>
// }

// const RouteWithSubRoutes = (item)=> <div> <Route path={item.path} component={ item.component } ></Route>  </div>



// export default  class Index extends React.Component{
//   state={
//     Number:1
//   }
//   node = null
//   componentDidMount(){
//     // console.log(this.node)
//     // console.log(this)
//     console.log(this)
//   }
  
//   render(){
//     return <div ref={(node) => this.node = node } >
//     <div >
//         <Router  >
//           <Meuns/>
//           <div style={{ marginTop:'50px' }} >
//           <KeepaliveRouterSwitch withoutRoute >
//               { renderRoutes(menusList) }
//           </KeepaliveRouterSwitch>
//           </div>
//         </Router>
//     </div>
//   </div>
//   }
// }


// export default () => <Index/>

// export default function Index(){
//   const handleClick1 = () => console.log(1)
//   const handleClick2 = (e) => e.stopPropagation()
//   const handleClick3 = () => console.log(3)
//   const handleClick4 = () => console.log(4)
//   return <div onClick={ handleClick3 }  onClickCapture={ handleClick4 }  >
//       <button onClick={ handleClick1 }  onClickCapture={ handleClick2 }  ></button>
//   </div>
// }


// function FutureAsyncComponent (){
//     const userInfo = getUserInfo()
//     return <div>
//         <h1>{userInfo.name}</h1>; 
//     </div>
// }

// /* 未来的异步模式 */
// export default function Home(){
//    return <div>
//       <React.Suspense  fallback={ <div  > loading... </div> } >
//           <FutureAsyncComponent/>
//       </React.Suspense>
//    </div>
// }

// function Children(){
//   return <div> hello ,let us learn React </div>
// }

// function Children1(){
//   return 
// }

// function ErroMessage(){
//   return <div>渲染出现错误～</div>
// }

// export default class Index extends React.Component{
//   state={ errorRender:false }
//   componentDidCatch(error,info){
//       /* 补救措施 */
//       this.setState({
//         errorRender:true
//       })
//   }
//   render(){
//     return <div>
//       <Children />
//       { this.state.errorRender ? <ErroMessage/> : <Children1/>  }
//     </div>
//   }
// }
// /**
//  * 
//  * @param {*} fn  我们请求数据交互的函数，返回一个数据请求的Promise 
//  */
//  function createFetcher(fn){
//   const fetcher = {
//       status:'pedding',
//       result:null,
//       p:null
//   }
//   return function (){
//     const getDataPromise = fn()
//     fetcher.p = getDataPromise
//     getDataPromise.then(result=>{ /* 成功获取数据 */
//        fetcher.result = result 
//        fetcher.status = 'resolve'
//     })

//     if(fetcher.status === 'pedding'){ /* 第一次执行中断渲染，第二次 */
//        throw fetcher
//     }
//     /* 第二次执行 */
//     if(fetcher.status)
//     return fetcher.result
//   }
// }

// export class Suspense extends React.Component{
//    state={ isRender: true  }
//    componentDidCatch(e){
//      /* 异步请求中，渲染 fallback */
//      this.setState({ isRender:false })
//      const { p } = e
//      Promise.resolve(p).then(()=>{
//        /* 数据请求后，渲染真实组件 */
//        this.setState({ isRender:true })
//      })
//    }
//    render(){
//      const { isRender } = this.state
//      const { children , fallback } = this.props
//      return isRender ? children : fallback
//    }
// }

// function Test(){
//   return <div className="demo"  >《React进阶实践指南》即将上线～</div>
// }

// const LazyComponent =  React.lazy(()=> new Promise((resolve)=>{
//   setTimeout(()=>{
//       resolve({
//           default: ()=> <Test />
//       })
//   },2000)
// }))


// export default function Index(){
//   return <Suspense fallback={<div>loading...</div>} >
//       <LazyComponent />
//   </Suspense>
// }


// export default class Index extends React.Component{
//   handleClick=()=>{
//      console.log(this)
//   } 
//   render(){
//     return <div>
//       <button onClick={ this.handleClick } >点击</button>
//     </div>
//   }
// }

import MockData from './json'
import bigData from './page/bigData/index'

const filterArr = ["139601", "139602", "139603", "139604", "139605", "139713", "139714", "139715", "139608", "139618", "139712", "139716", "139717", "139718", "139719", "139720", "139721", "139722", "139735", "139736"] 

/**
 * 
 * @param {*} allData    所有数据
 * @param {*} fliterData 过滤的数据
 */
// function FilterTrueData(allData,filterData){
//    const idMap = new Set(filterData)
//    return allData.filter(item=> idMap.has(String(item.id)) )
// }

// console.log( FilterTrueData( MockData , filterArr ) )

// var count = 0

// var startVal = +new Date()
// console.log("start time", 0, 0)
// function func() {
//   setTimeout(() => {
//     console.log("exec time", ++count, +new Date() - startVal)
//     if (count === 50) {
//       return
//     }
//     func()
//   }, 0)
// }

// func()


// TODO:  setTimeout 
export default class Index extends React.Component{
   state={ number:666 } 
   handleClick=()=>{
      let time = 0 
      let nowTime = +new Date()
      let timer
      const poll = function(){
        timer = setTimeout(()=>{
           const lastTime = nowTime
           nowTime = +new Date()
           console.log( '递归setTimeout(fn,0)产生时间差：' , nowTime -lastTime )
           poll()
        },0)
       time++
       if(time === 20) clearTimeout(timer)
       
      }
      poll()
   }
   render(){
     return <div>
       hello，world
       <p > 《React进阶实践指南》 { this.state.number } 👍  </p>
       <button onClick={ this.handleClick } >点赞</button>
     </div>
   }
}

// MessageChannel

// export default class Index extends React.Component{
//     state={ num:1,number:2 }
//     constructor(props){
//       super(props)
//       /* 创建一个消息通道*/
//       this.channel = new MessageChannel()
//       /* port1 */
//       this.channel.port1.onmessage = this.handleMessage
//       this.port = this.channel.port2
//     }
//     handleMessage=(mes)=>{
//        /* 异步收到任务 */
//       console.log(mes)
//     }
//     render(){
//        return <button onClick={ ()=>{
//            this.port.postMessage('更新')
//            console.log(1111) // 1111 先被打印， postMessage异步宏任务。
//        } } >下发React更新任务</button>
//     }
// }

// Scheduler

//  export default class Index extends React.Component{
//   state={ num:1,number:1 } 
//   handleClick=()=>{
//       setTimeout(()=>{
//         this.setState({ num:1 })
//         this.setState({ num:2 })
//         this.setState({ num:3 })
//         this.setState({ num:4 })
//         this.setState({ num:5 })
//       },0)
//   }
//   render(){
//      return <div>
//           <BigData/> 
//           <button  onClick={ this.handleClick }  >点击</button>
//      </div>
//   }
// }