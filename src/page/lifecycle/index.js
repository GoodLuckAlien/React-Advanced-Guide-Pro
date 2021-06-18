import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'
// import { SyncOutlined } from '@ant-design/icons'
console.log('React版本：'+React.version)
import './style.scss'


// function Text(){
//     return <div>hello,world</div>
// }

// class Index extends React.Component{
//     node = null
//     constructor(props){
    
//        super(props)
//        this.state={
//            numer:1,
//        }
//     }

//     componentDidMount(){
//         /*  组件初始化的时候，创建一个 container 容器 */
//         ReactDOM.render(<Text/> , this.node )
//     }
//     handerClick=()=>{
//        /* 点击卸载容器 */ 
//        const state =  ReactDOM.unmountComponentAtNode(this.node)
//        console.log(state)
//     }
//     render(){
//         return <div  style={{ marginTop:'80px' }}  > 
//              <div ref={ ( node ) => this.node = node  }  ></div>  
//             <button onClick={ this.handerClick } >click me</button>
//         </div>
//     }
// }


// TODO: component
// class Index extends React.Component{  
//     node = null
//     componentDidMount(){
       
//     } 
//     handerClick=()=>{

//     }
    
//     render(){
//         return <div>
//             <div>我是子组件</div>
//             <button onClick={this.handerClick} >点击</button>
//         </div>
//     }
// }

// export default ()=>{
//     const [ isRender , setRender  ] = useState(false)
//     const [ loading , setLoading ] = useState(false)
//     useLayoutEffect(()=>{
//         console.log('useLayoutEffect执行')
//     },[])
//     useEffect(()=>{
//         console.log('useEffect执行')
//     },[])
   
//     return <div>
//         { isRender && <Index  setLoading={setLoading} />  }
//         <div>
//            { loading && <SyncOutlined spin /> }
//         </div>
//         <button onClick={ ()=> { setRender(true) } } >渲染子组件</button>
//     </div>
// } 

export function debounce(fn, time) {
    let timer = null;
    return function(...arg) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arg);
      }, time);
    };
}

//  class Index extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={       //① 可以用来初始化state，比如可以用来获取路由中的参数，赋值给state
//             name:'alien',
//             list:[]
//         }
//         this.handleClick = this.handleClick.bind(this) /* ② 绑定 this */
//         this.handleInputChange = debounce(this.handleInputChange , 500) /* ③ 绑定防抖函数，防抖 500 毫秒 */
//         // const _render = this.render
//         // this.render = function(){
//         //     /* ④ 劫持修改类组件上的一些生命周期 */
//         //     return _render.bind(this)
//         // }
//     }
//     /* 点击事件 */
//     handleClick(){ /* ... */ }
//     /* 表单输入 */
//     handleInputChange(){ /* ... */ }
//     UNSAFE_componentWillMount(){
//         console.log(11)
//     }
    // static getDerivedStateFromProps(newProps){
    //     const { type } = newProps
    //     switch(type){
    //         case 'fruit' : 
    //         return { list:['苹果','香蕉','葡萄' ] }
    //         case 'vegetables':
    //         return { list:['菠菜','西红柿','土豆']}
    //     }
    // }
//     render(){
//         return <div>{ this.state.list.map((item)=><li key={item} >{ item  }</li>) }</div>
//     }
// }


/* TODO: 生命周期 */
// function PropReducer(type){
//     switch(type){
//         case 'fruit' : 
//         return { list:['苹果','香蕉','葡萄' ] }
//         case 'vegetables':
//         return { list:['菠菜','西红柿','土豆']}
//     }
// }

// class Derived extends React.Component{
//     state={ list:[] }
//     static getDerivedStateFromProps(newProps){
//         const { type } = newProps
//         return PropReducer(type)
//     }
//     render(){
//         console.log('渲染')
//         return <div>{ this.state.list.map((item)=><li key={item} >{ item  }</li>) }</div>
//     }
// }

