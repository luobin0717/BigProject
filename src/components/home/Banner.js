import React from 'react';
import { Carousel } from 'antd-mobile';

const App = ({bannerlist}) => (
  // console.log(props)
  <Carousel
    autoplay={false}
    infinite
  >
    {bannerlist.map((val, index) => (
      <a
        key={index}
        href="http://www.alipay.com"
        style={{ display: 'inline-block', width: '100%', height: "3.28rem" }}
      >
        <img
          src={`http://www.daxunxun.com${val}`}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </a>
    ))}
  </Carousel>
)

export default App;