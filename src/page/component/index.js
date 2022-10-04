/* eslint-disable react/no-multi-comp */
//todo
import React, { useState }   from 'react'
import './index.less'



// function  Son (props,ref) {
//     console.log(props)
//     const inputRef :any= useRef(null)
//     const [ inputValue , setInputValue ] = useState('')
//     useDebugValue(inputValue)
//     useImperativeHandle(ref,()=>{
//        const handleRefs = {
//            /* 声明方法用于聚焦input框 */
//            onFocus(){
//               inputRef.current.focus()
//            },
//            /* 声明方法用于改变input的值 */
//            onChangeValue(value){
//                setInputValue(value)
//            }
//        }
//        return handleRefs
//     },[])
//     return <div>
//         <input
//             placeholder="请输入内容"
//             ref={inputRef}
//             value={inputValue}
//         />
//     </div>
// }

// const ForwarSon = forwardRef(Son)


// class Index extends React.Component{
//     cur :any= null
//     handerClick(){
//        const { onFocus , onChangeValue } =this.cur
//        onFocus()
//        onChangeValue('let us learn React!')
//     }
//     render(){
//         return <div style={{ marginTop:'50px' }} >
//             <ForwarSon ref={cur => (this.cur = cur)} />
//             <button onClick={this.handerClick.bind(this)} >操控子组件</button>
//         </div>
//     }
// }

// class Index extends React.Component{
//     node :any= null
//     handerClick=(value)=>{
//         console.log(value)
//     }
//     handerChange=()=>{
//         console.log(1111)
//     }
//     render(){
//         return <div className='container'  style={{ marginTop : '50px' }}  >
//             <span onClick={ this.handerClick } ref={(node)=> (this.node = node ) }  > 点击 </span>
//             <input onChange={ this.handerChange }  />
//         </div>
//     }
// }
// console.log(555)

// class Index extends React.Component{
//     componentDidMount(){
//         console.log(this)
//     }
//     handerClick= (value) => console.log(value) 
//     handerChange=(value) => console.log(value)
//     render(){
//         return <div style={{ marginTop:'50px' }} >
//             <button onClick={ this.handerClick } > 按钮点击 </button>
//             <input  placeholder="请输入内容" onChange={ this.handerChange }  />
//         </div>
//     }
// }

/* 类 */
// class textClass {
//     sayHello=()=>console.log('hello, my name is alien')
// }
// /* 类组件 */
// class Index extends React.Component{
//     state={ message:`hello ，world!` }
//     sayHello=()=> this.setState({ message : 'hello, my name is alien' })
//     render(){
//         return <div style={{ marginTop:'50px' }} onClick={ this.sayHello } > { this.state.message }  </div>
//     }
// }
// /* 函数 */
// function textFun (){ 
//     return 'hello, world'
// }
// /* 函数组件 */
// function FunComponent(){
//     const [ message , setMessage ] = useState('hello,world')
//     return <div onClick={ ()=> setMessage('hello, my name is alien')  } >{ message }</div>
// }

// class Index extends React.Component{
//     constructor(...arg){
//        super(...arg)                        /* 执行 react 底层 Component 函数 */
//     }
//     static = { }                            /* state */
//     static number = 1                       /* 内置静态属性 */
//     handerClick= () => console.log(111)     /* 箭头函数方法直接绑定在this实例上 */
//     componentDidMount(){                    /*  */
//         console.log(Index.number,Index.number1)
//     }
//     render(){                               /* 渲染函数 */
//         return <div style={{ marginTop:'50px' }} onClick={ this.handerClick }  >hello,React!</div>
//     }
// }
// Index.number1 = 2 /* 外置静态属性 */
// Index.prototype.handerClick = ()=> console.log(222) /* 绑定在 Index 原型链的 方法*/

/* TODO: props + callback */
// /* 子组件 */
// function Son(props){
//     const {  fatherSay , sayFather  } = props
//     return <div className='son' >
//          我是子组件
//         <div> 父组件对我说：{ fatherSay } </div>
//         <input placeholder="我对父组件说" onChange={ (e)=>sayFather(e.target.value) }   />
//     </div>
// }
// /* 父组件 */
// function Father(){
//     const [ childSay , setChildSay ] = useState('')
//     const [ fatherSay , setFatherSay ] = useState('')
//     return <div className="box father" >
//         我是父组件
//        <div> 子组件对我说：{ childSay } </div>
//        <input placeholder="我对子组件说" onChange={ (e)=>setFatherSay(e.target.value) }   />
//        <Son fatherSay={fatherSay}  sayFather={ setChildSay }  />
//     </div>
// }



