import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => ({
  btnHome: state.home.btnHome
})

const mapDispatchToProps = (dispatch) => ({
 
})
const App = connect(mapStateToProps, mapDispatchToProps)(UI)

export default App;