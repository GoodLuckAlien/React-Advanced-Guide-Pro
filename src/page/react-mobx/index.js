import React from 'react'
import { Provider , inject , observer  } from 'mobx-react'

import Root from './mobx'

const Store = { Root }

export default function Index(){
    return <Provider {...Store} >
       <Child />
    </Provider>
}

@inject('Root')
@observer
class Child extends React.Component{
    componentDidMount(){
        console.log(this.props.Root.info)
    }
    render(){
        const { info ={}} = this.props.Root
        return <div>
            <p> 姓名：{info.name} </p>
            <p> 想对大家说：{info.mes} </p>
        </div>
    }
}