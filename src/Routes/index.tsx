import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import Login from '../Pages/Login';
import ConsProd from '../Pages/ConsProd';
import CadUsu from '../Pages/CadUser';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ConsProd" component={ConsProd} />
                <Stack.Screen name="Cadastro" component={CadUsu} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

//