import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Index from './src'
import { Provider } from 'react-redux'
import store from './src/store/reducers'

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Index/>
            </NavigationContainer>
        </Provider>
    )
}

export default App