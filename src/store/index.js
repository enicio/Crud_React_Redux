import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';


const rootReducer = combineReducers({ listReducer });

const store = createStore( rootReducer );


// const store = createStore(
//   combineReducers({
//     ...rootReducer,
//     routing: routerReducer
//   })
// )

export default store;
