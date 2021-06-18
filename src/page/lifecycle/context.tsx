// import React ,{ version ,SuspenseList }  from 'react'


// import { SyncOutlined } from '@ant-design/icons' 
// import './style.scss'

// // import Text from './comText'


// const MyContext = React.createContext()

// function ComponentB(){
//     /* 用 Consumer 订阅， lai ci */
//     return <MyContext.Consumer>
//         { (value) => <ComponentA  {...value} /> }
//     </MyContext.Consumer>
// }

// function ComponentA(props){
//     const { name , mes } = props
//     return <div> 
//             <div> 姓名： { name }  </div>
//             <div> 想对大家说： { mes }  </div>
//          </div>
// }

// function index(){
//     const [ value , setValue ] = React.useState({
//         name:'alien',
//         mes:'let us learn React '
//     })
//     return <div style={{ marginTop:'50px' }} >
//         <MyContext.Provider value={value}  >
//          <button onClick={ ()=>setValue({ ...value, mes:'hello,world' }) }  >改变Value</button>
//         { React.useMemo(() => <ComponentB /> ,[]) }
//     </MyContext.Provider>
//     </div>
// }
// export default index 