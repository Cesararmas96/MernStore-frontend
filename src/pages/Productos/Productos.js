import	React from 'react'
import ProductList from '../../containers/ProductList'
import Browse from '../../containers/Browse'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
	root:{
		display: 'flex'
	}
}))

const Productos = () => {
	const classes = useStyle();

	return(
		<div className={classes.root}>
			<Browse/>
			<ProductList/>
		</div>
	)
}

export default Productos;
