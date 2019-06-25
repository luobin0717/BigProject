// import React from 'react';
import '@/css/cart.scss';
import React, { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(1);
  return (
    <div className="box">
      <header className="cart-header">
        <div className="cart-header-left">
          <a href="#">购物车</a>
        </div>
        <div className="cart-header-right">
          <a href="#">编辑</a>
        </div>
      </header>

      <div className="cart-content">
        <ul>
          <li>
            <div className="cart-content-top">
              <input type="checkbox" readOnly />
              <a href="#">Puma发货</a>
              <i className="iconfont icon-arrow_right"></i>
              <a href="#">跨境电商</a>
            </div>
            <div className="cart-content-bottom">
              <input type="checkbox" readOnly />
              <img src="http://www.infatuation.top/haitao-img/%E8%B4%AD%E7%89%A9%E8%BD%A6img/%E5%9B%BE%E5%B1%822@3x.png" alt="" />
              <div className="cart-content-left">
                <div className="cart-content-t">
                  <p>Puma Essentials+泫雅同款T樰</p>
                  <span>color:<u>Black</u>;size<u>XS</u>;重量:<u>0.25kg</u></span>
                </div>
                <div className="cart-content-c">
                  <u>￥{193.25 * count}</u>
                </div>
                <div className="cart-content-b">
                  <div className="quantity-form">
                    <a onClick={() => {
                      if (count > 0) {

                        setCount(count - 1)
                      }
                      else {
                        setCount(0)
                      }
                    }}>-</a>
                    <input type="text" value={count} minnum="1" readOnly />
                    <a onClick={() => {
                      setCount(count + 1)
                    }}>+</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App;