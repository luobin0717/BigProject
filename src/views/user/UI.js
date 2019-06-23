import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '@/css/user_home.scss';
class App extends React.Component {
  constructor(props){
    super(props);
    
  }
  // 
  componentDidMount(){
    
  }
  // 回到首页
  btnHome(){this.props.history.push('/home');}
  // 
  render() {
    return (
      <div className="user_box">
        <header className="header">
          {/* 回首页 */}
          <button className="btnHome" onClick={this.btnHome.bind(this)}>回首页</button>
          <img className="logo" src='http://a1.qpic.cn/psb?/V14cuMaT2oPSVa/yej5aqg*rd5Gb5G8SybF*vuL7No6BxpPm8tnJfdKKwc!/m/dDQBAAAAAAAAnull&bo=MgEyATIBMgEDCSw!&rf=photolist&t=5' />
        </header>
        <div className="content">
          {/* Banner */}
          <div className="banner">
            <img src="http://a1.qpic.cn/psb?/V14cuMaT2oPSVa/B*kXAHV16QjvpC3wnmNpQQJp8PDWJ20dniOuFeYl5.I!/m/dMAAAAAAAAAAnull&bo=ZQQTAmUEEwIDCSw!&rf=photolist&t=5" />
          </div>

          {/* Login  register */}
          <from className="goLogin">
            <input type='button' className="phoneLogin" value="手机号登录" />
            <input type='button' className="phoneRegister" value="手机号快速这册" />
          </from>
        </div>
        {/* footer 一键登录 */}
        <footer className="oauth">
          <h3 className="title">一键登录</h3>
          <div class="twoLogin">
            <img src="http://a4.qpic.cn/psb?/V14cuMaT2oPSVa/*JliDKdDPn7mlDHT*EMWszzc*9pkp8IkeWgv2tXUHKU!/m/dFMBAAAAAAAAnull&bo=twC3ALcAtwADCSw!&rf=photolist&t=5" />
            <img src="http://a1.qpic.cn/psb?/V14cuMaT2oPSVa/6OvxY7XEJ*YW58ML.BJh8vrqmC1.aF9xpBGaYMKUXK8!/m/dFQBAAAAAAAAnull&bo=twC3ALcAtwADCSw!&rf=photolist&t=5" />
          </div>
        </footer>
      </div>
    )
  }
}

export default App;