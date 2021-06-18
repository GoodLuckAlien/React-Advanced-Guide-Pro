import React, { useEffect, useRef, useState } from 'react'


import './index.scss'
import '../list2/style.scss'
// import { Form, Input, Button, Checkbox } from 'antd';

// import { listData } from '../../mock'

// const fetchData = (page)=> {
//     return new Promise((resolve)=>{
//         resolve({
//             ...listData,
//             page,
//             list:listData.list.slice( 5* (page -1) ,5 * page )
//         })
//     })
// }

// export function debounce(fn, time) {
//     let timer = null;
//     return function(...arg) {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn.apply(this, arg);
//       }, time);
//     };
// }

// import './index.scss'

// function Item({item}) {
//     return  <div className="goods_item" >
//         <img src={item.giftImage} className="item_image" />
//         <div className="item_content" >
//             <div className="goods_name" >
//                 {item.giftName}
//             </div>
//             <div className="hold_price" />
//             <div className="new_price" >
//                 <div className="new_price" >
//                     <div className="one view">
//                         ¥ {item.price}
//                     </div>
//                 </div>
//             </div>
//             <img className='go_share  go_text' />
//         </div>
//     </div>
// }

// class ScrollView extends React.Component{
//     /* -----自定义事件---- */
//     /* 控制滚动条滚动 */
//       handerScroll=(e)=>{
//         const { scroll } = this.props
//         scroll && scroll(e)
//         this.handerScrolltolower()
//     }
//     /* 判断滚动条是否到底部 */
//     handerScrolltolower(){
//        const { scrolltolower } = this.props
//        const { scrollHeight , scrollTop ,  offsetHeight } = this.node 
//        if(scrollHeight === scrollTop + offsetHeight){ /* 到达容器底部位置 */
//            scrolltolower && scrolltolower()
//        }
//     }
//     node = null

//     /* ---——---生命周期------- */
//     constructor(props) {
//         super(props)
//         this.state={ /* 初始化 Data */
//             list:[]
//         }
//         this.handerScrolltolower = debounce(this.handerScrolltolower,200) /* 防抖处理 */               
//     }
//     /* 接收props, 合并到state */
//     static getDerivedStateFromProps(newProps){
//         const { data } = newProps
//         return { 
//             list : data.list || [] ,
//         }
//     }
//     /* 性能优化，只有列表数据变化，渲染列表 */
//     shouldComponentUpdate(newProps,newState){
//        return newState.list !== this.state.list
//     }
//     /* 获取更新前容器高度 */
//     getSnapshotBeforeUpdate(){
//         return this.node.scrollHeight
//     }
//     /* 获取更新后容器高度 */
//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log('scrollView容器高度变化:' , this.node.scrollHeight - snapshot  )
//     }
//     /* 绑定事件监听器 - 监听scorll事件 */
//     componentDidMount() {
//         this.node.addEventListener('scroll',this.handerScroll)
//     }
//     /* 解绑事件监听器 */
//     componentWillUnmount(){
//         this.node.removeEventListener('scroll',this.handerScroll)
//     }
//     render() {
//         const { list } = this.state
//         const { component } = this.props
//         return <div className="list_box"  ref={(node) => this.node = node }  >
//             <div >     
//                 {
//                     list.map((item) => (
//                         React.createElement(component,{ item , key: item.id  })
//                     ))
//                 }
//             </div>
//         </div>
//     }
// }

// export default function () { 
//     const [ data , setData ] = useState({ list:[],page:0,pageCount:1  }) /* 记录列表数据 */
//     /* 请求数据 */
//     const getData = async ()=>{
//         if(data.page === data.pageCount) return console.log('没有数据了～')
//         const res = await fetchData(data.page + 1)
//         if(res.code === 0) setData({
//             ...res,
//             list:res.page === 1 ?  res.list : data.list.concat(res.list) 
//         })
//     } 
//     /* 滚动到底部触发 */
//     const handerScrolltolower = () => {
//         console.log('scroll已经到底部')
//         getData()
//     }
//     /* 初始化请求数据 */
//     useEffect(()=>{
//         getData()
//     },[])
//     return <ScrollView 
//             data={ data } 
//             component={ Item }  /* Item 渲染的单元组件 */
//             scrolltolower={ handerScrolltolower } 
//             scroll={()=>{}} 
//         />

