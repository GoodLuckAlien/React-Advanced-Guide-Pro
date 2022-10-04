import React, { useContext } from 'react'

import { Route,Switch ,useHistory ,Redirect ,withRouter ,useLocation  } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// function RouteComponent(props){
//     console.log(props)
//     return <div> Route Component形式 </div>
// }

// function RouterRender(props){
//     console.log(props)
//     return <div> Route render形式 </div>
// }

// function RouterChildren(props){
//     console.log(props)
//     return <div>Route children形式</div>
// }

// function RouterRenderProps(props){
//     console.log(props)
//     return <div>Route RenderProps形式</div>
// }
// function Home(props){
//     console.log(props)
//     return <div> Route Component形式 </div>
// }

// function List(props){
//     console.log(props)
//     return <div> Route render形式 </div>
// }

// function detail(props){
//     console.log(props)
//     return <div>Route children形式</div>
// }

// function personal(props){
//     console.log(props)
//     return <div>Route RenderProps形式</div>
// }

// const menusList = [
//     {
//         name: '首页',
//         path: '/router/component',  
//         component:RouteComponent,
//         exact:true
//     },
//     {
//         name: '列表页',
//         path: '/router/render',  
//         render:()=><RouterRender />
//     },
//     {
//         name: '详情页',
//         path: '/router/children',  
//         component:RouterChildren
//     },
//     {
//         name: '我的',
//         path:'/router/renderProps',
//         component:RouterRenderProps
//     }
// ] 

// function Meuns(){
//     const history = useHistory()
//     const path = history.location.pathname
//      return <div className="theStyle" >
//      { menusList.map(item=><span className="routerLink" style={{ color:path === item.path ? '#0366d6'  : '#000'  }}  onClick={()=> {  history.push(item.path) } }  key={item.path}  >{ item.name }</span>) }
//       <span onClick={ ()=> history.push('/router/component/1') } >点击</span>
//     </div>
//   }
// TODO:正常写法
// function Index(){ 
//     const mes = { name:'alien',say:'let us learn React!' }
//     return <div>      
//         <Meuns/>
        
//         <Switch>
           
//             <Route path='/router/component/:id' exact  component={RouteComponent}  />
//             <Route path='/router/render'  render={(props)=> <RouterRender { ...props } {...mes}  /> }  />
//             <Route path='/router/children'  >
//                 <RouterChildren {...mes} />
//             </Route>
//             <Route path="/router/renderProps"  >
//                 { (props)=> <RouterRenderProps {...props} {...mes}  />  }
//             </Route>
//             <Redirect to={'/router/component'} from={'/router/*'}  />
//         </Switch>
//     </div>
// }

// TODO: renderRoutes 写法
// function Index(){
//     return <div>
//         <Meuns/>
//         { renderRoutes(menusList) }
//     </div> 
// }



// TODO: 动态路由

// function Test(){
//     return <div>test</div>
// }

// function Test1(){
//     return <div>test1</div>
// }

// function Home(){
//     return <div>
//         <Route path='/home/test' component={Test}   />
//         <Route path='/home/test1' component={Test1}  />
//     </div>
// }

// function List(){
//     return <div>列表</div>
// }

// function My(){
//     return <div>My</div>
// }

// function Index(){
//     return <Switch>
//         <Route path="/home" component={Home}  />
//         <Route path="/list" component={List}  />
//         <Route path="/my" component={My}  />
//     </Switch>
// }


// TODO: 自定义路由
// function CustomRouter(props){
//     const permissionList = useContext(permissionContext) /* 获取权限列表 */
//     const haspermission = matchPermission(permissionList,props.path)  /* 获取是否具权限 */
//     return haspermission ? <Route  {...props}  /> : <Redirect  to="/noPermission" />
// }



export default ()=>{
    return <div></div>
}