import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => ({
  homeBannerList: state.home.homeBannerList
})

const mapDispatchToProps = (dispatch) => ({
  getHomeBannerListData () {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      dispatch({
        type:'changeHomeBannerList',
        data
      })
    })
  }
})
const App = connect(mapStateToProps, mapDispatchToProps)(UI)

export default App;