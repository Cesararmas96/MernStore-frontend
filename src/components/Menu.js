import React, {Fragment, useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({

	root:{
		width: 250,
		padding: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},

	nested: {
    paddingLeft: theme.spacing(4),
  },

  title:{
		fontWeight: [600],
		color: theme.palette.text.secondary,
		marginBottom: theme.spacing(1),

	},

		
}))
 
const Menu = () =>{
	const classes = useStyle();
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	}


	return(
		<Fragment>
			<Paper className={classes.root}>
				<Typography variant="h5" className={classes.title}>
					BROWSE
				</Typography>
			  	<Divider/>

				    <List
				      component="nav"
				      aria-labelledby="nested-list-subheader"
				    >

					    <ListItem button>
					       <ListItemText primary="T-Shert" />
					    </ListItem>
					    <Divider/>

					    <ListItem button>
					       <ListItemText primary="Pant" />
					    </ListItem>
					  	<Divider/>


					     <ListItem button>
					       <ListItemText primary="Bag" />
					    </ListItem>
			  			<Divider/>


					     <ListItem button onClick={handleClick}>
					       <ListItemText primary="Shoes" />
					       { open ? <ExpandLess/> : <ExpandMore/> }
					    </ListItem>

					    <Collapse in={open} timeout="auto" unmountOnExit>
				        <List component="div" disablePadding className={classes.nested}>
				          <ListItem button>				            
				            <ListItemText primary="Deportivos" />				          
				          </ListItem>
				          <Divider/>

				          <ListItem button>				            
				            <ListItemText primary="Casuales" />				          
				          </ListItem>
				          <Divider/>

				          <ListItem button>				            
				            <ListItemText primary="Coptel" />				          
				          </ListItem>
				          <Divider/>

				        </List>
				      </Collapse>
							<Divider/>


					    <ListItem button>
					       <ListItemText primary="Accesorios" />
					    </ListItem>
					    <Divider/>
				    </List>

				    <Typography variant="h6" className={classes.title} >
							GENERO
						</Typography>
					  	<Divider/>
						

						<FormControl component="fieldset">
							<FormGroup>
								<FormControlLabel control={ <Checkbox name="men"/> } label="Men" />
							
								<FormControlLabel control={ <Checkbox name="wonmen"/> } label="Women" />
							</FormGroup>
						</FormControl>


			</Paper>
		</Fragment>
	)
}

export default Menu;
