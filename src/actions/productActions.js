import { COMENZAR_DESCARGA_PRODUCTOS,
					DESCARGA_PRODUCTOS_EXITO, 
					DESCARGA_PRODUCTOS_ERROR } from '../types';

import clienteAxios from '../config/axios'


export function obtenerProductosAction(){
	return async (dispatch) => {
		dispatch(descargarProductos());

		try{
			const respuesta = await clienteAxios.get('/productos');
			dispatch(descargarProductosExitosa(respuesta.data));
		}catch(error){
			console.log(error)
			dispatch(descargarProductosError()); 
			
		}
	}
}

const descargarProductos = () => ({
	type : COMENZAR_DESCARGA_PRODUCTOS,
	payload: true
})

const descargarProductosExitosa = (productos) => ({
	type: DESCARGA_PRODUCTOS_EXITO,
	payload: productos
});


const descargarProductosError = () => ({
	type: DESCARGA_PRODUCTOS_ERROR,
	payload: true
})