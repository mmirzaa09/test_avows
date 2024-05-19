import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store/reducers';
import StackComponent from './src';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackComponent/>
            </NavigationContainer>
        </Provider>
    )
}

export default App