import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Image, StatusBar, SafeAreaView } from 'react-native'
import { COLORS, IMGS, ROUTES } from '../../constants';
import RadialGradient from 'react-native-radial-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen({ navigation }) {

  //Handle first launched and timeout
  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const isFirstLaunch = await AsyncStorage.getItem('@firstLaunch');
        if (isFirstLaunch === null) {
          // App is launched for the first time
          await AsyncStorage.setItem('@firstLaunch', 'false');
          navigation.navigate(ROUTES.INTRO);
        } else {
          // App is not launched for the first time
          navigation.navigate(ROUTES.LOGIN);
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
        // Handle error if needed
      }
    };
    const timeout = setTimeout(() => {
      checkFirstLaunch();
    }, 1000);
    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.bgColor} barStyle='light-content' />
      <RadialGradient style={[styles.container, styles.centralize]}
        colors={['red', '#1B1B1B']} stops={[.9, 0.7, 0.8, 0.5]} >
        <Image source={IMGS.icon} style={{ marginTop: 20 }} />
        <View style={{ marginHorizontal: 10, }}>
          <Text style={styles.title}>Football</Text>
          <Text style={styles.subTitle}>News Club</Text>
        </View>
      </RadialGradient>
      {/* <RadialGradient style={[styles.container, styles.centralize]} colors={['red', '#1B1B1B']} stops={[.9, 0.7, 0.8, 0.5]} >

            </RadialGradient> */}
    </SafeAreaView>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centralize: {
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    color: COLORS.white,
    fontSize: 43,
    fontWeight: "700"
  },
  subTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "300",
    letterSpacing: 4,
    position: 'absolute',
    top: 45
  },
})