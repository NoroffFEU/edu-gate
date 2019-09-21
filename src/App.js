import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import style from './style.scss';

class App extends Component {
    render(){
        return (
            <div className="App">
                <h1> Welcome to Edugate !!!</h1>
            </div>
        );
    }
}

export default hot(module)(App);
