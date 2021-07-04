/* eslint-disable react/jsx-max-props-per-line */
import React , { useMemo, useState } from 'react'

import Modal from './component/index'
import './style.scss'


// /* 挂载方式调用modal */
export default function Index() {
    const [ visible , setVisible ] = useState(false)
    const [ nameShow , setNameShow ] = useState(false)
    const handleClick = () => {
        console.log('点击')
        setVisible(!visible)
        setNameShow(!nameShow)
    }
    /* 防止 Model 的 PureComponent 失去作用 */
    const [ handleClose ,handleOk, handleCancel ] = useMemo(()=>{
        const Ok = () =>  console.log('点击确定按钮')
        const Close = () => setVisible(false)
        const Cancel = () => console.log('点击取消按钮')
        return [ Close , Ok , Cancel  ]
    },[])

    return <div>
        <Modal
            onCancel={handleCancel}
            onClose={handleClose}
            onOk={handleOk}
            title={'《React进阶实践指南》'}
            visible={visible}
            width={700}
        >
           <div className="feel" >
              小册阅读感受： <input placeholder="写下你的感受" />
              {nameShow && <p>作者： 我不是外星人</p>}
           </div>
        </Modal>
        <button onClick={() => {
            setVisible(!visible)
            setNameShow(false)
        }}
        > model show </button>
        <button onClick={handleClick} > model show ( 显示作者 ) </button>
    </div>
}

/* api方式调用 */
// export default function Index(){
//     const handleClick =() => {
//         Modal.show({
//             content:<p>确定购买《React进阶指南小册》吗</p>,
//             title:'《React进阶实践指南》',
//             onOk:()=>console.log('点击确定'),
//             onCancel:()=>console.log('点击取消'),
//             onClose:()=> Modal.hidden()
//         })
//     }
//     return <div>
//         <button onClick={() => handleClick()} >静态方式调用，显示modal</button>
//     </div>
// }
