import { useContext } from 'react'
import { RouterContext  } from '../component/Router'

export default function useHistory() {
    return useContext(RouterContext).history
}