import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '@/css/user_home.scss';
class App extends React.Component {
  render() {
    return (
      <div className="user_box">
        <header className="header">
          <button className="btnHome">返回首页</button>
          <img className="logo" src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3758220426,161596114&fm=26&gp=0.jpg' />
        </header>
        <div className="content">
          {/* Banner */}
          <div className="banner">
            <Carousel className="space-carousel"
              frameOverflow="visible"
              cellSpacing={10}
              slideWidth={0.8}
              autoplay
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => this.setState({ slideIndex: index })}
            >
              {this.state.data.map((val, index) => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{
                    display: 'block',
                    position: 'relative',
                    top: this.state.slideIndex === index ? -10 : 0,
                    height: this.state.imgHeight,
                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
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
      </div>
    )
  }
}

export default App;