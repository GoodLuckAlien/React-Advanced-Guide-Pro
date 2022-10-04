import React, { useState } from 'react'

// TODO: hooks顺序
//   function Index({ showNumber }){
//     let number, setNumber
//     showNumber && ([ number,setNumber ] = React.useState(0)) // 第一个hooks
//     const [ num, setNum ] = React.useState(0)      // 第二个hooks
//     const dom = React.useRef(null)                 // 第三个hooks
//     React.useEffect(()=>{                          // 第四个hooks
//         console.log(dom.current)
//     },[])
//     return <div ref={dom} >
//         <div onClick={()=> setNumber(number + 1 ) } > { number } </div>
//         <div onClick={()=> setNumber(number + 1 ) } > { 111 } </div>
//     </div>
// }

// export default function home(){
//     const [ showNumber , setShowNumber ] = React.useState(true)
//     return <div>
//         <button onClick={()=> setShowNumber(false) } >点击</button>
//         <Index showNumber={showNumber}  />
//     </div>
// }

// TODO: 一次点击事件 - 模拟更新

// export default  function Index(props){
//     const [ number , setNumber ] = useState(0)
//     const handleClick=()=>{
//         setNumber(number + 1 )
//     }
//     React.useEffect(()=>{
//         console.log('第一个effect')
//     },[ props.a ])
//     React.useLayoutEffect(()=>{
//         console.log('第二个effect')
//     },[])
//     React.useEffect(()=>{
//         console.log('第三个effect')
//         return ()=>{}
//     },[])
//     return <div >
//         <span ref={()=>{console.log(111)}} ></span>
//         <button onClick={() => handleClick() }  >点击 { number } </button>
//     </div>
// }


export default ()=><div />