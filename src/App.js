import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import Header from './components/header';
import Routes from './routes';
import NotFound from './components/notFound';
import {GlobalStyles} from './components/global';


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})
class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyles />
                <Router>
                        <Header />
                        <Switch>
                        { 
                            Routes.map( (route, index) => (
                                <Route
                                    path={route.path}
                                    component={route.component}
                                    exact={route.exact}
                                    key={`${route.component}-${index}`} />
                        )) 
                        }
                        <Route component={NotFound} />
                        </Switch>
                </Router>
            </Fragment>
        );
    }
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