// }

// class Form extends React.Component{
//     render(){
//         return <div>hehe</div>
//     }
// }

// this.setState({number: this.state.number + 1   })
// console.log(this.state.number) //0
// this.setState({number: this.state.number + 1   })
// console.log(this.state.number) //0
// setTimeout(()=>{
//     this.setState({number: this.state.number + 1   })
//     console.log(this.state.number) //2
//     this.setState({number: this.state.number + 1   })
//     console.log(this.state.number)// 3
// })

// 表单组件
// class Form extends React.Component{
//     render(){
//        return <div></div>
//     }
// }
// // index 组件
// class Index extends React.Component{ 
//     componentDidMount(){
//         const { forwardRef } = this.props
//         forwardRef.current={
//             form:this.form,  // 给form组件实例 绑定给 ref form属性 
//             index:this,     // 给index组件实例 绑定给 ref index属性 
//             button:this.button
//         }
//     }
//     form = null
//     button = null
//     render(){
//         return <div   > 
//           <button ref={(button)=> this.button = button }  >点击</button>
//           <Form  ref={(form) => this.form = form }  />  
//       </div>
//     }
// }
// const ForwardRefIndex = React.forwardRef(( props,ref )=><Index  {...props} forwardRef={ref}  />)
// // home 组件
// export default function Home(){
//     const ref = useRef(null)
//      useEffect(()=>{
//          console.log(ref.current)
//      },[])
//     return <ForwardRefIndex ref={ref} />
// }

// export default class Text extends React.Component{
//     constructor(){
//         super()
//         this.refxie = React.createRef()
//         this.state={
//             number:1,
//         }
//         this.currentDom = React.createRef(null)
//     }
//     node = null
//     componentDidMount(){
//         console.log(this,'this')
//         console.log(this.currentDom)
//     }
//     render(){   
//         return <div>
//              <div ref={this.currentDom}  >ref对象指向Ref</div>
//              <div ref={ (node) => this.node = node } >函数获取Ref</div>
//              <div ref="number" > 属性值获取Ref </div>
//              <FoewardRefIndex ref={this.refxie} fatherSetState={ this.setState.bind(this) }  />
//         </div>
//     }
// }

/* TODO:  Ref属性是一个ref对象  */
// export default  class Index extends React.Component{
//     currentDom  =  React.createRef(null)
//     componentDidMount(){
//         console.log(this.currentDom)
//     }
//     render= () => <div ref={ this.currentDom } >ref对象模式获取元素或组件</div>
// }

// /* 类组件 */
// class Children extends React.Component{  
//     render=()=><div>hello,world</div>
// }
// /* TODO:  Ref属性是一个字符串 */
// export default class Index extends React.Component{
//     componentDidMount(){
//        console.log(this.refs)
//     }
//     render=()=> <div>
//         <div ref="currentDom"  >字符串模式获取元素或组件</div>
//         <Children ref="currentComponentInstance"  />
//     </div>
// }


// class Children extends React.Component{  
//     render=()=><div>hello,world</div>
// }
// /* TODO: Ref属性是一个函数 */
// export default class Index extends React.Component{
//     currentDom = null
//     currentComponentInstance = null
//     componentDidMount(){
//         console.log(this.currentDom)
//         console.log(this.currentComponentInstance)
//     }
//     render=()=> <div>
//         <div ref={(node)=> this.currentDom = node }  >函数模式获取元素或组件</div>
//         <Children ref={(node) => this.currentComponentInstance = node  }  />
//     </div>
// }



