import React from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Image, StatusBar } from 'react-native'
import { COLORS, IMGS, ROUTES, } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';

function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/******************** STATUS BAR COLOR *********************/}
      <StatusBar backgroundColor={COLORS.bgColor} barStyle='light-content' />
      <RadialGradient style={{ height: 270, width: '100%' }} colors={['red', '#1B1B1B']} stops={[.9, 0.7, 0.8, 0.5]} >
        <View style={styles.logoView}>
          <Image source={IMGS.icon} style={{ height: 60, width: 60, }} resizeMode='center' />
          <View style={{ marginLeft: 10, }}>
            <Text style={styles.title}>{"Football"}</Text>
            <Text style={styles.subTitle}>{"News Club"}</Text>
          </View>
        </View>
        <Text style={styles.textSignIn}>{"SIGN IN"}</Text>
        <Text style={[styles.title, { position: "absolute", bottom: 20, left: 20 }]}>{"SIGN IN WITH YOUR\nNEWS CLUB ID"}</Text>
      </RadialGradient>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/***************** SIGN IN BUTTON *****************/}
        <LinearGradient colors={[COLORS.btnLiner1, COLORS.btnLiner2]} style={styles.signInSignUpBtn}
          start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.signInSignUpBtnText}>{"Sign in"}</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/***************** SIGN UP BUTTON *****************/}
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(ROUTES.REGISTER)}
          style={[styles.signInSignUpBtn, { marginLeft: 30, backgroundColor: COLORS.bgColor }]}>
          <Text style={styles.signInSignUpBtnText}>{"Sign up"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wFull}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        {/***************** FORGOT PASSWORD BUTTON *****************/}
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
          <Text style={styles.forgotPassText}>{"Forgot Password?"}</Text>
        </TouchableOpacity>
        <LinearGradient colors={[COLORS.btnLiner1, COLORS.btnLiner2]} style={styles.linearGradient}
          start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
          {/******************** LOGIN BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.HOME)}
            activeOpacity={0.7}
            style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>{"Sign in"}</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={[styles.descText, { marginTop: 20 }]}>{"Your News Club account is now New Club ID. If you’ve signed into the app before, use the same credentials here. otherwise"}</Text>
        <Text style={[styles.signInSignUpBtnText, { color: COLORS.gray }]}>{"OR"}</Text>
        <Text style={styles.descText}>{"Sign in with"}</Text>
        <View style={styles.googleAppleWraper}>
          <TouchableOpacity style={styles.googleApple} onPress={() => console.warn('Google Clicked')}>
            <Image source={IMGS.google} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleApple} onPress={() => console.warn('Apple Clicked')}>
            <Image source={IMGS.apple} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    flexDirection: 'row',
    marginTop: 40, marginLeft: 10,
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: "500",
  },
  subTitle: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "300",
    letterSpacing: 2,
  },
  textSignIn: {
    color: COLORS.white,
    fontSize: 65,
    fontWeight: "900",
    position: "absolute",
    bottom: 10,
    right: 0,
    opacity: 0.3,
    fontFamily: "BebasNeue",
    transform: [{ scaleY: 1.5 }]
  },
  signInSignUpBtn: {
    width: "40%",
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  signInSignUpBtnText: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    fontWeight: "400",
    textAlign: 'center',
  },
  wFull: {
    width: '100%',
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    backgroundColor: COLORS.inputBg,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  forgotPassText: {
    color: COLORS.gray,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  signInBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 72,
  },
  signInBtnText: {
    color: COLORS.white,
    fontSize: 21,
    fontFamily: 'Inter-Regular',
    fontWeight: "700",
    textAlign: 'center',
  },
  linearGradient: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  descText: {
    color: COLORS.gray,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
    textAlign: 'center',
  },
  googleApple: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  googleAppleWraper: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

});