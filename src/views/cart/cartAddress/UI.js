// import React from 'react';
import '@/css/cart_Address.scss';
import React, { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(1);
  return (
    <div className="box">
      <header className="address-header">
       
        <div className="address-header-left">
            <i className="iconfont icon-right"/>
          </div>
          <a href="#">新建地址</a>
          <div className="address-header-right">
            <i className="iconfont icon-more"/>
          </div>
      </header>
      
      <div className="address-content">
        <ul>
          <li>
            
          </li>
        </ul>
      </div>
   
    </div>
  )
}

export default App;