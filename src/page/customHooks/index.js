/* eslint-disable react/no-multi-comp */
import React, { useCallback, useState } from 'react'


import useLog , { LogContext } from './hooks/useLog'

/* TODO:  记录状态 */
// function useRenderCount(){
//     const isFirstRender = React.useRef(true) /* 记录是否是第一次渲染 */
//     const renderCount = React.useRef(1) /* 记录渲染次数 */
//     useEffect(()=>{
//         isFirstRender.current = false
//     },[])
//     useEffect(()=>{
//         if(!isFirstRender.current) renderCount.current++
//     })
//     return [ renderCount.current , isFirstRender.current ]
// }

// /* 记录函数组件执行次数，是否第一次渲染 */
// export default function Index(){
//     const [  ,forceUpdate ] = React.useState()
//     const [ count , isFirst  ] = useRenderCount()
//     console.log(count,isFirst)
//     return <div>
//          《React进阶实践指南》 上线啦
//          <button  onClick={()=> forceUpdate({}) }  >点击</button>
//     </div>
// }


/* TODO: 改变状态 */
// export function debounce(fn, time) {
//     let timer = null;
//     return function(...arg) {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn.apply(this, arg);
//       }, time);
//     };
// }

// function useDebounceState(defauleValue,time){
//     const [ value , changeValue ] = useState(defauleValue)
//     const newChange = React.useMemo(()=> debounce(changeValue,time) ,[ time ])
//     return [ value , newChange ]
// }

// export default function Index(){
//     const [ value , setValue ] = useDebounceState('',300)
//     console.log(value)
//     return <div style={{ marginTop:'50px' }} >
//         《React 进阶实践指南》
//         <input placeholder="" onChange={(e)=>setValue(e.target.value)}  />
//     </div>
// }

/* TODO: 同步 state  */
// function useAsyncState(defaultValue){
//    const value = React.useRef(defaultValue)
//    const [ ,forceUpdate ] = React.useState(null)
//    const dispatch = (fn) => {
//        let newValue
//        if( typeof fn === 'function' ){
//             newValue = fn(value.current)
//        }else{
//            newValue = fn
//        }
//        value.current = newValue
//        forceUpdate({}) /* 强制更新 */
//    }
//    return [  value , dispatch  ]
// }


// export default function Index(){
//     const [ data , setData  ] = useAsyncState(0)
//     return <div style={{ marginTop:'50px' }} >
//         《React 进阶实践指南》 点赞 👍 { data.current }
//        <button onClick={ ()=> {
//            setData(num => num + 1)
//            console.log(data.current)
//        } } >点击</button>
//     </div>
// }

/* TODO: 操纵原生dom  */
// function useGetDOM(){
//     const dom = React.useRef()
//     React.useEffect(()=>{
//        /* 做一些基于 dom 的操作 */
//        console.log(dom.current)
//     },[])
//     return dom
// }

// export default function Index(){
//     const dom = useGetDOM()
//     return <div ref={dom} >
//         《React进阶实践指南》
//         <button >点赞</button>
//     </div>
// }




/* TODO: demo1 -- useLog */
 function Home(){
     console.log('渲染次数')
    const [ dom , reportMessage  ] = useLog()
    return <div>
        {/* 监听内部点击 */}
        <div ref={dom} >
            <p> 《React进阶实践指南》</p>
            <button> 按钮 one   (内部点击) </button>
            <button> 按钮 two   (内部点击) </button>
            <button> 按钮 three (内部点击)  </button>
        </div>
        {/* 外部点击 */}
        <button  onClick={()=>{ console.log(reportMessage)  }} > 外部点击 </button>
    </div>
}

const Index = React.memo(Home)

export default function Root(){
    const [ value , setValue ] = useState({})
    const [ number , setNumber ] = useState(1)
    return  <LogContext.Provider value={value} >
        <Index  />
        <button onClick={()=> setValue({ name:'《React进阶实践指南》' , author:'我不是外星人'  })} >点击</button>
        <button onClick={()=> setNumber(number+1)} >点击</button>
    </LogContext.Provider>
}

/* TODO: 执行副作用 */
// function useEffectProps(value,cb){
//     const isMounted = React.useRef(false)
//     /* 防止第一次执行 */
//     React.useEffect(()=>{
//        (isMounted.current && cb) && cb()
//     },[ value ])
//     React.useEffect(()=>{
//         isMounted.current = true
//    },[])
// }

// function Index(props){
//     /* 监听 a 变化 */
//     useEffectProps( props.a ,()=>{
//         console.log('props a 变化:', props.a  )
//     } )
//     return <div>子组件</div>
// }

// export default function Home(){
//     const [ a , setA ] = React.useState(0)
//     const [ b , setB ] = React.useState(0)
//     return <div>
//         <Index a={a}
//             b={b}
//         />
//         <button onClick={()=> setA(a+1)} >改变 props a  </button>
//         <button onClick={()=> setB(b+1)} >改变 props b  </button>
//     </div>
// }

/* 模拟数据请求 */
// function requestData({ page,query }){

// }



/* TODO:  useTable */
// const columns = [
//     {
//          title: '商品名称',
//          dataIndex: 'id',
//          key: 'giftName'
//     },
//     {
//          title: '价格',
//          dataIndex: 'price',
//          key: 'price'
//      },
//      {
//          title:'图片',
//          dataIndex:'giftImage',
//          key:'giftImage',
//          render:(text)=> <div>
//              <img src={text}
//                  style={{ width:'70px' , height:'70px' }}
//              />
//          </div>
//      }
//  ]

