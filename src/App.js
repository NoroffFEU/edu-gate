import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import style from './style.scss';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})
class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
    }
    render(){
        return (
            <div className="App">
                <h1> Welcome to Edugate !!!</h1>
                <button onClick={this.simpleAction}>Test redux action</button>
                <pre>
                    {
                        JSON.stringify(this.props)
                    }
                </pre>
            </div>
        );
    }
}

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));

