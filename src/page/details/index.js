import React, { useEffect, useRef, useState } from 'react'

import './index.less'

export function throttle (fn, time) {
    let previous = 0
    return function(...arg) {
        let now = +new Date()
        if (now - previous > time) {
            previous = now
            fn.apply(this, arg)
        }
    }
}

export function debounce(fn, time) {
    let timer = null
    return function(...arg) {
        if (timer)clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, time)
    }
}


// TODO: 防抖函数
// export default class Index extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleClick = debounce(this.handleClick,500)  /* 防抖 500 秒 */
//         this.handleChange = debounce(this.handleChange,300) /* 防抖 300 毫米 */
//     }
//     handleClick= () => {
//         console.log('点击事件-表单提交-调用接口')
//     }
//     handleChange= (e) => {
//         console.log('搜索框-请求数据')
//     }
//     render(){
//         return <div>
//             <input  placeholder="搜索表单" onChange={this.handleChange}  />
//             <br/>
//             <button onClick={ this.handleClick } > 点击 </button>
//         </div>
//     }
// }

// TODO: 节流函数
// export default function Index(){
//     /* useCallback 防止每次组件更新都重新绑定节流函数  */
//     const handleScroll = React.useCallback(throttle(function(){
//         /* 可以做一些操作，比如曝光上报等 */
//     },300))
//     return <div className="scrollIndex"  onScroll={handleScroll} >
//         <div className="scrollContent" >hello,world</div>
//    </div>
// }

// TODO: 动画 1 动态添加类名

// export default function Index(){
//     const [ isAnimation , setAnimation ] = useState(false)
//     return <div>
//         <button onClick={ ()=> setAnimation(true)  } >改变颜色</button>
//         <div className={ isAnimation ? 'current animation' : 'current'  } ></div>
//     </div>
// }

// TODO: 动画 2 获取dom元素
// export default function Index(){
//     const dom = useRef(null)
//     const changeColor = ()=>{
//         const target =  dom.current
//         target.style.background = '#c00'
//         setTimeout(()=>{
//             target.style.background = 'orange'
//             setTimeout(()=>{
//                 target.style.background = 'yellowgreen'
//             },500)
//         },500)
//     }
//     return <div>
//         <button onClick={ changeColor } >改变颜色</button>
//         <div className='current' ref={ dom }  ></div>
//     </div>
// }


// TODO: setState + css
// export default function Index(){
//     const [ position , setPosition ] = useState({ left:0,top:0 })
//     const changePosition = ()=>{
//         let time = 0
//         let timer = setInterval(()=>{
//             if(time === 30) clearInterval(timer)
//             setPosition({ left:time * 10 , top:time * 10 })
//             time++ 
//         },30)
//     }
//     const { left , top } = position
//     return <div>
//          <button onClick={ changePosition } >改变位置</button>
//          <div className='current' style={{ transform:`translate(${ left }px,${ top }px )` }}  ></div>
//     </div>
// }

// TODO: 及时清除定时器/延时器/监听器

// export default class Index extends React.Component{
//     current = null
//     poll=()=>{} /* 轮训 */
//     handleScroll=()=>{}
//     componentDidMount(){
//        this.timer = setInterval(()=>{
//            this.poll() /* 2 秒进行一次轮训事件 */
//        },2000)
//        this.current.addEventListener('scroll',this.handleScroll)
//     }
//     componentWillUnmount(){
//        clearInterval(this.timer) /* 清除定时器 */
//        this.current.removeEventListener('scroll',this.handleScroll)
//     }
//     render(){
//         return <div ref={(node)=>this.current = node  }  >hello,let us learn React!</div>
//     }
// }
// export default function Index(){
//     const dom = React.useRef(null)
//     const poll = ()=>{}
//     const handleScroll = ()=>{}
//     useEffect(()=>{
//         let timer = setInterval(()=>{
//             poll() /* 2 秒进行一次轮训事件 */
//         },2000)
//         dom.current.addEventListener('scroll',handleScroll)
//         return function(){
//             clearInterval(timer)
//             dom.current.removeEventListener('scroll',handleScroll)
//         } 
//     },[])
//     return <div ref={ dom }  >hello,let us learn React!</div>
// }

// TODO: state

// export default class Index extends React.Component{
//     node = null
//     scrollTop = 0
//     handleScroll=()=>{
//         const {  scrollTop } = this.node 
//         this.scrollTop = scrollTop
//     }
//     render(){
//         return <div ref={(node)=> this.node = node } onScroll={this.handleScroll} ></div>
//     }
// }

export default function Index(){
    const dom = useRef(null)
    const scrollTop = useRef(0)
    const handleScroll = ()=> {
        scrollTop.current = dom.current.scrollTop
    }
    return   <div ref={ dom } onScroll={handleScroll} ></div>
}