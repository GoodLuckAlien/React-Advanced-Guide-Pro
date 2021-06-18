import React from 'react'



// function ChidrenComponent(){
//     return <div> In this chapter, let's learn about react props ! </div>
// }

// class PropsComponent extends React.Component{
//     componentDidMount(){
//         console.log(this,'_this')
//     }
    
//     render(){
//         setTimeout(()=>{
//             console.log(this,'_this')
//         },100)
//         const {  children , mes , renderName , say ,Component } = this.props
//         return <div>
//             { children[0]() }
//             {mes}
//             { renderName() }
//             { children[1] }
//             <Component />
//             <button onClick={ () => say() } > change content </button>
//         </div>
//     }
// }

// class Index extends React.Component{
//     state={  
//         mes: "hello,React"
//     }
//     node = null
//     say= () =>  this.setState({ mes:'let us learn React!' })
//     render(){
//         return <div>
//             <PropsComponent  
//                mes={this.state.mes}
//                say={ this.say  } 
//                Component={ ChidrenComponent }
//                renderName={ ()=><div> my name is alien </div> }
//             >
//                 { ()=> <div>hello,world</div>  }
//                 <ChidrenComponent />
//             </PropsComponent>
//         </div>
//     }
// }

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
function Son(props){
     console.log(props) // {name: "alien", age: "28", mes: "let us learn React !"}
     return <div> hello,world </div>
}
function Father(prop){
    return React.cloneElement(prop.children,{  mes:'let us learn React !' })
}
function Index(){
    return <Father>
        <Son  name="alien"  age="28"  />
    </Father>
}

export default Index