// class Receive extends React.Component{
//     state={ list:[] }
//     // UNSAFE_componentWillReceiveProps(newProps){
//     //     const { type } = newProps
//     //     console.log('父组件render执行') /*  ① 监听父组件执行render  */
//     //     setTimeout(()=>{  /* ② 异步控制 props 改变 派生出 state 的修改  */
//     //         // switch(type){
//     //         //     case 'fruit' : 
//     //         //     this.setState({list:['苹果','香蕉','葡萄' ] }) 
//     //         //     break
//     //         //     case 'vegetables':
//     //         //     this.setState({list:['苹果','香蕉','葡萄' ] }) 
//     //         //     break
//     //         // }
//     //     },0)
        
//     // }
//     node = null
//     getSnapshotBeforeUpdate(){
//         const style = getComputedStyle(this.node)
//         return { /* 传递更新前的元素位置 */
//             cx:style.cx,
//             cy:style.cy
//         }
//     }
//     shouldComponentUpdate(newProps,newState){
//        if(newProps.a !== this.props.a ){ /* props中a属性发生变化 渲染组件 */
//            return true
//        }else if(newState.b !== this.props.b ){ /* state 中b属性发生变化 渲染组件 */
//            return true
//        }else{ /* 否则组件不渲染 */
//            return false
//        }
//     }
//     getData(){}
//     // componentDidUpdate(prevProps, prevState, snapshot){
//     //     /* 获取元素绘制之前的位置 */
//     //     console.log(snapshot)
//     // }
//     componentWillUnmount(){
//         clearTimeout(this.timer)  /* 清除延时器 */
//         this.node.removeEventListener('click',this.handerClick) /* 卸载事件监听器 */
//     }
//     async componentDidMount(){
//         this.node.addEventListener('click',()=>{
//             /* 事件监听 */
//         }) 
//         const data = await this.getData() /* 数据请求 */
//     }
    
//     render(){
//         console.log(' prop渲染')
//         return <div>
//             { this.state.list.map((item)=><li key={item} >{ item  }</li>) }
//             <div ref={ (node) => (this.node = node )}  >获取位置</div>
//         </div>
//     }
// }

// export default class Text extends React.Component{
//     state={
//         type: 'fruit',
//         mode:'Receive' , // Receive 模式 - componentWillReceiveProps   Derived 模式 ->  getDerivedStateFromProps,
//         number:1,
//     }
//     handleChange=()=>{
//         /* 模拟异步调用 */
//         setTimeout(()=>{
//             this.setState({ type : 'vegetables'   }) 
//         },0)
//     }
  
//     render(){
//         const { mode  ,number, type} = this.state
//         return <div>
//            <div>当前生命周期：{ mode === 'Receive' ? 'UNSAFE_componentWillReceiveProps' : 'getDerivedStateFromProps'   } </div>
//            { mode === 'Receive' ?  <Receive  type={ type } />  : <Derived type={ type }  />    }
//            <div>{ number }</div>
//            <button onClick={ ()=> this.setState({ number : this.state.number + 1 }) } >点击</button> <br/>
//            <button onClick={ ()=> this.setState({ mode : mode ==='Receive' ? 'Derived' : 'Receive' })   }  >切换模式</button>
//         </div>
//     }
// } 

// function FunctionLifecycle(props){
//     const [ num , setNum ] = useState(0)
//     React.useEffect(()=>{
//         /* 请求数据 ， 事件监听 ， 操纵dom  ， 增加定时器 ， 延时器 */
//         console.log('组件挂载完成：componentDidMount')
//         return function componentWillUnmount(){
//             /* 解除事件监听器 ，清除 */
//             console.log('组件销毁：componentWillUnmount')
//         }
//     },[])/* 切记 dep = [] */
//     React.useEffect(()=>{
//         console.log('props变化：componentWillReceiveProps')
//         return function (){
//             console.log('hahah')
//         }
//     },[ props ])
//     React.useEffect(()=>{ /*  */
//         console.log(' 组件更新完成：componentDidUpdate ')
//     })
//     return <div>
//         <div> props : { props.number } </div>
//         <div> states : { num } </div>
//         <button onClick={ ()=> setNum(state=>state + 1) }   >改变state</button>
//     </div>
// }

// export default ()=>{
//     const [ number , setNumber ] = React.useState(0)
//     const [ isRender , setRender ] = React.useState(true)
//     return <div>
//         { isRender &&  <FunctionLifecycle number={number}  /> }
//         <button onClick={ ()=> setNumber(state => state + 1 ) } > 改变props  </button> <br/>
//         <button onClick={()=> setRender(false) } >卸载组件</button>
//     </div>
// }


