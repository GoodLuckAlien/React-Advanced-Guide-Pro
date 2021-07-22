
import React , { forwardRef, useImperativeHandle  } from 'react'

import FormContext  from   './FormContext'
import  useForm  from '../hooks/useForm'

/**
 * props -> default
 */
function Form ({
    form,
    onFinish,
    onFinishFailed,
    initialValues,
    children
},ref){
    /* 创建 form 状态管理实例 */
    const formInstance = useForm(form,initialValues)
    /* 抽离属性 -> 抽离 dispatch ｜ setCallback 这两个方法不能对外提供。  */
    const { setCallback, dispatch  ,...providerFormInstance } = formInstance

    /* 向 form 中注册回调函数 */
    setCallback({
        onFinish,
        onFinishFailed
    })

    /* Form 能够被 ref 标记，并操作实例。 */
    useImperativeHandle(ref,() => providerFormInstance , [])
    /* 传递 */
    const RenderChildren = <FormContext.Provider value={formInstance} > {children} </FormContext.Provider>

    return <form
        onReset={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            formInstance.resetFields() /* 重置表单 */
        }}
        onSubmit={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            formInstance.submit()      /* 提交表单 */
        }}
           >
           {RenderChildren}
        </form>
}

export default forwardRef(Form)