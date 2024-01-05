import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CreateDrawerNavigator from 'react-navigation/drawer';
import { TabNavigation } from '@react-navigation/native';   
import Profile from '../screens/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={TabNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;