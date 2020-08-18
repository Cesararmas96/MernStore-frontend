import React, { useEffect } from 'react'
import { withWidth, Grid }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {useSelector, useDispatch} from 'react-redux';

import { obtenerProductosAction } from '../actions/productActions'
import CardProduct from '../components/CardProduct'

const useStyle = makeStyles((theme)=>({
  root:{
    maxWidth: '1000px',
  }
}))

const Products = (props) => {
  const classes = useStyle();
  const dispatch = useDispatch();


  useEffect(() => {
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
    // eslint-disable-next-line
  }, [])

  const productos = useSelector(state =>state.productos.productos);
  console.log(productos);

	return(

					
    <Grid container spacing={2} className={classes.root}>
       {productos.map((producto) => {
        return(
          <Grid item>
            <CardProduct  key={producto.id} producto={producto}/>
          </Grid>
        )
       })}
    </Grid>

	)
}

export default withWidth()(Products);
