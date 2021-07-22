import React  , { memo , useEffect , useContext , useState , useMemo , cloneElement , isValidElement }  from  'react'

import FormContext from './FormContext'
import Message from './Message'
import Label from './Label'

function FormItem ({
    name,
    children,
    label,
    height = 50 ,
    labelWidth,
    required = false ,
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
        name && registerValidateFields(name,onStoreChange,{ ...rules , required })
        return function(){
            /* 卸载表单 */
           name &&  unRegisterValidate(name)
        }
    },[ onStoreChange ])
     /* 使表单控件变成可控制的 */
    const getControlled = (child)=> {
        const mergeChildrenProps = { ...child.props }
        if(!name) return mergeChildrenProps
         /* 改变表单单元项的值 */
        const handleChange  = (e)=> {
             const value = e.target.value
             dispatch({ type:'setFieldsValue' },name ,value)
         }
        mergeChildrenProps[trigger] = handleChange
        if(required || rules ){
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
    return <Label
        height={height}
        label={label}
        labelWidth={labelWidth}
        required={required}
           >
         {renderChildren}
         <Message
             name={name}
             {...dispatch({ type :'getFieldModel'},name)}
         />
     </Label>
}

export default memo(FormItem)