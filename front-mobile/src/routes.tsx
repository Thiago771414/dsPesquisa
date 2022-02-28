import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from './pages/Home';
import CreateRecord from './pages/CreateRecord';

const Routes = () => {
    return (
       <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#0B1F34'
                    },
                    headerShown: false 
                }}
            >
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Stack.Screen options={{headerShown: false}} name="CreateRecord" component={CreateRecord} />

           </Stack.Navigator>
       </NavigationContainer> 
    )
};

export default Routes;