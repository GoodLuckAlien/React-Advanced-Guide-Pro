import { useContext } from 'react'
import { RouterContext  } from '../component/Router'

export default function  useLocation() {
    return useContext(RouterContext).location
}