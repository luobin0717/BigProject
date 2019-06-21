import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'
import Home from '@/views/home'
import Find from '@/views/find'
import Choose from '@/views/choose'
import User from '@/views/user'
import Cart from '@/views/cart'
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
  </div>
)

export default App;