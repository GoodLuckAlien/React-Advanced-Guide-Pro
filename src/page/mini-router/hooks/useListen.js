import { useEffect } from 'react'
import { rootHistory } from '../component/Router'

/* 监听路由改变 */
function useListen(cb) {
    useEffect(()=>{
        if(!rootHistory) return ()=> {}
        const unlisten = rootHistory.listen((location)=>{
             cb && cb(location)
        })
        return function () {
            unlisten && unlisten()
        }
    },[])
}

export default useListen