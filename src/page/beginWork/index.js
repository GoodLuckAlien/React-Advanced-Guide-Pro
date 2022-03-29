/* eslint-disable react/no-multi-comp */
import React from 'react'

/* 子组件2 */
function Child2(){
    return <div>子组件 2</div>
}
/* 子组件1 */
function Child1(){
    const [ num , setNumber ] = React.useState(0)
    return <div>
        子组件 {num}
        <button onClick={() => setNumber(num+1)} >按钮1</button>
     </div>
}
/* 父组件 */
export default function Index(){
    const [ num , setNumber ] = React.useState(0)
    const fn = ()=>{
        Promise.resolve().then(()=>{
            fn()
        })
    }
    return <div style={{ marginTop:'100px' }} >
         <button onClick={fn}  >点击</button>
        <button onClick={()=> console.log(111)} >按钮2</button>
    </div>
}


export function Button (){
    const handleClick =()=>{}
    return <button onClick={handleClick} ></button>
}

// export function Button(){
//     return <button onClick={()=>{}} ></button>
// }
// }