/* TODO:  useLayoutEffect 阻塞渲染 , useEffect 不阻塞渲染  */
// function FunctionLifecycle(){
//     React.useLayoutEffect(()=>{
//         const nowTime = new Date().getTime()
//         while(nowTime + 2000 > new Date().getTime()  ){
//         }
//     },[])
//     return <div>hello,world</div>
// }


// export default  function Index(){
//     const [ isRender , setRender ] = React.useState(false)
//     return <div>
//           { isRender &&  <FunctionLifecycle   /> }
//          <button onClick={()=> setRender(true) } >挂载组件</button>
//     </div>
// }


function Item({item}) {
    return  <div className="goods_item" >
        <img src={item.giftImage} className="item_image" />
        <div className="item_content" >
            <div className="goods_name" >
                {item.giftName}
            </div>
            <div className="hold_price" />
            <div className="new_price" >
                <div className="new_price" >
                    <div className="one view">
                        ¥ {item.price}
                    </div>
                </div>
            </div>
            <img className='go_share  go_text' />
        </div>
    </div>
}

import { listData } from '../../mock'
const fetchData = (page)=> {
  return new Promise((resolve)=>{
      resolve({
          ...listData,
          page,
          list:listData.list.slice( 5* (page -1) ,5 * page )
      })
  })
}


class ScrollView extends React.Component{
    /* -----自定义事件---- */
    /* 控制滚动条滚动 */
      handerScroll=(e)=>{
        const { scroll } = this.props
        scroll && scroll(e)
        this.handerScrolltolower()
    }
    /* 判断滚动条是否到底部 */
    handerScrolltolower(){
       const { scrolltolower } = this.props
       const { scrollHeight , scrollTop ,  offsetHeight } = this.node 
       if(scrollHeight === scrollTop + offsetHeight){ /* 到达容器底部位置 */
           scrolltolower && scrolltolower()
       }
    }
    node = null

    /* ---——---生命周期------- */
    constructor(props) {
        super(props)
        this.state={ /* 初始化 Data */
            list:[]
        }
        this.handerScrolltolower = debounce(this.handerScrolltolower,200) /* 防抖处理 */               
    }
    /* 接收props, 合并到state */
    static getDerivedStateFromProps(newProps){
        const { data } = newProps
        return { 
            list : data.list || [] ,
        }
    }
    /* 性能优化，只有列表数据变化，渲染列表 */
    shouldComponentUpdate(newProps,newState){
       return newState.list !== this.state.list
    }
    /* 获取更新前容器高度 */
    getSnapshotBeforeUpdate(){
        return this.node.scrollHeight
    }
    /* 获取更新后容器高度 */
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('scrollView容器高度变化:' , this.node.scrollHeight - snapshot  )
    }
    /* 绑定事件监听器 - 监听scorll事件 */
    componentDidMount() {
        this.node.addEventListener('scroll',this.handerScroll)
    }
    /* 解绑事件监听器 */
    componentWillUnmount(){
        this.node.removeEventListener('scroll',this.handerScroll)
    }
    render() {
        const { list } = this.state
        const { component } = this.props
        return <div className="list_box"  ref={(node) => this.node = node }  >
            <div >     
                {
                    list.map((item) => (
                        React.createElement(component,{ item , key: item.id  })
                    ))
                }
            </div>
        </div>
    }
}

export default function () { 
    const [ data , setData ] = useState({ list:[],page:0,pageCount:1  }) /* 记录列表数据 */
    /* 请求数据 */
    const getData = async ()=>{
        if(data.page === data.pageCount) return console.log('没有数据了～')
        const res = await fetchData(data.page + 1)
        if(res.code === 0) setData({
            ...res,
            list:res.page === 1 ?  res.list : data.list.concat(res.list) 
        })
    } 
    /* 滚动到底部触发 */
    const handerScrolltolower = () => {
        console.log('scroll已经到底部')
        getData()
    }
    /* 初始化请求数据 */
    useEffect(()=>{
        getData()
    },[])
    return <ScrollView 
            data={ data } 
            component={ Item }  /* Item 渲染的单元组件 */
            scrolltolower={ handerScrolltolower } 
            scroll={()=>{}} 
        />

}
