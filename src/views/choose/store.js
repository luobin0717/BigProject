const reducer = (state = {
  KindList: []
},action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeKindList':
      // console.log(data)
      return Object.assign({}, state, {KindList: data});
    default:
      return state;
  }
}

export default reducer;