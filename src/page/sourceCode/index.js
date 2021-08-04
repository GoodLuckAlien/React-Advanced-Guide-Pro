import React , { useContext , useState , useRef, useEffect, useLayoutEffect, useMemo } from 'react'

const newContext = React.createContext(null)

/* ① React Hooks 必须在函数组件内部执行？，React 如何能够监听 React Hooks 在外部执行并抛出异常。  */
// const value = useContext(newContext)
// console.log(value)

// function Index(props){
//     const [ number, setNumber ] = useState(0)
//     // ②  React Hooks 如何把状态保存起来？保存的信息存在了哪里？
//     let number1 , setNumber1
//     // ③ React Hooks 为什么不能写在条件语句中？
//     if(props.isShow) [ number1 , setNumber1 ] = useState(0)
//     const cacheState = useRef(0)
//     const trueValue = useMemo(()=>{
//         // ④ useMemo 内部引用 useRef 为什么不需要添加依赖项，而 useState 就要添加依赖项
//         return number1 + number + cacheState.current
//     },[ number ,number1 ])
//     // ⑤ useEffect 添加依赖项 props.a ，为什么 props.a 改变，useEffect 回调重新执行。
//     useEffect(()=>{
//         console.log(1)
//     },[ props.a ])
//     // ⑥ React 如何区别 useEffect 和 useLayoutEffect ，执行时机有什么不同？
//     useLayoutEffect(()=>{
//         console.log(2)
//     },[])

//     return <div>《React 进阶实践指南》</div>
// }


function Index(){
    return <div>《React进阶实践指南》</div>
}

export default Index