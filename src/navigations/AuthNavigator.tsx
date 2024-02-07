import React from 'react'
import { SplashScreen, IntroScreen, Login, ForgotPassword, Register, ViewArticle } from '../screens'
import { ROUTES } from '../constants'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SPLASH} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
      <Stack.Screen name={ROUTES.INTRO} component={IntroScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.VVIEW_ARTICLE} component={ViewArticle} />
      <Stack.Screen name={ROUTES.HOME} component={BottomTabNavigator}
        //Hide All Bottom Tab Screen Header
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthNavigator;