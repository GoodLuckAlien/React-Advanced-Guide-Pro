import React from 'react'

import './style.scss'



function Message(props){
    const { status , message , required , name , value } = props
    console.log(props)
    let showMessage = ''
    if(required && !value && status === 'reject'  ){
        showMessage = `${name} 为必填项`
    }else if(status === 'reject'){
        showMessage = message
    }else if(status === 'resolve' || status === 'pendding'  ){
        showMessage = null
    }
    return <div className="form-message" >
        {showMessage}
    </div>
}

export default Message