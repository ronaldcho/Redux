import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  texts: todoReducer
});

export default rootReducer;