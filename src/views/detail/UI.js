import React from 'react';
import '@/css/detail.scss'
class App extends React.Component{

  render () {
    return (
      <div className = "detail">
        <div className = "header">
          <div className = "left">
            <i className = "iconfont icon-right-copy"></i>
          </div>
          <div className = "content">
            <span>商品</span>
            <span>详情</span>
          </div>
          <div className = "right">
            <i className = "iconfont icon-xiao59-copy"></i>
            <i className = "iconfont icon-fenxiang-copy-copy"></i>
          </div>
        </div>
        <div className = "main">
          <div className = "banner">
            <img src = "/assets/banner1.png" alt = ""/>
          </div>
          <div className =""></div>
        </div>
      </div>
    )
  }
}

export default App;