// class Children extends React.Component{  
//     render=()=><div>hello,world</div>
// }
// export default class Index extends React.Component{
//     currentDom = React.createRef(null)
//     currentComponentInstance = React.createRef(null)
//     componentDidMount(){
//         console.log(this.currentDom)
//         console.log(this.currentComponentInstance)
//     }
//     render=()=> <div>
//          <div ref={ this.currentDom }  >Ref对象模式获取元素或组件</div>
//         <Children ref={ this.currentComponentInstance }  />
//    </div>
// }



// export default function Index(){
//     const currentDom = React.useRef(null)
//     React.useEffect(()=>{
//         console.log( currentDom.current ) // div
//     },[])
//     return  <div ref={ currentDom } >ref对象模式获取元素或组件</div>
// }


// TODO: 高阶组件转发 ref

// function HOC(Component){
//     class Wrap extends React.Component{
//        render(){
//           const { forwardedRef ,...otherprops  } = this.props
//           return <Component ref={forwardedRef}  {...otherprops}  />
//        }
//     }
//     return  React.forwardRef((props,ref)=> <Wrap forwardedRef={ref} {...props} /> ) 
//   }
//   class Index extends React.Component{
//     render(){
//       return <div>hello,world</div>
//     }
//   }
//   const HocIndex =  HOC(Index)
//   export default ()=>{
//     const node = useRef(null)
//     useEffect(()=>{
//       console.log(node.current)  /*  */ 
//     },[])
//     return <div><HocIndex ref={node}  /></div>
//   }


// TODO: ref 实现组件通信
/* 子组件 */
// class Son extends React.PureComponent{
//     state={
//        fatherMes:'',
//        sonMes:''
//     }
//     fatherSay=(fatherMes)=> this.setState({ fatherMes  }) /* 提供给父组件的API */
//     render(){
//         console.log(111)
//         const { fatherMes, sonMes } = this.state
//         return <div className="sonbox" >
//             <div className="title" >子组件</div>
//             <p>父组件对我说：{ fatherMes }</p>
//             <div className="label" >对父组件说</div> <input  onChange={(e)=>this.setState({ sonMes:e.target.value })}   className="input"  /> 
//             <button className="searchbtn" onClick={ ()=> this.props.toFather(sonMes) }  >to father</button>
//         </div>
//     }
// }
// /* 父组件 */
// export default function Father(){
//     const [ sonMes , setSonMes ] = React.useState('') 
//     const sonInstance = React.useRef(null) /* 用来获取子组件实例 */
//     const [ fatherMes , setFatherMes ] = React.useState('')
//     const toSon =()=> sonInstance.current.fatherSay(fatherMes)
//     return <div className="box" >
//         <div className="title" >父组件</div>
//         <p>子组件对我说：{ sonMes }</p>
//         <div className="label" >对子组件说</div> <input onChange={ (e) => setFatherMes(e.target.value) }  className="input"  /> 
//         <button className="searchbtn"  onClick={toSon}  >to son</button>
//         <Son ref={sonInstance} toFather={setSonMes} />
//     </div>
// }

// TODO: 缓存数据

// const toLearn = [ { type: 1 , mes:'let us learn React' } , { type:2,mes:'let us learn Vue3.0' }  ]
// export default function Index(){
//     const typeInfo = React.useRef(toLearn[0])
//     const changeType = (info)=>{
//         typeInfo.current = info
//     }
//     useEffect(()=>{
//        if(typeInfo.current.type===1){
//            /* ... */
//        }
//     },[]) /* 无须将 typeInfo 添加依赖项  */
//     return <div>
//         {
//             toLearn.map(item=> <button key={item.type}  onClick={ changeType.bind(null,item) } >{ item.mes }</button> )
//         }
//     </div>
// }

export default class Index extends React.Component{
    state={ number:1 }
    static getDerivedStateFromProps(){
        return {
            number:1
        }
    }
    shouldComponentUpdate(){
        return true
    }
    render(){
       return <div>
           hello,world
           <button onClick={()=>this.setState({number:this.state.number+1})} >点击1</button>
           <button onClick={()=> this.forceUpdate() } >点击2</button>
        </div>
    }
}