import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps=(state)=>({
  KindList:state.choose.KindList
})
// fetch('api/json/haitao/kind.json').then(res => res.json()).then(data => {
//   console.log(data.kindlist);
// })

const mapDispatchToProps = (dispatch) => ({
  getKindListData() {
    fetch('api/json/haitao/kind.json').then(res => res.json()).then(data => {
      dispatch({
        type:'changeKindList',
        data:data
          // console.log(data)
      })

    })
  }
})

const App = connect(mapStateToProps, mapDispatchToProps)(UI)

export default App;