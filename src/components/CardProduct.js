import React, {Fragment} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import NumberFormat from 'react-number-format';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import imgFake from '../images/ing.PNG'


const useStyle = makeStyles((theme) => ({

	root:{
		width: 220,
		height: 400,
	},

	boton:{
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
	},

	prices:{
		display: 'flex',
		alignItems: 'center',
    marginTop: theme.spacing(),
	},

	priceTotal:{
		color: theme.palette.success.dark,
		fontWeight: [600],
		marginRight: theme.spacing(2)
	},

	priceBase:{
		fontSize: '14px',
		textDecoration: 'line-through'
	},

	img:{
		width: 'auto',

	
	},

	discountLabel:{
		position: 'absolute',
		width: '55px',
		height: '30px',
		fontWeight: [600],
		backgroundColor: theme.palette.icon,
		color: theme.palette.white,
		top: theme.spacing(1),
		left: theme.spacing(1),
		right: 'auto',
		borderRadius: '10%',
		display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center',
	}


	
}))



const CardProduct = ({producto}) => {
	const classes = useStyle();
	const { name, priceBase, img, discount} = producto;
	
	const discountPrice = () => {
		let priceTotal = priceBase - (priceBase * (discount / 100)); 
		return priceTotal;
	}
	

	return(
		<Card className={classes.root}> 

			<CardActionArea>
			{ discount ? <span className={classes.discountLabel}>- {discount}%</span> : null }
				<CardMedia 
          component="img"
					image={imgFake}
          title={name}
          className={classes.img}
        />
			</CardActionArea>

				<CardContent >
					<Typography variant="h6">
						{name}
					</Typography>

					<div className={classes.prices}>
						{ discount 
							?
							<Fragment>
								<Typography variant="subtitle1" className={classes.priceTotal}>  
									${discountPrice() }

								</Typography> 

								<Typography variant="body2" className={classes.priceBase}>
									${priceBase}
								</Typography>
							</Fragment>
							:
							<Typography variant="subtitle1" className={classes.priceTotal}>
								${priceBase}
							</Typography>
						}
					</div>
				</CardContent>
		</Card>
	)
}

export default CardProduct;