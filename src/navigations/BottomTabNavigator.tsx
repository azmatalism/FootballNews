import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import { Home, Settings, Categories } from '../screens'
import { COLORS, IMGS, ROUTES } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ focused, source }) => (
    <View style={[styles.ActiveTintColor, {backgroundColor: focused ? COLORS.red : COLORS.bgColor}]}>
        <Image source={source} />
    </View>
);

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
            })}>

            <Tab.Screen name={ROUTES.HOME_TAB} component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon focused={focused} source={IMGS.home} />),
            }} />
            <Tab.Screen name={ROUTES.CATEGORIRS} component={Categories} options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon focused={focused} source={IMGS.categories} />),
            }} />
            <Tab.Screen name={ROUTES.SETTINGS} component={Settings} options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTabBarIcon focused={focused} source={IMGS.setting} />),
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        position:'absolute',
        backgroundColor: COLORS.bgColor,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderTopWidth:0,
        height:90,
    },
    ActiveTintColor: {
        width: 45,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})