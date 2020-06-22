import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <AppContainer className="app">
                <H1> 簡易計算機, this is made by React! </H1>
            </AppContainer>
        );
    }
}

export default hot(module)(App);

const H1 = styled.h1`
    color: red;
`;

const AppContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;
