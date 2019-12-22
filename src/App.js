import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { hot } from 'react-hot-loader';
import style from './style.scss';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import Header from './components/header';
import Routes from './routes';
import NotFound from './components/notFound';


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})
class App extends Component {
    render() {
        return (
            <Router>
                <div>
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
                    
                </div>
            </Router>
        );
    }
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
