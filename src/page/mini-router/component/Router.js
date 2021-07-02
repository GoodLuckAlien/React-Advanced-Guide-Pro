import React ,{ useState , useEffect ,createContext, useMemo  } from 'react'
import { createBrowserHistory as createHistory  } from 'history'

export const RouterContext = createContext()
export let rootHistory = null

export default function Router(props){
     /* 缓存history属性 */
     const history = useMemo(() => {
          rootHistory = createHistory()
          return rootHistory
     },[])
     const [ location, setLocation ] = useState(history.location)
     useEffect(()=>{
          /* 监听location变化，通知更新 */
          const unlisten = history.listen((location)=>{
               setLocation(location)
          })
          return function () {
               unlisten && unlisten()
          }
     },[])
     return <RouterContext.Provider
         value={{
               location,
               history,
               match: { path: '/', url: '/', params: {}, isExact: location.pathname === '/' }
          }}
            >
          {props.children}
     </RouterContext.Provider>
}