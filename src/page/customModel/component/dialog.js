/* eslint-disable react/jsx-max-props-per-line */
import React, { useMemo, useEffect, useState } from "react";
import ReactDOM from "react-dom";

/* 控制弹窗隐藏以及动画效果 */
const controlShow = (f1, f2, value, timer) => {
  f1(value);
  return setTimeout(() => {
    f2(value);
  }, timer);
};
const RenderChildren = (props) => {
  /* 把元素渲染到组件之外的 document.body 上  */
  return ReactDOM.createPortal(props.children, document.body);
};
export default function Dialog(props) {
  const { width, visible, closeCb, onClose, children } = props;
  /* 控制 modelShow 动画效果 */
  const [modelShow, setModelShow] = useState(visible);
  const [modelShowAync, setModelShowAync] = useState(visible);

  useEffect(() => {
    let timer;
    if (visible) {
      timer = controlShow(setModelShow, setModelShowAync, visible, 30);
    } else {
      timer = controlShow(setModelShowAync, setModelShow, visible, 1000);
    }
    return function () {
      timer && clearTimeout(timer);
    };
  }, [visible]);
  useEffect(() => {
    !modelShow && typeof closeCb === "function" && closeCb();
  }, [modelShow]);

  return (
    <RenderChildren modelShow={modelShow} modelShowAync={modelShowAync}>
      <div style={{ display: modelShow ? "block" : "none" }}>
        <div
          className="model_container"
          style={{ opacity: modelShowAync ? 1 : 0 }}
        >
          <div className="model_wrap">
            <div style={{ width: width + "px" }}>{children}</div>
          </div>
        </div>
        <div
          className="model_container mast"
          onClick={() => onClose && onClose()}
          style={{ opacity: modelShowAync ? 0.6 : 0 }}
        />
      </div>
    </RenderChildren>
  );
}
