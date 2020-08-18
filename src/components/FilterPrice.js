import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const useStyle = makeStyles((theme) => ({

	root:{
		width: 250,
		padding: theme.spacing(1)
	},

	title:{
		fontWeight: [600],
		color: theme.palette.text.secondary,
		marginBottom: theme.spacing(1),

	},

	footer: {
		display: 'flex',
		justifyContent: 'space-between'

	},

	button:{
		
		backgroundColor: theme.palette.icon,
		color: theme.palette.white
	},

	price:{
		color: theme.palette.icon,
		alignSelf: 'center',

	},

	span:{
		fontWeight: [600],
	}
		
}))

function valuetext(value) {
  return `${value}°C`;
}

const FilterPrice = () =>{
	const classes = useStyle();
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return(
			<Card className={classes.root}>
					<Typography id="range-slider" gutterBottom variant="h5" className={classes.title}>
			     	FILTER BY PRICE
			  	</Typography>

			  	<Divider/>


		      <Slider
		      	className={classes.slider}
		        value={value}
		        onChange={handleChange}
		        valueLabelDisplay="auto"
		        aria-labelledby="range-slider"
		        getAriaValueText={valuetext}
		        min={0}
		        max={100}
		      />

		      <div className={classes.footer}>

			      <Button  variant="contained" disableElevation className={classes.button}>
			      	Filter
			      </Button> 
		      	<Typography className={classes.price} >Price: <span className={classes.span}> ${ value[0] } - ${value[1]}</span> </Typography>
		      </div>

			</Card>
	)
}

export default FilterPrice