import React, { useState } from 'react'

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import './index.scss'

/* number Reducer */
function numberReducer(state = 1, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'DEL':
      return state - 1
    default:
      return state
  }
}
/* 用户信息reducer */
function InfoReducer(state = {}, action) {
  const { payload = {} } = action
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

/* 打印中间件 */
/* 第一层在componse中被执行 */
function logMiddleware() {
  /* 第二层在reduce中被执行 */
  return (next) => {
    /* 返回增强后的dispatch */
    return (action) => {
      const { type } = action
      console.log('发生一次action:', type)
      return next(action)
    }
  }
}
/* 注册中间件  */
const rootMiddleware = applyMiddleware(logMiddleware)
/* 注册reducer */
const rootReducer = combineReducers({ number: numberReducer, info: InfoReducer })
/* 合成Store */
const Store = createStore(rootReducer, { number: 1, info: { name: null } }, rootMiddleware)


// function Index(){
//   const [ state , changeState  ] :any= useState(Store.getState())
//   useEffect(()=>{
//     /* 订阅state */
//     const unSubscribe = Store.subscribe(()=>{
//          changeState(Store.getState())
//      })
//     /* 解除订阅 */
//      return () => unSubscribe()
//   },[])
//   return <div >
//           <p>  { state.info.name ? `hello, my name is ${ state.info.name}` : 'what is your name' } ,
//            { state.info.mes ? state.info.mes  : ' what do you say? '  } </p>
//          《React进阶实践指南》 { state.number } 👍 <br/>
//         <button onClick={()=>{ Store.dispatch({ type:'ADD' })  }} >点赞</button>
//         <button onClick={()=>{ Store.dispatch({ type:'SET',payload:{ name:'alien' , mes:'let us learn React!'  } }) }} >修改标题</button>
//      </div>
// }
// import Children from './page/home/index'

/* A组件 */
function ComponentA({ toCompB, compBsay }) {
  const [CompAsay, setCompAsay] = useState('')
  return <div className="box" >
    <p>我是组件A</p>
    <div> B组件对我说：{compBsay} </div>
        我对B组件说：<input onChange={(e) => setCompAsay(e.target.value)}
            placeholder="CompAsay"
               />
    <button onClick={() => toCompB(CompAsay)} >确定</button>
  </div>
}
/* 映射state中CompBsay  */
const CompAMapStateToProps = state => ({ compBsay: state.info.compBsay })
/* 映射toCompB方法到props中 */
const CompAmapDispatchToProps = dispatch => ({ toCompB: (mes) => dispatch({ type: 'SET', payload: { compAsay: mes } }) })
/* connect包装组件A */
export const CompA = connect(CompAMapStateToProps, CompAmapDispatchToProps)(ComponentA)

/* B组件 */
class ComponentB extends React.Component {
  state={ compBsay:'' }
  handleToA=()=>{
     this.props.dispatch({ type: 'SET', payload: { compBsay: this.state.compBsay } })
  }
  render() {
    return <div className="box" >
      <p>我是组件B</p>
      <div> A组件对我说：{this.props.compAsay} </div>
       我对A组件说：<input onChange={(e)=> this.setState({ compBsay: e.target.value  })}
           placeholder="CompBsay"
              />
      <button  onClick={this.handleToA} >确定</button>
    </div>
  }
}
/* 映射state中 CompAsay  */
const CompBMapStateToProps = state => ({ compAsay: state.info.compAsay })
export const CompB =  connect(CompBMapStateToProps)(ComponentB)

/* 共享数据 */
function Index() {
  return <div>
    <CompA />
    <CompB />
  </div>
}

export default function Root() {
  return <Provider store={Store} >
    <Index />
  </Provider>
}