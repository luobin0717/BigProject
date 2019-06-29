import React from 'react';
import '@/css/choose.scss'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      activeIndex: 0,
      list: []
    })
  }
  componentDidMount() {
    this.props.getKindListData();
  }
  changeIndex(i) {
    this.setState({
      activeIndex: i.index
    })
    // console.log(i.index)
  }
  render() {
    return (
      <div className="box">
        <header className="choose-header">
          <div className="header-left">
            <i className="iconfont icon-right" />
          </div>
          <input type="text" placeholder="雅诗兰黛" />
          <i className="iconfont icon-iconfonticonfontsousuo1" />
          <div className="header-right">
            <i className="iconfont icon-more" />
          </div>
        </header>
        <div className="choose-content">
          <div className="content-left">
            <ul>
              {
                this.props.KindList.kindlist ? this.props.KindList.kindlist.map((val, index) =>
                  <li key={index}>
                    <a className={this.state.activeIndex == index ? "active" : ""} onClick={this.changeIndex.bind(this, { index })}>
                      {val}
                    </a>
                  </li>
                ) : ''
              }

            </ul>
          </div>
          <div className="content-right">
            <div className="content-right-1">
              <h3>常用产品</h3>
              <ul>
                {
                  // console.log(this.props.KindList.listdata)
                  this.props.KindList.listdata ? this.props.KindList.listdata[this.state.activeIndex].map((val, index) =>
                    <li key={index}>
                      <img src={val.img} alt="" />
                      <p>{val.titie}</p>
                    </li>
                  ) : ''
                }
              </ul>
            </div>
            <div className="content-right-2">
              <h3>热门产品</h3>
              <ul>
              {
                  // console.log(this.props.KindList.minlistdata)
                  this.props.KindList.minlistdata ? this.props.KindList.minlistdata[this.state.activeIndex].map((val, index) =>
                    <li key={index}>
                      <img src={val.img} alt="" />
                      <p>{val.titie}</p>
                    </li>
                  ) : ''
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;