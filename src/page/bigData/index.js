/* eslint-disable react/no-multi-comp */
import React, { useState , useEffect , useRef } from 'react'
import './style.scss'

/* 获取随机颜色 */
function getColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return 'rgba('+ r +','+ g +','+ b +',0.8)';
 }
/* 获取随机位置 */
function getPostion(position){
     const { width , height } = position
     return {
         left: Math.ceil( Math.random() * width ) + 'px',
         top: Math.ceil(  Math.random() * height ) + 'px'
     }
}
/* 色块组件 */
function Circle({ position }){
    const style = React.useMemo(()=>{ //用useMemo缓存，计算出来的随机位置和色值。
         return {
            background : getColor(),
            ...getPostion(position)
         }
    },[])
    return <div className="circle"
        style={style}
           />
}
/* TODO: 源方案 */
// class Index extends React.Component{
//     state={
//         dataList:[],    //数据源列表
//         renderList:[],  //渲染列表
//         position:{ width:0,height:0 } // 位置信息
//     }
//     box = React.createRef()
//     componentDidMount(){
//         const { offsetHeight , offsetWidth } = this.box.current
//         const originList = new Array(20000).fill(1)
//         this.setState({
//             position: { height:offsetHeight,width:offsetWidth },
//             dataList:originList,
//             renderList:originList,
//         })
//     }
//     render(){
//         const { renderList, position } = this.state
//         return <div className="bigData_index" ref={this.box}  >
//             {
//                 renderList.map((item,index)=><Circle  position={ position } key={index}  /> )
//             }
//         </div>
//     }
// }


// TODO: 原方案
// class Index extends React.Component{
//     state={
//         dataList:[],    //数据源列表
//         renderList:[],  //渲染列表
//         position:{ width:0,height:0 } // 位置信息
//     }
//     box = React.createRef()
//     componentDidMount(){
//         const { offsetHeight , offsetWidth } = this.box.current
//         const originList = new Array(20000).fill(1)
//         this.setState({
//             position: { height:offsetHeight,width:offsetWidth },
//             dataList:originList,
//             renderList:originList,
//         })
//     }
//     render(){
//         const { renderList, position } = this.state
//         return <div className="bigData_index" ref={this.box}  >
//             {
//                 renderList.map((item,index)=><Circle  position={ position } key={index}  /> )
//             }
//         </div>
//     }
// }
// TODO: 改造方案
// class Index extends React.Component{
//     state={
//         dataList:[],    //数据源列表
//         renderList:[],  //渲染列表
//         position:{ width:0,height:0 }, // 位置信息
//         eachRenderNum:500  // 每次渲染数量
//     }
//     box = React.createRef()
//     componentDidMount(){
//         const { offsetHeight , offsetWidth } = this.box.current
//         const originList = new Array(20000).fill(1)
//         const times = Math.ceil(originList.length / this.state.eachRenderNum) /* 需要渲染此次数*/
//         let index = 1
//         this.setState({
//             dataList:originList,
//             position: { height:offsetHeight,width:offsetWidth }
//         },()=>{
//             this.toRenderList(index,times)
//         })
//     }
//     toRenderList=(index,times)=>{
//         if(index===times) return
//         const { renderList } = this.state
//         renderList.push(this.renderNewList(index))
//         this.setState({
//             renderList
//         })
//         setTimeout(()=>{ /* 用 requestIdleCallback 代替 setTimeout */
//             this.toRenderList(++index,times)
//         },0)
//     }
//     renderNewList(index){  /* 得到最新的渲染列表 */
//         const { dataList , position , eachRenderNum } = this.state
//         const list = dataList.slice((index-1) * eachRenderNum , index * eachRenderNum  )
//         return <React.Fragment key={index} >

//             {
//                 list.map((item,index)=>{
//                     return <Circle key={index}
//                         position={position}
//                            />
//                 })
//             }
//         </React.Fragment>
//     }

//     render(){
//          return <div className="bigData_index"
//              ref={this.box}
//                 >
//             {this.state.renderList}
//          </div>
//     }
// }

let eachRenderNum = 500;

function Index() {
  const listRef = React.useRef({ list: [] });
  const [, setForceUpdate] = useState({});
  const [dataList, setDataList] = useState(() => {
    return new Array(20000).fill(1);
  }); //数据源列表
  // const [renderList, setRenderList] = useState<any>([]); //渲染列表
  const position = useRef({
    width: 0,
    height: 0
  });
  const box = React.useRef({ offsetWidth: null, offsetHeight: null });

  useEffect(() => {
    const { offsetWidth, offsetHeight } = box.current;
    position.current = {
        ...position,
        width: offsetWidth,
        height: offsetHeight
      }
  }, []);

  useEffect(() => {
    const times = Math.ceil(dataList.length / eachRenderNum);
    let index = 1;
    toRenderList(index, times);
  }, []);

  const toRenderList = (index, times) => {
    if (index > times) {
      //渲染完成 退出渲染
      return;
    }
    //@ts-ignore
    listRef.current.list.push(renderNewList(index));
    // list.push(renderNewList(index));
    // setRenderList(list);
    setForceUpdate({});
    // console.log(renderList);
    requestIdleCallback(() => {
      toRenderList(++index, times);
    });
  };

  const renderNewList = index => {
    const list = dataList && dataList.slice((index - 1) * eachRenderNum, index * eachRenderNum);
    return (
      <React.Fragment key={index}>
        {list.map((item, index) => (
          <Circle key={index}
              position={position.current}
          />
        ))}
      </React.Fragment>
    );
  };
  console.log(listRef.current.list)
  return (
    //@ts-ignore
    <div className="bigData_index"
        ref={box}
    >
      {listRef.current.list}
    </div>
  );
}




export default ()=>{
    const [show, setShow] = useState(false)
    const [ btnShow, setBtnShow ] = useState(true)
    const handleClick=()=>{
        setBtnShow(false)
        setTimeout(()=>{ setShow(true) },[])
    }
    return <div>
        {btnShow &&  <button onClick={handleClick} >show</button>}
        {show && <Index />}
    </div>
}