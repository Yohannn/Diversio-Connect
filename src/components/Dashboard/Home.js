import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions';
// import './App.css';

class Home extends Component { 
    render() {
        return (
            <div className="App">
                <div id="home">
                    Welcome to the home page
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, Actions)(Home);
