import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions';
// import './App.css';

class Analyze extends Component {
    componentDidMount () {
        this.props.initializeApp()
    }
    render() {
        return (
            <div className="App">
                Welcome to Analyze
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, Actions)(Analyze);
