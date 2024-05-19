import { createStackNavigator } from '@react-navigation/stack';
import EditContact from './pages/edit';
import Index from './route/TabNavigator';

const Stack = createStackNavigator();

export default StackComponent = () =>  {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={Index} options={{headerShown: false}}/>
            <Stack.Screen name="Edit" component={EditContact} />
        </Stack.Navigator>
    );
};