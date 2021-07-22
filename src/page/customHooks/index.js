/* eslint-disable react/no-multi-comp */
import React, { useState } from 'react'

import useLog , { LogContext } from './hooks/useLog'

/* TODO:  记录状态 */
// function useRenderCount(){
//     const isFirstRender = React.useRef(true) /* 记录是否是第一次渲染 */
//     const renderCount = React.useRef(1) /* 记录渲染次数 */
//     useEffect(()=>{
//         isFirstRender.current = false
//     },[])
//     useEffect(()=>{
//         if(!isFirstRender.current) renderCount.current++
//     })
//     return [ renderCount.current , isFirstRender.current ]
// }

// /* 记录函数组件执行次数，是否第一次渲染 */
// export default function Index(){
//     const [  ,forceUpdate ] = React.useState()
//     const [ count , isFirst  ] = useRenderCount()
//     console.log(count,isFirst)
//     return <div>
//          《React进阶实践指南》 上线啦
//          <button  onClick={()=> forceUpdate({}) }  >点击</button>
//     </div>
// }


/* TODO: 改变状态 */
// export function debounce(fn, time) {
//     let timer = null;
//     return function(...arg) {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn.apply(this, arg);
//       }, time);
//     };
// }

// function useDebounceState(defauleValue,time){
//     const [ value , changeValue ] = useState(defauleValue)
//     const newChange = React.useMemo(()=> debounce(changeValue,time) ,[ time ])
//     return [ value , newChange ]
// }

// export default function Index(){
//     const [ value , setValue ] = useDebounceState('',300)
//     console.log(value)
//     return <div style={{ marginTop:'50px' }} >
//         《React 进阶实践指南》
//         <input placeholder="" onChange={(e)=>setValue(e.target.value)}  />
//     </div>
// }

/* TODO: 同步 state  */
// function useAsyncState(defaultValue){
//    const value = React.useRef(defaultValue)
//    const [ ,forceUpdate ] = React.useState(null)
//    const dispatch = (fn) => {
//        let newValue
//        if( typeof fn === 'function' ){
//             newValue = fn(value.current)
//        }else{
//            newValue = fn
//        }
//        value.current = newValue
//        forceUpdate({}) /* 强制更新 */
//    }
//    return [  value , dispatch  ]
// }


// export default function Index(){
//     const [ data , setData  ] = useAsyncState(0)
//     return <div style={{ marginTop:'50px' }} >
//         《React 进阶实践指南》 点赞 👍 { data.current }
//        <button onClick={ ()=> {
//            setData(num => num + 1)
//            console.log(data.current)
//        } } >点击</button>
//     </div>
// }

/* TODO: 操纵原生dom  */
// function useGetDOM(){
//     const dom = React.useRef()
//     React.useEffect(()=>{
//        /* 做一些基于 dom 的操作 */
//        console.log(dom.current)
//     },[])
//     return dom
// }

// export default function Index(){
//     const dom = useGetDOM()
//     return <div ref={dom} >
//         《React进阶实践指南》
//         <button >点赞</button>
//     </div>
// }




/* TODO: demo1 -- useLog */
//  function Home(){
//     const [ dom , reportMessage  ] = useLog()
//     return <div>
//         {/* 监听内部点击 */}
//         <div ref={dom} >
//             <p> 《React进阶实践指南》</p>
//             <button> 按钮 one   (内部点击) </button>
//             <button> 按钮 two   (内部点击) </button>
//             <button> 按钮 three (内部点击)  </button>
//         </div>
//         {/* 外部点击 */}
//         <button  onClick={()=>{ console.log(reportMessage)  }} > 外部点击 </button>
//     </div>
// }

// const Index = React.memo(Home)

// export default function Root(){
//     const [ value , setValue ] = useState({})
//     return  <LogContext.Provider value={value} >
//         <Index />
//         <button onClick={()=> setValue({ name:'《React进阶实践指南》' , author:'我不是外星人'  })} >点击</button>
//     </LogContext.Provider>
// }

/* TODO: 执行副作用 */

function useEffectProps(value,cb){

}