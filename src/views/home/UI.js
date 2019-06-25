import React from 'react';
import Banner from '@/components/home/Banner';
import '@/css/home.scss';
class App extends React.Component{
  componentDidMount () {
    this.props.getHomeBannerListData()
  }
  render () {
    console.log(this)
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
        <div className = "content">
          <Banner bannerlist = {this.props.homeBannerList}/>
          <div className = "bannerlist">
            <ul>
              <li>
                <div className = "img1"></div>
                <p>特价产品</p>
              </li>
              <li>
                <div className = "img1"></div>
                <p>特价产品</p>
              </li>
              <li>
                <div className = "img1"></div>
                <p>特价产品</p>
              </li>
              <li>
                <div className = "img1"></div>
                <p>特价产品</p>
              </li>
            </ul>
          </div>
          <div className = "discount">
            <div className = "text">
              <p>每周特惠</p>
            </div>
            <ul>
              <li>
                <div className = "img"></div>
              </li>
              <li>
                <div className = "img"></div>
              </li>
              <li>
                <div className = "img"></div>
              </li>
            </ul>
          </div>
          <div className ="proposal">
            <div className = "box">
              <div className = "top">
                <p>产品建议</p>
                <span>更多</span>
              </div>
              <ul>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>
            </div>
          </div>
          <div className = "guanggao">
            <img src="http://www.infatuation.top/haitao-img/%E9%A6%96%E9%A1%B5img/%E5%9B%BE%E5%B1%8224@3x.png" alt = ""/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;