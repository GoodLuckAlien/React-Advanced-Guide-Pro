import React, { createContext, memo, useContext } from 'react'
import propsTypes from 'proptypes'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';
import './index.scss'
import '../state/index.scss'

// TODO: 老版本 context
// class ConsumerDemo extends React.Component{
//    static contextTypes = {
//        theme:propsTypes.object 
//    }
//    render(){
//        console.log(this.context.theme) // {  color:'#ccc',  bgcolor:'pink' }
//        const { color , background } = this.context.theme
//        return <div style={{ color,background } } >消费者</div>
//    }
// }

// const Son = React.memo(()=> <ConsumerDemo/>)  // 我们 useMemo 来隔离来自 ProviderDemo 

// class ProviderDemo extends React.Component{ 
//     static childContextTypes={
//         theme:propsTypes.object
//     }
//     state={
//         theme: {
//             color:'#ccc',
//             background:'pink'
//         }
//     }
//     getChildContext(){  
//         return { theme : this.state.theme }
//     }
//     render(){
//         return <div>
//             hello,let us learn React!
//             <Son/>
//             <button onClick={()=> this.setState({ theme:{ color:'#fff',background:'blue' }  }) }   >改变颜色</button>
//         </div>
//     }
//  }
// export default ProviderDemo


// 新版本 contexts



// const ThemeContext = React.createContext(null)

// TODO:  contextType 方式
// class ConsumerDemo extends React.Component{
//    render(){
//        const { color,background } = this.context
//        return <div style={{ color,background } } >消费者</div> 
//    }
// }
// ConsumerDemo.contextType = ThemeContext
// const Son = memo(()=> <ConsumerDemo />)



// TODO: Consumer 订阅消费者方式
// const ThemeConsumer = ThemeContext.Consumer // 订阅消费者

// function ConsumerDemo(props){
//     const { color,background } = props
//     return <div style={{ color,background } } >消费者</div> 
// }

// const Son = () => (
//     <ThemeConsumer>
//        { (contextValue)=> <ConsumerDemo  {...contextValue}  /> }
//     </ThemeConsumer>
// ) 



// TODO:  useContext 方式
// function ConsumerDemo(){
//      const { color,background } = React.useContext(ThemeContext)
//     return <div style={{ color,background } } >消费者</div> 
// }


// const Son = ()=>{
//     console.log(1111)
//     return  <ConsumerDemo />
// }


// const ThemeProvider = ThemeContext.Provider //提供者

// export default function ProviderDemo(){
//     const [ contextValue , setContextValue ] = React.useState({  color:'#ccc', background:'pink' })
//     return <div>
//         <ThemeProvider value={ contextValue } >
//            { React.useMemo(()=>  <Son /> ,[]) }
//         </ThemeProvider>
//         <button onClick={ ()=> setContextValue({ color:'#fff' , background:'blue' })  } >切换主题</button>
//     </div>
// }

// TODO: 嵌套Provider


// const ThemeContext = React.createContext(null) // 主题颜色Context
// const LanContext = React.createContext(null)

// function ConsumerDemo(){
//     return <ThemeContext.Consumer>
//         { (themeContextValue)=> (
//             <LanContext.Consumer>
//                 { (lanContextValue) => {
//                     const { color , background } = themeContextValue
//                     return <div style={{ color,background } } > { lanContextValue === 'CH'  ? '大家好，让我们一起学习React!' : 'Hello, let us learn React!'  }  </div> 
//                 } }
//             </LanContext.Consumer>
//         )  }
//     </ThemeContext.Consumer>
// }

// const Son = memo(()=> <ConsumerDemo />)
// export default function ProviderDemo(){
//     const [ themeContextValue ] = React.useState({  color:'#FFF', background:'blue' })
//     const [ lanContextValue ] = React.useState('CH') // CH -> 中文 ， EN -> 英文
//     return <ThemeContext.Provider value={themeContextValue}  >
//          <LanContext.Provider value={lanContextValue} >
//              <Son  />
//          </LanContext.Provider>
//     </ThemeContext.Provider>
// }

