import React  , { memo , useEffect , useContext , useState , useCallback, useMemo , cloneElement , isValidElement }  from  'react'

import { FormContext } from '../component/Form'
import Message from './Message'
import Label from './Label'

function FormItem ({
    name,
    children,
    label,
    required,
    rules = {},
    trigger = 'onChange',
    validateTrigger = 'onChange'
}){
    const formInstance  = useContext(FormContext)
    const { registerValidateFields , dispatch , unRegisterValidate } = formInstance
    const [ , forceUpdate ] = useState({})
    const onStoreChange = useMemo(()=>{
        /* 管理层改变 => 通知表单项 */
        const onStoreChange = {
            changeValue(){
                forceUpdate({})
            }
         }
        return onStoreChange

    },[ formInstance ])
    useEffect(()=>{
         /* 注册表单 */
        registerValidateFields(name,onStoreChange,{ ...rules })
        return function(){
            /* 卸载表单 */
            unRegisterValidate(name)
        }
    },[ onStoreChange ])
     /* 使表单控件变成可控制的 */
    const getControlled = (child)=> {
        const mergeChildrenProps = { ...child.props }
         /* 改变表单单元项的值 */
        const handleChange  = (e)=> {
             const value = e.target.value
             dispatch({ type:'setFieldsValue' },name ,value)
         }
        mergeChildrenProps[trigger] = handleChange
        if(required){
             /* 验证表单单元项的值 */
            mergeChildrenProps[validateTrigger] = (e) => {
                 /* 当改变值和验证表单，用统一一个事件 */
                if(validateTrigger === trigger){
                    handleChange(e)
                }
                dispatch({ type:'validateFieldValue' },name)
            }
        }
        mergeChildrenProps.value = dispatch({ type:'getFieldValue' }, name) || ''
        return mergeChildrenProps
    }
    let renderChildren
    if(isValidElement(children)){
        /* 获取 | 合并 ｜ 转发 | =>  props  */
        renderChildren = cloneElement(children, getControlled(children))
    }else{
        renderChildren = children
    }

    return <Label label={label} >
         {renderChildren}
         <Message  dispatch={dispatch}  />
     </Label>
}

export default memo(FormItem)