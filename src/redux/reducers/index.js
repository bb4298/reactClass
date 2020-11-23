import {combineReducers} from 'redux';
import randomReducer from './ramdomReducer';
const allReducer = combineReducers({
    randomReducer,
});

export default allReducer;