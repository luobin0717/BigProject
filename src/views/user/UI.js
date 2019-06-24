import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import '@/css/user_home.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }
  // 
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['banner1@3x.png', 'banner2@3x.png', 'banner3@3x.png','banner4@3x.png'],
      });
    }, 100);
  }
  // 回到首页
  btnHome() { this.props.history.push('/home'); }
  // 
  render() {
    return (
      <div className="user_box">
        <header className="header">
          {/* 回首页 */}
          <button className="btnHome" onClick={this.btnHome.bind(this)}>回首页</button>
          <img className="logo" src='http://www.infatuation.top/haitao-img/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2img/logo@3x.png' alt="logo" />
        </header>
        <div className="content">
          {/* Banner */}
          <div className="banner">
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`http://www.infatuation.top/haitao-img/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2img/${val}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </div>

          {/* Login  register */}
          <from className="goLogin">
            <input type='button' className="phoneLogin" value="手机号登录" />
            <input type='button' className="phoneRegister" value="手机号快速这册" />
          </from>
        </div>
        {/* footer 一键登录 */}
        <div className="oauth">
          <h3 className="title">一键登录</h3>
          <div class="twoLogin">
            <img src="http://www.infatuation.top/haitao-img/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2img/QQ%E7%99%BB%E5%BD%95@3x.png" />
            <img src="http://www.infatuation.top/haitao-img/%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2img/%E5%BE%AE%E4%BF%A1@3x.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;