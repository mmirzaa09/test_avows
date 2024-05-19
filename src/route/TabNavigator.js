import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import AddContact from '../pages/add';

const Tab = createBottomTabNavigator();

const Index = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='List' 
                component={List}
            />
            <Tab.Screen
                name='Add'
                component={AddContact}
            />
        </Tab.Navigator>
    )
}

export default Index