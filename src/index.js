import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/layout/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
import '@/main.scss'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import DetailApp from '@/layout/DetailApp'

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
        <Switch>
        <Route path = '/detail' component = {DetailApp}/>
        <Route path = '/' component = { App }/>
        </Switch>
      </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
