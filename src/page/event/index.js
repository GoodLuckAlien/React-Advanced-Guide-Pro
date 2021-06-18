import React from 'react'

// export default function Index(){
//     const handleClick=()=>{ console.log('模拟冒泡阶段执行') } 
//     const handleClickCapture = ()=>{ console.log('模拟捕获阶段执行') }
//     return <div>
//         <button onClick={ handleClick } onClickCapture={ handleClickCapture }  >点击</button>
//         <input  onChange  onChangeCapture />
//     </div>
// }


// TODO: 事件冒泡

// export default function Index(){
//     const handleClick=(e)=> {
//         e.stopPropagation() /* 阻止事件冒泡，handleFatherClick 事件讲不在触发 */
//     }
//     const handleFatherClick=()=> console.log('冒泡到父级')
//     return <div onClick={ handleFatherClick } >
//         <div onClick={ handleClick } >点击</div>
//     </div>
// }


// TODO: 一次点击

// export default function Index(){
//     const handleClick = (e) => { console.log(e) }
//     const handleChange = (e) => { console.log(e) }
//     return <div>
//         <button onClick={ handleClick } >点击</button>
//         <input onChange={ handleChange }  />
//     </div>
// }

export default function Index(){
    const handleClick1 = () => console.log(1)
    const handleClick2 = () => console.log(2)
    const handleClick3 = () => console.log(3)
    const handleClick4 = () => console.log(4)
    return <div onClick={ handleClick3 }  onClickCapture={ handleClick4 }  >
        <button onClick={ handleClick1 }  onClickCapture={ handleClick2 }  ></button>
    </div>
}