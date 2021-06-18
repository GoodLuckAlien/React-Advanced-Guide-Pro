import React, { useEffect, useRef, useState } from 'react'


import './index.scss'


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
            <span  ref={(node)=> (this.node = node)}   > {this.state.number}</span>
            <button onClick={this.handClick}  >number++</button>
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
