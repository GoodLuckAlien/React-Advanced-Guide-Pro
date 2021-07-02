import React from 'react'
import {  Provider, observer ,inject } from 'mobx-react'

import '../react-redux/index.scss'
/*  TODO: 状态管理 */
// import Root from './mobx'
// export default function Index(){
//     return <Provider Root={Root} >
//         <Child />
//     </Provider>
// }

// const getUserInfo = () => {
//    return new Promise((resolve=>{
//             setTimeout(()=>{resolve({ name:'alien', mes:'let us learn React!'})
//        },1000)
//    }))
// }
// @inject('Root')
// @observer
// class Child extends React.Component{
//     async componentDidMount(){
//        /*  模拟数据交互 */
//        const res = await getUserInfo()
//        this.props.Root.setInfo(res)
//     }
//     render(){
//         const { info } = this.props.Root
//         return <div className="box" >
//             <p> 姓名：{info.name} </p>
//             <p> 想对大家说：{info.mes} </p>
//         </div>
//     }
// }



/*TODO: 组件通信 */
import Root from './root'
import Communi from './communication'
export default function Index(){
    return <Provider Communi={Communi}
        Root={Root}
           >
        <ComponentA />
        <ComponentB />
    </Provider>
}

@inject('Communi')
@observer
class ComponentA extends React.Component{
    state={
        CompAsay:''
    }
    render(){
        const { CompAsay } = this.state
        const { mesB   } = this.props.Communi
        return <div className="box pt50" >
        <p>我是组件A</p>
        <div> B组件对我说：{mesB} </div>
            我对B组件说：
            <input onChange={(e) => this.setState({ CompAsay :e.target.value })}
                placeholder="CompAsay"
            />
        <button onClick={() => this.props.Communi.setMesA(CompAsay)} >确定</button>
        <button onClick={()=>{ this.props.Communi.setMes('alien')  }} >改变名称</button>
        <button onClick={()=>{ this.props.Communi.setInfo({ name:'xxx'  })  }} >改变名称</button>
      </div>
    }
}




@inject('Communi')
@observer
class ComponentB extends React.Component{
   state={
      compBsay:''
   }
   componentDidMount(){
       console.log(this.props)
   }
   render(){
       console.log('重新渲染')
       const { compBsay } = this.state
       const {  mesA , object  } = this.props.Communi
       return <div className="box" >
            <p> 名称：{object.name} </p>
            <p>我是组件B</p>
           <div> A组件对我说：{mesA} </div>
           我对A组件说：
           <input onChange={(e) => this.setState({ compBsay :e.target.value })}
               placeholder="CompAsay"
           />
            <button onClick={() => this.props.Communi.mesB = compBsay} >确定</button>
       </div>
   }
}