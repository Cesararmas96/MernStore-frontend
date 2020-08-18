import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyle = makeStyles((theme) => ({
	root:{
		width: 250,
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},


  title:{
		fontWeight: [600],
		color: theme.palette.text.secondary,
		marginBottom: theme.spacing(1),

	},
}))

const FiterBy = () => {

	const classes = useStyle();


	return(
		<Paper className={classes.root}>

			<Typography variant="h5" className={classes.title}>FILTER BY</Typography>

				<FormControl component="fieldset">
					<FormGroup>
						<FormControlLabel control={ <Checkbox name="BestSeller"/> } label="Best Seller" />
						<FormControlLabel control={ <Checkbox name="Featured"/> } label="Featured" />
						<FormControlLabel control={ <Checkbox name="TopRated"/> } label="Top Rated" />
					</FormGroup>
				</FormControl>
		</Paper>
	)
}

export default FiterBy;