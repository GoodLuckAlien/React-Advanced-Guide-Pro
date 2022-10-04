import React , { Profiler , StrictMode ,Suspense  } from 'react'
import { BrowserRouter as Router , useHistory   } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { KeepaliveRouterSwitch ,KeepaliveRoute} from 'react-keepalive-router'
// import 'antd/dist/antd.css'

import JSX from './page/jsx'
import Lifecycle from './page/lifecycle'
import Components from './page/component/index'
import ReactRedux from './page/react-redux'
import Hook from './page/hooks/index'
import State from './page/state'
import PropTest from './page/props/index'
import Context from './page/context/index'
// import Render from './page/render/index'
import Render from './page/rendertwo/index'
import BigData from './page/bigData/index'     /* 时间分片 */
import VirtualList from './page/bigData/list'  /* 虚拟列表 */
import RouterPage from './page/router/index'
import Details from './page/details/index'
import RefDemo from './page/ref/index'
import EventDemo from './page/event/index'
import Mobx from './page/react-mobx/index'
import MiniRouter from './page/mini-router/index'
import CustomModel from './page/customModel/index'
import Verification from './page/formData/index'
import CustomHooks from './page/customHooks/index'
import SourceCode  from './page/sourceCode/index'
import BeginWork from './page/beginWork/index'
import './app.less'


console.log(require.context,'require.context()')
const menusList = [
  {
    name: '2_认识Jsx',
    path: '/jsx',
    component:JSX
  },
  {
    name: '3_玄学state',
    path: '/state',
    component:State
  },
  {
    name: '4_起源components',
    path: '/component',
    component:Components
  },
  {
    name:'5_爱恨props',
    path:'/props',
    component:PropTest
  },
  {
    name: '6_生命周期',
    path: '/lifecycle',
    component:Lifecycle
  },
  {
    name:'7_多功能Ref',
    path:'/ref',
    component:RefDemo
  },
  {
    name:'8_提供者Context',
    path:'/provider',
    component:Context
  },
  {
    name:'11_渲染控制',
    path:'/render',
    component:Render
  },
  {
    name:'12_渲染调优',
    path:'/renderTwo',
    component:Render
  },

  {
    name:'13_海量数据',
    path:'/bigData',
    component:BigData
  },
  {
    name:'14_细节处理',
    path:'/details',
    component:Details
  },
  {
    name:'15_事件原理',
    path:'/event',
    component:EventDemo
  },
  {
    name:'18_hooks原理',
    path:'/hooks',
    component:Hook
  },
  {
    name:'19_React-Router',
    path:'/router',
    // exact:true,
    component:RouterPage
  },
  {
    name:'20_React-Redux',
    path:'/reactRedux',
    component:ReactRedux
  },
  {
    name:'21_React_Mobx',
    path:'/reactMobx',
    component:Mobx
  },
  {
    name:'23_Form_Verificate',
    path:'/formVerify',
    component:Verification
  },
  {
    name:'24_Custom_Model',
    path:'/customMedol',
    component:CustomModel
  },{
    name:'26_27_Custom_Hooks',
    path:'/customHooks',
    component:CustomHooks
  },
  {
    name:'28_Source_Code',
    path:'/sourceCode',
    component:SourceCode
  },
  {
    name:'30_beginWork',
    path:'/beginWork',
    component:BeginWork
  }
]


function Meuns(){
  const history = useHistory()
   return <div className="theStyle" >
   {menusList.map(item=><span className="routerLink"
       key={item.path}
       onClick={()=> {  history.push(item.path) }}
                        >{item.name}</span>)}
  </div>
}


/* TODO: 正查情况  */
export default  class Index extends React.Component{
  state={
    Number:1
  }
  node = null
  componentDidMount(){
    // console.log(this.node)
    // console.log(this)
    console.log(this)
  }

  render(){
    return <div ref={(node) => this.node = node} >
    <div >
        <Router  >
          <Meuns/>
          <div style={{ paddingTop:'50px' }} >
          <KeepaliveRouterSwitch withoutRoute >
              {renderRoutes(menusList)}
          </KeepaliveRouterSwitch>
          </div>
        </Router>
    </div>
  </div>
  }
}

/* TODO: mini-router情况 */
// export default function Root(){
//   return <div>
//     <MiniRouter  />
//   </div>
// }