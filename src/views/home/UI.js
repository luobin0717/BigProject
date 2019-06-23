import React from 'react';
import '@/css/home.scss'
class App extends React.Component{
  render () {
    return (
      <div className = "box">
        <header className = "header">
          <div className = "header-t">
            <div className = "left">
              <i className = "iconfont icon-saoyisao"></i>
              <p>扫一扫</p>
            </div>
            <div className = "content"></div>
            <div className ="right">
              <i className = "iconfont icon-huiyuanma"></i>
              <p>会员码</p>
            </div>
          </div>
          <div className = "header-b">
            <ul>
              <li className = "active">
                <p>推荐</p>
              </li>
              <li>
                <p>品牌墙</p>
              </li>
              <li>
                <p>美容彩妆</p>
              </li>
              <li>
                <p>奶粉纸尿裤</p>
              </li>
            </ul>
          </div>
        </header>
        <div className = "content">首页内容
        </div>
      </div>
    )
  }
}

export default App;