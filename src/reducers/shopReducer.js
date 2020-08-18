import { ADD_PRODUCT_CART } from '../types'

const initialState = {
	shop: []
}

export default function( state = initialState, action){
	switch(action.type){
		case ADD_PRODUCT_CART:
			return{
				
				shop: action.payload
			}
	}
}