import React from 'react';
import { Switch, Route, Redirect,NavLink} from 'react-router-dom'
import Home from '@/views/home'
import Find from '@/views/find'
import Choose from '@/views/choose'
import LoginAfter from '@/views/user/LoginAfter'
import CartAddress from '@/views/cart/cartAddress'
import User from '@/views/user'

import Cart from '@/views/cart'
import '@/main.scss';

const App = () => (
  <div className = "container">
    <Switch>
      <Route path = '/home' component = { Home }/>
      <Route path = '/choose' component = { Choose }/>
      <Route path = '/find' component = { Find }/>
      <Route path = '/cart' component = { Cart }/>
      <Route path = '/user' component = { User }/>
      <Route path = '/LoginAfter' component = { LoginAfter }/>
      <Route path = '/CartAddress' component = { CartAddress }/>
      <Redirect to = '/home'/>
    </Switch>
    <footer className = "footer">
        <div className="footer-box">
          <NavLink to = "/home">
          <i className="iconfont icon-xiao59"></i>
            <p>首页</p>
          </NavLink>
          <NavLink to = "/choose">
          <i className="iconfont icon-leimupinleifenleileibie--"></i>
            <p>分类</p>
          </NavLink>
          <NavLink to = "/find">
          <i className="iconfont icon-sousuo"></i>
            <p>发现</p>
          </NavLink>
          <NavLink to = "/cart">
          <i className="iconfont icon-gouwuche"></i>
            <p>购物车</p>
          </NavLink>
          <NavLink to = "/user">
          <i className="iconfont icon-wode"></i>
            <p>我的</p>
          </NavLink>
        </div>
      </footer>
  </div>
)

export default App;