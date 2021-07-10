import React from 'react'

import Form , { Input } from './form'

const FormItem = Form.FormItem


function Index(){
    return <div style={{ marginTop:'50px' }} >
        <Form >
            <FormItem name="name"  >
                 <Input
                     placeholder="请输入姓名"
                 />
            </FormItem>
            <FormItem name="age"   >
                 <Input
                     placeholder="请输入年龄"
                 />
            </FormItem>
        </Form>
    </div>
}

export default Index