// /* TODO:event Bus  */
// import { BusService } from './eventBus'
// function Son(){
//     const [ fatherSay , setFatherSay ] = useState('')
//     React.useEffect(()=>{
//         BusService.on('fatherSay',(value)=>{
//             setFatherSay(value)
//        })
//        return function(){  BusService.off('fatherSay') /* 解绑事件 */ }
//     },[])
//     return <div className='son' >
//          我是子组件
//         <div> 父组件对我说：{ fatherSay } </div>
//         <input placeholder="我对父组件说" onChange={ (e)=> BusService.emit('childSay',e.target.value)  }   />
//     </div>
// }
// /* 父组件 */
// function Father(){
//     const [ childSay , setChildSay ] = useState('')
//     React.useEffect(()=>{ /* 事件绑定 */
//         BusService.on('childSay',(value)=>{
//              setChildSay(value)
//         })

//     },[])
//     return <div className="box father" >
//         我是父组件
//        <div> 子组件对我说：{ childSay } </div>
//        <input placeholder="我对子组件说" onChange={ (e)=> BusService.emit('fatherSay',e.target.value) }   />
//        <Son  />
//     </div>
// }

// /* TODO:  继承 */
// /* 人类 */
// class Person extends React.Component{
//     constructor(props){
//         super(props)
//         console.log('hello , i am person')
//     }
//     componentDidMount(){ console.log(1111)  }
//     eat(){    /* 吃饭 */ }
//     sleep(){  /* 睡觉 */  }
//     ddd(){   console.log('打豆豆')  /* 打豆豆 */ }
//     render(){
//         return <div>
//             大家好，我是一个person
//         </div>
//     }
// }
// /* 程序员 */
// class Programmer extends Person{
//     constructor(props){
//         super(props)
//         console.log('hello , i am Programmer too')
//     }
//     componentDidMount(){  console.log(this)  }
//     code(){ /* 敲代码 */ }
//     render(){
//         return <div style={ { marginTop:'50px' } } >
//             { super.render() }
//             我还是一个程序员！
//         </div>
//     }
// }

/* TODO: 组件插槽 */
// const Children = (props)=> (<div>
//     <div>hello, my name is {  props.name } </div>
//     <div> { props.mes } </div>
// </div>)


// function  Container(props) {
//     const ContainerProps = {
//         name: 'alien',
//         mes:'let us learn react'
//     }
//      return props.children.map(item=>{
//         if(React.isValidElement(item)){ // 判断是 react elment 混入 props
//             return React.cloneElement(item,{ ...ContainerProps },item.props.children)
//         }else if(typeof item === 'function'){
//             return item(ContainerProps)
//         }else return null
//      })
// }

// const Index = ()=>{
//     return <Container>
//         <Children />
//         { (ContainerProps)=> <Children {...ContainerProps} name={'haha'}  />  }
//         { '这个不需要' }
//     </Container>
// }


/* flushSync */
import ReactDOM from 'react-dom'
// class Index extends React.Component{
//     state={ number:0 }
//     handerClick=()=>{
//         setTimeout(()=>{
//             this.setState({ number: 1  })
//         })
//         this.setState({ number: 2  })
//         ReactDOM.flushSync(()=>{
//             this.setState({ number: 3  })
//         })
//         this.setState({ number: 4  })
//     }
//     render(){
//         const { number } = this.state
//         console.log(number) // 打印什么？？
//         return <div>
//             <div>{ number }</div>
//             <button onClick={this.handerClick} >测试flushSync</button>
//         </div>
//     }
// }

// Index.displayName = 'hello_asdw2222'

// const Home = ({ children })=>{
//     console.log( children.type.displayName )
//     return <div>{children}</div>
// }



// export default () => <Home><Index/></Home>

function Index(){
    const [ number , setNumber ] = useState(0)
    return <div>
        {/* { number }
        <button onClick={()=>setNumber(22)} >点击</button> */}
        hello.world
    </div>
}

export default Index
