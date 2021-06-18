
import '../state/index.scss'
import './style.scss'

import React, { useState }  from 'react'

// const MyContext = React.createContext(null)

// function FatherComponent({ children }){
//     const newChildren = React.cloneElement(children, { age: 18})
//     return <div> { newChildren } </div>
// }

// function SonComponent(props){
//     console.log(props)
//     return <div>hello,world</div>
// }

// class Index extends React.Component{    
//     shouldComponentUpdate(){
//         this.render()
//         return true
//     }
//     render(){      
//         return <div className="box" >
//             <FatherComponent>
//                 <SonComponent name="alien"  />
//             </FatherComponent>
//         </div>   
//     }
// }

/* Input 组件, 负责回传value值 */
// function Input({ onChange , value }){
//     return  <input className="input"  onChange={ (e)=>( onChange && onChange(e.target.value) ) } value={value}  />
// }
/* 给Component 增加标签 */
// Input.__COMPONENT_TYPE = 'input'

// function FormItem(props){
//     const { children , name  , handleChange , value , label  } = props
//     const onChange = (value) => {
//         /* 通知上一次value 已经改变 */
//         handleChange(name,value)
//     }
//    return <div className='form' >
//        <span className="label" >{ label }:</span>
//        {
//             React.isValidElement(children) && children.type.__COMPONENT_TYPE === 'input' 
//             ? React.cloneElement(children,{ onChange , value })
//             : null
//        }
//    </div>
        
// }
// FormItem.__COMPONENT_TYPE = 'formItem'

// class Form extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     state={
//         formData:{}
//     }
//     /* 用于提交表单数据 */
//     submitForm=(cb)=>{
//         cb({ ...this.state.formData })
//     } 
//     /* 获取重置表单数据 */
//     resetForm=()=>{
//        const { formData } = this.state
//        Object.keys(formData).forEach(item=>{
//            formData[item] = ''
//        })
//        this.setState({
//            formData
//        })
//     }
//     /* 设置表单数据层 */
//     setValue=(name,value)=>{
//         this.setState({
//             formData:{
//                 ...this.state.formData,
//                 [name]:value
//             }
//         })
//     }
//     render(){
//         const { children } = this.props
//         const renderChildren = []
//         React.Children.forEach(children,(child)=>{
//             if(child.type.__COMPONENT_TYPE === 'formItem'){
//                 const { name } = child.props
//                 const Children = React.cloneElement(child,{ 
//                     key:name , 
//                     handleChange:this.setValue ,
//                     value:this.state.formData[name] ||  ''
//                 },child.props.children)
//                 renderChildren.push(Children)
//             }
//         })
//         return renderChildren
//     }
// }
// Form.__COMPONENT_TYPE = 'form'


// export default  () => {
//     const form =   React.useRef(null)
//     const submit =()=>{
//         /* 表单提交 */
//         form.current.submitForm((formValue)=>{
//             console.log(formValue)
//         })
//     }
//     const reset = ()=>{
//         /* 表单重置 */
//         form.current.resetForm()
//     }
//     return <div className='box' >
//         <Form ref={ form } >
//             <FormItem name="name" label="我是"  >
//                 <Input   />
//             </FormItem>
//             <FormItem name="mes" label="我想对大家说"  >
//                 <Input   />
//             </FormItem>
//             <input  placeholder="不需要的input" />
//         </Form>
//         <div className="btns" >
//             <button className="searchbtn"  onClick={ submit } >提交</button>
//             <button className="concellbtn" onClick={ reset } >重置</button>
//         </div>
//     </div>
// }


import ReactDOM from 'react-dom'

const { unstable_batchedUpdates } = ReactDOM

/* TODO:   */
export default class index extends React.Component{
    state = { number:0 }
    node = null
    handClick= () => {
        /* TODO:  setTimeout */
        setTimeout(()=>{
            this.setState({ number:this.state.number + 1 },()=>{  console.log( 'callback1', this.state.number)  })
            console.log(this.state.number)
            this.setState({ number:this.state.number + 1},()=>{   console.log( 'callback2', this.state.number)  })
            console.log(this.state.number)
            this.setState({ number:this.state.number + 1 },()=>{  console.log( 'callback3', this.state.number)  })
            console.log(this.state.number) 
        })
        /* TODO: 正常 */
        // this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
        // console.log(this.state.number)
        // this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback2', this.state.number)  })
        // console.log(this.state.number)
        // this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
        // console.log(this.state.number)

        // this.setState({ number:1 },()=>{
        //     console.log('callback',this.state.number)
        //     console.log(this.node.innerHTML)
        // })
        
        /*  */
        // setTimeout(()=>{
        //     this.setState({ number: 1  },()=>{ console.log('setTimeout',this.state.number) })
        // })
        // this.setState({ number: 2  },()=>{ console.log(`callback1`,this.state.number) })
        // ReactDOM.flushSync(()=>{
        //     this.setState({ number: 3  },()=>{ console.log( 'flushSync' , this.state.number  )  })
        // })
        // this.setState({ number: 4  },()=>{  console.log(`callback2`,this.state.number)  })
    }
    render(){
        // console.log(this.state.number)
        return <div>
            <span  ref={ (node)=> (this.node = node)}   > { this.state.number }</span>
            <button onClick={ this.handClick }  >number++</button>
        </div>
    }
}

/* TODO: 监听 state 变化 */
// export default function Index(props){
//     const [ number , setNumbsr ] = React.useState(0)
//     React.useEffect(()=>{
//         // console.log('监听number变化，此时的number是:  ' + number )
//     },[ number ])
//     const handerClick = ()=>{
//         ReactDOM.flushSync(()=>{
//             setNumbsr(2) 
//             console.log(number)
//         })
//         setNumbsr(1) 
//         console.log(number)
//         setTimeout(()=>{
//             setNumbsr(3) 
//             console.log(number)
//         })
       
//     }
   
// const handerClick=()=>{
//    setNumbsr((state)=> state + 1)  // state - > 1 
//    setNumbsr(8)  // state - > 8
//    setNumbsr((state)=> state + 1)  // state - > 9
// }
//     return <div>
//         <span> { number }</span>
//         <button onClick={ handerClick }  >number++</button>
//     </div>
// }


// export default function Index(){
//     const [ state  , dispatchState ] = useState({ name:'alien' })
//     const  handerClick = ()=>{
//         state.name = 'Alien'
//         dispatchState({ ...state})
//     }
//     return <div>
//          <span> { state.name }</span>
//         <button onClick={ handerClick }  >changeName++</button>
//     </div>
// }