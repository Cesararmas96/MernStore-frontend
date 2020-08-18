import { ADD_PRODUCT_CART } from '../types'

export function addProductToCartAction(product){
	return async (dispatch) =>{
		dispatch(addProductToCart(product))
		console.log(product)

	}
}

const addProductToCart = product => ({
	type: ADD_PRODUCT_CART,
	payload: product
})