
import React , { useRef , useEffect } from 'react'

import Form , { Input , Select } from './form'

import { Radio  } from 'antd'

const FormItem = Form.FormItem

const Option = Select.Option

function Index(){
    const form = useRef(null)
    useEffect(()=>{
        console.log(form.current,'form.current')
    },[])
    const handleClick = () => {
         form.current.submit((res)=>{
             console.log(res)
         })
    }
    const handleReset= () => {
        form.current.resetFields()
    }
    return <div style={{ marginTop:'50px' }} >
        <Form  ref={form} >
            <FormItem
                label="请输入姓名"
                labelWidth={150}
                name="name"
                required
                rules={{
                    rule:/^[a-zA-Z0-9_\u4e00-\u9fa5]{4,32}$/,
                    message:'名称仅支持中文、英文字母、数字和下划线，长度限制4~32个字'
                }}
                validateTrigger="onBlur"
            >
                 <Input
                     placeholder="请输入姓名"
                 />
            </FormItem>
            <FormItem
                label="年龄"
                labelWidth={150}
                name="age"
                required
            >
                 <Input
                     placeholder="请输入年龄"
                 />
            </FormItem>
            <FormItem label="你最喜欢的前端框架"
                labelWidth={150}
                name="likes"
                required
            >
                <Select  defaultValue={null}
                    placeholder="选择你喜欢的前端框架"
                    width={120}
                >
                    <Option
                        value={1}
                    > React.js </Option>
                    <Option value={2} > Vue.js </Option>
                    <Option value={3} > Angular.js </Option>
                </Select>
            </FormItem>
            <button className="searchbtn"
                onClick={handleClick}
                type="button"
            >提交</button>
            <button className="concellbtn"
                type="reset"
            >重置</button>
        </Form>
       <div> <button className="searchbtn" >获取表单数层</button></div>
       <div></div>
    </div>
}

export default Index