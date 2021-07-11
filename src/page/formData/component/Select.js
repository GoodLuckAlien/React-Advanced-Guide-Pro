import React from 'react'

function Select({ children,...props }){
    console.log(props)
    return <select {...props}
        className="form-input"
           >
        {children}
    </select>
}

// eslint-disable-next-line react/no-multi-comp
Select.Option = function ( props ){
    return <option {...props}
        className=""
        label={props.children}
           ></option>
}

export default Select