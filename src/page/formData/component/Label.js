import React from 'react'

import './style.scss'

function Index({ children , label ,labelWidth , required ,height}){
    return <div className="form-label"
        style={{ height:height + 'px'  }}
           >
       <div
           className="form-label-name"
           style={{ width : `${labelWidth}px` }}
       >
           {required ? <span style={{ color:'red' }} >*</span> : null}
           {label}:
        </div>  {children}
    </div>
}

export default Index