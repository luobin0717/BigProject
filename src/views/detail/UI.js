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
          <div className = "title">
            <div className = "left">
              <p>美国进口Schiff MoveFree氨基葡萄糖，红瓶170粒*2</p>
              <span>￥399.00</span>
            </div>
            <div className = "right">
              <div className = "praise">
                <p>99%</p>
                <span>好评率</span>
              </div>
              <i>购买最高得200积分</i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;