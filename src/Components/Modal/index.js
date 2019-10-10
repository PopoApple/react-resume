import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.state = {
        status: 'before',
    }
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    modalRoot.appendChild(this.el);
    //document.body.style.overflow = 'hidden'
    setTimeout(() => {
        this.setState({ status: 'in' })
    })   
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    //document.body.style.overflow = 'auto'
  }

  render() {
    const { onClose, maxWidth } = this.props
    return ReactDOM.createPortal(
      <div className={ 'modal-wrap modal-wrap-' + this.state.status }>
          <div className="modal-close-btn" onClick={onClose}>
            <span class="icon iconfont">&#xe635;</span>
          </div>
          <div className="modal-content" style={maxWidth ? { maxWidth } : null}>
            {this.props.children}
          </div>
          <div className="modal-footer">
            <a onClick={onClose} className="button">
              <span class="icon iconfont">&#xe608;</span>关闭
            </a>
          </div>
      </div>,
      this.el,
    );
  }
}

export default Modal