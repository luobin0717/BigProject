import React from 'react';
import { Switch, Route, Redirect,NavLink} from 'react-router-dom'
import Home from '@/views/home'
import Find from '@/views/find'
import Choose from '@/views/choose'
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
      <Redirect to = '/home'/>
    </Switch>
    <footer className = "footer">
        <ul>
          <NavLink to = "/home">
          <i className="iconfont icon-shouye2"></i>
            <p>首页</p>
          </NavLink>
          <NavLink to = "/choose">
          <i className="iconfont icon-leimupinleifenleileibie2"></i>
            <p>选购</p>
          </NavLink>
          <NavLink to = "/find">
          <i className="iconfont icon-leimupinleifenleileibie2"></i>
            <p>发现</p>
          </NavLink>
          <NavLink to = "/cart">
          <i className="iconfont icon-ai-eye"></i>
            <p>购物车</p>
          </NavLink>
          <NavLink to = "/user">
          <i className="iconfont icon-gerenyonghutouxiang2"></i>
            <p>我的</p>
          </NavLink>
        </ul>
      </footer>
  </div>
)

export default App;