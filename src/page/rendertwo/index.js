import React ,{ Suspense } from 'react'


// let testPromise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve(111)
//     },1000)
// })

// testPromise.then(res=>{
//     console.log(res)
// })

// Promise.resolve(testPromise).then(res=>{
//     //  第二次渲染
// })


// TODO: React.lazy + susponse 实践
// const LazyComponent = React.lazy(() => import('./text'))
// /**
//  * 
//  * @param {*} Component  需要异步数据的component 
//  * @param {*} api        请求数据接口,返回Promise，可以再then中获取与后端交互的数据
//  * @returns 
//  */
// function AysncComponent(Component,api){
//     const AysncComponentPromise = () => new Promise(async (resolve)=>{
//           const data = await api()
//           resolve({
//               default: (props) => <Component rdata={data} { ...props}  />
//           })
//     })
//     return React.lazy(AysncComponentPromise)
// }

// /* 数据模拟 */
// const getData=()=>{
//     return new Promise((resolve)=>{
//         //模拟异步
//         setTimeout(() => {
//              resolve({
//                  name:'alien',
//                  say:'let us learn React!'
//              })
//         }, 1000)
//     })
// }

// /* 测试异步组件 */
// function Test({ rdata  , age}){
//     const { name , say } = rdata
//     console.log('组件渲染')
//     return <div>
//         <div> hello , my name is { name } </div>
//         <div>age : { age } </div>
//         <div> i want to say { say } </div>
//     </div>
// }


// export default class Index extends React.Component{
//     LazyTest = AysncComponent(Test,getData)
//     render(){
//         const { LazyTest } = this
//         return <div>
//            <Suspense fallback={<div>loading...</div>} >
//               <LazyTest age={18}  />
//           </Suspense>
//         </div>
//     }
// }

function ErrorTest(){
    return 
}
function Test(){
    return <div>let us learn React!</div>
}

function uploadErrorLog(){}

 class Index extends React.Component{
   state={
       hasError:false
   }  
   static getDerivedStateFromError(){
       return { hasError:true }
   }
   render(){  
      const { hasError } =this.state
      return <div>
          {  hasError ? <ErrorTest /> : <div>组件出现错误</div>  }
          <div> hello, my name is alien! </div>
          <Test />
      </div>
   }
}

export default function home (){
    return <div>
        iam a
        <Index/>
    </div>
}
