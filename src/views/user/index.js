import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => ({
  homeBannerList: state.home.homeBannerList
})

const mapDispatchToProps = (dispatch) => ({
  
})
const App = connect(mapStateToProps, mapDispatchToProps)(UI)

export default App;