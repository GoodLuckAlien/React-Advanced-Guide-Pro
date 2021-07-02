import React , { useContext } from 'react'
import hoistStatics from 'hoist-non-react-statics'

import { RouterContext  } from '../component/Router'

export default function withRouter(Component){
    const WrapComponent = (props) =>{
        const { wrappedComponentRef, ...remainingProps } = props
        const context = useContext(RouterContext)
        return  <Component {...remainingProps}
            ref={wrappedComponentRef}
            {...context}
                />
    }
    return hoistStatics(WrapComponent,Component)
}