//  const inputStyle = { width:'200px',marginRight:'24px'  }


// import { listData } from '../../mock'
// import useQueryTable from './hooks/useQueryTable'
// import { Table , Input , Select } from 'antd'

// const Option = Select.Option

// function threeNumberRandom(){
//     const result = []
//     while(result.length < 3){
//         const number = parseInt( Math.random() * 9 )
//         if(result.indexOf(number) === -1) result.push(number)
//     }
//     return result
// }


/* 模拟数据请求 */
// function getTableData(payload){
//     return new Promise((resolve)=>{
//         Promise.resolve().then(()=>{
//             const { list } = listData
//              // 生成三个随机数 模拟数据交互
//             const arr = threeNumberRandom()
//             console.log('请求参数：',payload)
//             resolve({
//                 ...listData,
//                 list:[ list[arr[0]],list[arr[1]],list[arr[2]] ],
//                 total:list.length,
//                 current:payload.page || 1
//             })
//         })
//     })
// }

// function Index (){
//     const [ table,form ] = useQueryTable({ pageSize:3 },getTableData)
//     const { formData ,setFormItem , reset  } = form
//     const { pagination , tableData , getList  , handerChange } = table
//     const submit = () => {
//         console.log(formData)
//         getList()
//     }
//     return <div style={{ margin:'30px' }} >
//         <div style={{ marginBottom:'24px' }} >
//             <Input onChange={(e)=> setFormItem('name',e.target.value)}
//                 placeholder="请输入名称"
//                 style={inputStyle}
//                 value={formData.name || ''}
//             />
//              <Input onChange={(e)=> setFormItem('price',e.target.value)}
//                  placeholder="请输入价格"
//                  style={inputStyle}
//                  value={formData.price || ''}
//              />
//              <Select onChange={(value) => setFormItem('type',value)}
//                  placeholder="请选择"
//                  style={inputStyle}
//                  value={formData.type}
//              >
//                  <Option value="1" >家电</Option>
//                  <Option value="2" >生活用品</Option>
//              </Select>
//             <button className="searchbtn"
//                 onClick={submit}
//             >提交</button>
//              <button className="concellbtn"
//                  onClick={reset}
//              >重置</button>
//         </div>
//         {useCallback( <Table
//             columns={columns}
//             dataSource={tableData.list}
//             height="300px"
//             onChange={(res)=>{ handerChange(res.current,res.pageSize) }}
//             pagination={{ ...pagination, total: tableData.total ,current:tableData.current }}
//             rowKey="id"
//                       />,[tableData])}
//     </div>
// }

// export default Index

/* TODO:  */

// import { ReduxContext , useConnect , useCreateStore } from './hooks/useRedux'
// import './style.scss'

// function CompA(){
//     const [ value ,setValue ] = useState('')
//     const [state ,dispatch ] = useConnect((state)=> ({ mesB : state.mesB }) )
//     return <div className="component_box" >
//         <p> 组件A</p>
//         <p>组件B对我说 ： {state.mesB} </p>
//         <input onChange={(e)=>setValue(e.target.value)}
//             placeholder="对B组件说"
//         />
//         <button onClick={()=> dispatch({ type:'setA' ,payload:value })} >确定</button>
//     </div>
// }

// function CompB(){
//     const [ value ,setValue ] = useState('')
//     const [state ,dispatch ] = useConnect((state)=> ({ mesA : state.mesA }) )
//     return <div className="component_box" >
//         <p> 组件B</p>
//         <p>组件A对我说 ： {state.mesA} </p>
//         <input onChange={(e)=>setValue(e.target.value)}
//             placeholder="对A组件说"
//         />
//         <button onClick={()=> dispatch({ type:'setB' ,payload:value })} >确定</button>
//     </div>
// }

// function CompC(){
//     const [state  ] = useConnect((state)=> ({ mes1 : state.mesA,mes2 : state.mesB }) )
//     return <div className="component_box" >
//         <p> 组件C</p>
//         <p>组件A内容 ： {state.mes1} </p>
//         <p>组件Bnei ： {state.mes2} </p>
//     </div>
// }

// function CompD(){
//     const [ ,dispatch  ] = useConnect( )
//     console.log('D 组件更新')
//     return <div className="component_box" >
//         <p> 组件D</p>
//         <button onClick={()=> dispatch({ type:'clear' })} > 清空 </button>
//     </div>
// }


// function  Index(){
//     const [ isShow , setShow ] =  React.useState(true)
//     console.log('index 渲染')
//     return <div>
//         <CompA />
//         <CompB />
//         <CompC />
//         {isShow &&  <CompD />}
//         <button onClick={() => setShow(!isShow)} >动态挂载D</button>
//     </div>
// }

// function Root(){
//     const store = useCreateStore(function(state,action){
//         const { type , payload } =action
//         if(type === 'setA' ){
//             return {
//                 ...state,
//                 mesA:payload
//             }
//         }else if(type === 'setB'){
//             return {
//                 ...state,
//                 mesB:payload
//             }
//         }else if(type === 'clear'){ //清空
//             return  { mesA:'',mesB:'' }
//         }
//         else{
//             return state
//         }
//     },
//     { mesA:'111',mesB:'111' })
//     return <div>
//         <ReduxContext.Provider value={store} >
//             <Index/>
//         </ReduxContext.Provider>
//     </div>
// }


// export default Root