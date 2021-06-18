import React   from 'react'
import './style.scss'
import alien from '../../assets/images/alien.png'


// function Son (props){
//     const { grandRef } = props
//     return <div>
//         <div> i am alien </div>
//         <span ref={grandRef} >这个是想要获取元素</span>
//     </div>
// }

// class Father extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return <div>
//             <Son grandRef={this.props.grandRef}  />
//         </div>
//     }
// }

// const NewFather = React.forwardRef((props,ref)=><Father grandRef={ref}  {...props}    />  )

// class GrandFather extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     node = null 
//     componentDidMount(){
//         console.log(this.node)
//     }
//     render(){
//         return <div>
//             <NewFather ref={(node)=> this.node = node } />
//         </div>
//     }
// }

// export default GrandFather


class Index extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('--componentDidMount--')
    }
    render(){
        return <div>
            <img src={alien}  className="alien" />
        </div>
    }
}

export default Index



// export function debounce(fn, time) {
//     let timer = null;
//     return function(...arg) {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn.apply(this, arg);
//       }, time);
//     };
// }



