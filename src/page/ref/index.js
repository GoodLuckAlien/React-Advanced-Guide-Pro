import React from 'react'



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

// TODO: ref原理
export default class Index extends React.Component{
    state={ num:0 }
    node = null
    render(){
        return <div >
            <div ref={(node)=>{
               this.node = node
               console.log('此时的参数是什么：', this.node )
            }}  >ref元素节点</div>
            <button onClick={()=> this.setState({ num: this.state.num + 1  }) } >点击</button>
        </div>
    }
}