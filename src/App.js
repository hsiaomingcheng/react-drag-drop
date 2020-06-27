import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled from 'styled-components';
import rootReducer from '../redux/reducers';

import Home from './pages/Home';

const store = createStore(rootReducer);

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Provider store={store}>
                <AppContainer className="app">
                    <Home />
                </AppContainer>
            </Provider>
        );
    }
}

export default hot(module)(App);

const AppContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;