// TODO: 逐层传递Provder
// const ThemeContext = React.createContext(null)
// function Son2(){
//     return <ThemeContext.Consumer>
//         { (themeContextValue2)=>{
//             const { color , background } = themeContextValue2
//             return  <div  className="sonbox"  style={{ color,background } } >  第二层Provder </div>
//         }  }
//     </ThemeContext.Consumer>
// }

// function Son(){
//     const { color, background } = React.useContext(ThemeContext)
//     const [ themeContextValue2 ] = React.useState({  color:'#fff', background:'blue' }) /* 第二层 Provder 传递内容 */
//     return <div className='box' style={{ color,background } } >
//         第一层Provder
//         <ThemeContext.Provider value={ themeContextValue2 } >
//             <Son2  />
//         </ThemeContext.Provider>
//     </div>

// }

// export default function Provider1Demo(){
//     const [ themeContextValue ] = React.useState({  color:'orange', background:'pink' }) /* 第一层  Provider 传递内容  */
//     return <ThemeContext.Provider value={ themeContextValue } >
//         <Son/>
//     </ThemeContext.Provider> 
// }

const ThemeContext = React.createContext(null) // 主题颜色Context

const theme = { //主题颜色
    dark:{  color:'#1890ff' , background:'#1890ff', border: '1px solid blue' ,type:'dark',  },
    light: {  color:'#fc4838' , background:'#fc4838', border: '1px solid pink' ,type:'light'  }
}


class Input extends React.Component{
    static contextType = ThemeContext
    shouldComponentUpdate(){
        return false
    }
    render(){
        const  { color,border } = this.context
        const {label , placeholder  } = this.props
        return <div>
            <label style={{ color }} >{ label }</label>
            <input className="input" placeholder={placeholder}  style={{ border }} />
        </div>
    }
}


/* 容器组件 */
const Box = memo(function BoxIndex(props){
    return <ThemeContext.Consumer>
        { (themeContextValue)=>{
            const { border,color } = themeContextValue
            return <div className="context_box" style={{ border,color }} >
            { props.children }
        </div>
        } }
    </ThemeContext.Consumer>
})

function  Checkbox (props){
    const { label ,name, onChange } = props
    const { type , color } = React.useContext(ThemeContext)
    return <div className="checkbox"  onClick={onChange} >
        <label htmlFor="name" > {label} </label>
       <input type="checkbox" id={name} value={type} name={name} checked={ type === name }  style={{ color } } />
    </div>
}

class App extends React.PureComponent{
    
    static contextType = ThemeContext
    render(){
        const { border , setTheme ,color  ,background} = this.context
        return <div className="context_app" style={{ border , color }}  >
          <div className="context_change_theme"   >
             <span> 选择主题： </span>
             <Checkbox label="light"  name="light" onChange={ ()=> setTheme(theme.light) }  />
             <Checkbox label="dark" name="dark"  onChange={ ()=> setTheme(theme.dark) }   />
          </div>
          <div className='box_content' >
            <Box >
                <Input label="姓名："  placeholder="请输入姓名"  />
                <Input label="age："  placeholder="请输入年龄"  />
                <button className="searchbtn" style={ { background } } >确定</button>
                <button className="concellbtn" style={ { color } } >取消</button>
            </Box>
            <Box >
                <HomeOutlined  twoToneColor={ color } />
                <SettingFilled twoToneColor={ color }  />
                <SmileOutlined twoToneColor={ color }  />
                <SyncOutlined spin  twoToneColor={ color }  />
                <SmileOutlined twoToneColor={ color }  rotate={180} />
                <LoadingOutlined twoToneColor={ color }   />
            </Box>
            <Box >
                <div className="person_des" style={{ color:'#fff' , background }}  >
                    I am alien  <br/>
                    let us learn React!
                </div>
            </Box>
          </div>
     </div>
    }
}

export default function (){
    const [ themeContextValue ,setThemeContext ] = React.useState(theme.dark) 
    /* 传递颜色主题 和 改变主题的方法 */
    return <ThemeContext.Provider value={ { ...themeContextValue, setTheme:setThemeContext  } } >
        <App/>
    </ThemeContext.Provider>
}


