import React from 'react';
import '@/css/choose.scss'
class App extends React.Component{
 
  render () {
    return (
      <div className = "box">
        <header className = "choose-header">
          <input type="text" placeholder="搜索产品"/>
          <ul>
            <li className="active">健康主题</li>
            <li>类别</li>
            <li>品牌</li>
          </ul>
        </header>
        <div className = "content">选购内容
        </div>
      </div>
    )
  }
}

export default App;