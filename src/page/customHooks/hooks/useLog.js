import React from 'react'


export const LogContext = React.createContext({})

export default function useLog(){
    /* 一些公共参数 */
    const message = React.useContext(LogContext)
    const listenDOM = React.useRef(null)

    /* 分清依赖关系 -> message 改变，   */
    const reportMessage = React.useCallback(function(data,type){
        //type === pv 如果是 pv
        if(type==='pv'){
            console.log('组件 pv 上报',message)
        }else if(type === 'click'){
            console.log('组件 click 上报',message,data)
        }
    },[ message ])

    React.useEffect(()=>{
        const handleClick = function (e){
            reportMessage(e.target,'click')
        }

        if(listenDOM.current){
            listenDOM.current.addEventListener('click',handleClick)
        }

        return function (){
            listenDOM.current && listenDOM.current.removeEventListener('click',handleClick)
        }
    },[ reportMessage  ])

    return [ listenDOM , reportMessage  ]
}