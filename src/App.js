import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
// Redux
import { Provider} from 'react-redux';
import store from './store';

//Theme material-ui
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './theme';
import { makeStyles } from "@material-ui/core";


//Pages
import Products from './pages/Productos/Productos'
import SingInSide from './pages/SingInSide'
import Dashboard from './pages/Dashboard/Dashboard'
import Blog from './pages/Blog/Blog'
import Album from './pages/Album/Album'
import Pricing from './pages/Pricing'

//Components
import AppBarMenu from './components/AppBarMenu'
import Footer from './components/Footer'

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
 
}));


function App () {
    const classes = useStyle();

    return (
      <Fragment >
        <ThemeProvider theme={theme}>
            <AppBarMenu />
            <div className={classes.root}>
              <Router>
                <Provider store={store}>                      
                  <Switch>
                    <div className="main">
                      <div className="content">
                        <Route exact path={'/'} render={() => {
                            return <Redirect to={'/products'}/>
                        }}/>
                        <Route exact path={'/productos'} component={Products}/>
                        <Route exact path={'/SingInSide'} component={SingInSide}/>
                        <Route exact path={'/Dashboard'} component={Dashboard}/>
                        <Route exact path={'/Blog'} component={Blog}/>
                        <Route exact path={'/Album'} component={Album}/>
                        <Route exact path={'/Pricing'} component={Pricing}/>
                      </div>
                    </div>
                  </Switch>
                </Provider>
              </Router>
            </div>
        </ThemeProvider>
        <Footer/>
      </Fragment>
    );
  
}

export default App;
