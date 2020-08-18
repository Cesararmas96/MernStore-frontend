import { combineReducers } from 'redux'
import productosReducer from './productosReducer'
// import shopReducer from './shopReducer'

export default combineReducers({
	productos: productosReducer,

});