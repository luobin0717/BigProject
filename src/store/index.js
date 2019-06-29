import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store';
import choose from '@/views/choose/store';
const reducer = combineReducers({
  choose,
  home
});

const store = createStore(reducer);

export default store;