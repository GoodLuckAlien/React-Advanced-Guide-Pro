/* eslint-disable react/no-multi-comp */
import React ,{ useState } from 'react'



function ChidrenComponent(){
    return <div> In this chapter, let's learn about react props ! </div>
}

class PropsComponent extends React.Component{
    componentDidMount(){
        console.log(this,'_this')
    }

    render(){
        setTimeout(()=>{
            console.log(this,'_this')
        },100)
        const {  children , mes , renderName , say ,Component } = this.props
        return <div>
            {children[0]()}
            {mes}
            {renderName()}
            {children[1]}
            <Component />
            <button onClick={() => say()} > change content </button>
        </div>
    }
}

export default class Index extends React.Component{
    state={
        mes: 'hello,React'
    }
    node = null
    say= () =>  this.setState({ mes:'let us learn React!' })
    render(){
        return <div>
            <PropsComponent
                Component={ChidrenComponent}
                mes={this.state.mes}
                renderName={()=><div> my name is alien </div>}
                say={this.say}
            >
                {()=> <div>hello,world</div>}
                <ChidrenComponent />
            </PropsComponent>
        </div>
    }
}

// function Son(){
//     const
//     return <div></div>
// }

// function Father(){
//     /* setNumber 作为回调杉树 */
//     const [ number ,setNumber ] = React.useState(0)
//     return <div>
//         <Son
//         changeNumer={setNumber}
//         mes="hello,wrold"
//         />
//          { number }
//     </div>
// }


/* TODO:  */
// function Son(props){
//     console.log(props)
//     return <div> hello,world </div>
// }

// function Father(props){
//     const { age,...fatherProps  } = props
//     return <Son  { ...fatherProps }  />
// }
// function Index(){
//     const indexProps = {
//         name:'alien',
//         age:'28',
//         mes:'let us learn React !'
//     }
//     return <Father { ...indexProps }  />
// }


/** TODO: 隐式混入 */
// function Son(props){
//      console.log(props) // {name: "alien", age: "28", mes: "let us learn React !"}
//      return <div> hello,world </div>
// }
// function Father(prop){
//     return React.cloneElement(prop.children,{  mes:'let us learn React !' })
// }
// function Index(){
//     return <Father>
//         <Son  name="alien"  age="28"  />
//     </Father>
// }


// export default Index

// import '../state/index.scss'
// import './style.scss'

// const MyContext = React.createContext(null)

// function FatherComponent({ children }){
//     const newChildren = React.cloneElement(children, { age: 18})
//     return <div> {newChildren} </div>
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

// /* Input 组件, 负责回传value值 */
// function Input({ onChange , value }){
//     return  <input className="input"
//         onChange={(e)=>( onChange && onChange(e.target.value) )}
//         value={value}
//             />
// }
// /* 给Component 增加标签 */
// Input.__COMPONENT_TYPE = 'input'

// function FormItem(props){
//     const { children , name  , handleChange , value , label  } = props
//     const onChange = (value) => {
//         /* 通知上一次value 已经改变 */
//         handleChange(name,value)
//     }
//    return <div className="form" >
//        <span className="label" >{label}:</span>
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
//             console.log(child)
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
//     return <div className="box" >
//         <Form ref={form}>
//             <FormItem label="我是"
//                 name="name"
//             >
//                 <Input />
//             </FormItem>
//             <FormItem label="我想对大家说"
//                 name="mes"
//             >
//                 <Input />
//             </FormItem>
//             <input placeholder="不需要的input"/>
//             <Input />
//         </Form>
//         <div className="btns" >
//             <button className="searchbtn"
//                 onClick={submit}
//             >提交</button>
//             <button className="concellbtn"
//                 onClick={reset}
//             >重置</button>
//         </div>
//     </div>
// }


