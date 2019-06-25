import React from 'react';
import '@/css/user_LoginAfter.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  // 
  componentDidMount() {
   
  }
  // 回到首页
  btnHome() { this.props.history.push('/home'); }
  // 
  render() {
    return (
      <div className="userAfter_box">
        <header className="header">
         <div className="userImg">
           <button className="setting iconfont icon-shezhi-xue"></button>
           <button className="email iconfont icon-youxiang"></button>
           <div>  
            <img className="userImgs" src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/2@3x.png" alt="欢迎用户" />
            <p className="userName">XXX用户</p>
           </div>
         </div>
        </header>
        <div className="integral">
          <ul>
            <li><p>1200</p> <p>会员积分</p></li>
            <li><p>0</p>    <p>收藏</p></li>
            <li><p>0</p>    <p>优惠券</p></li>
            <li><p>2</p>    <p>购物车</p></li>
          </ul>
        </div>
        <div className="indent">
          <h3>我的订单</h3>
          <div className="payment">
            <ul>
              <li> <i><img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E5%BE%85%E6%94%AF%E4%BB%98@3x.png" /></i> <span>等待付款</span> </li>
              <li> <i><img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E5%A4%84%E7%90%86%E4%B8%AD@3x.png" /></i> <span>处理中</span> </li>
              <li> <i><img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E9%85%8D%E9%80%81%E4%B8%AD@3x.png" /></i> <span>已出库</span> </li>
              <li> <i><img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E6%89%80%E6%9C%89%E8%AE%A2%E5%8D%95@3x.png" /></i> <span>全部订单</span> </li>
            </ul>
          </div>
          <div className="site">
            <ul>
              <li> <i style={{background:'#ff4326'}}><img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E5%9C%B0%E5%9D%80@3x.png" /></i> <span>地址管理</span> </li>
              <li> <i style={{background:'#e8722c'}}><img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E8%81%94%E7%B3%BB@3x.png"  /></i> <span>联系客服</span> </li>
              <li> <i style={{background:'#ffb13c'}}><img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E8%81%94%E7%B3%BB@3x.png" /></i> <span>帮助中心</span> </li>
              <li> <i style={{background:'#ebc95e'}}><img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E5%85%91%E6%8D%A2%E8%AE%B0%E5%BD%95@3x.png" /></i> <span>兑换中心</span> </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <h3>猜你喜欢</h3>
          <ul className="guess">
            <li><a href="#"> <img src="http://www.infatuation.top/haitao-img/我的img/图层10@3x.png" /> <p>xxxxxxxxxx</p> <p>¥ 345.60</p> </a> </li>
            <li><a href="#"> <img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E5%9B%BE%E5%B1%829@3x.png" /> <p>xxxxxxxxxx</p> <p>¥ 345.60</p> </a> </li>
            <li><a href="#"> <img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E5%9B%BE%E5%B1%826@3x.png" /> <p>xxxxxxxxxx</p> <p>¥ 345.60</p> </a> </li>
            <li><a href="#"> <img src="http://www.infatuation.top/haitao-img/%E6%88%91%E7%9A%84img/%E5%9B%BE%E5%B1%827@3x.png" /> <p>xxxxxxxxxx</p> <p>¥ 345.60</p> </a> </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;