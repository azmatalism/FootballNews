import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS, IMGS, ROUTES } from '../../constants';
import RadialGradient from 'react-native-radial-gradient';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Register({navigation}) {
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
        <Text style={styles.textSignIn}>{"JOIN"}</Text>
        <Text style={[styles.title, { position: "absolute", bottom: 50, left: 20 }]}>{"CREATE YOUR NEWS CLUB ID"}</Text>
        <Text style={[styles.shortDec, { position: "absolute", bottom: 15, left: 20 }]}>{"Get news,game updates highlights and more info on your favorite teams"}</Text>
      </RadialGradient>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {/***************** SIGN IN BUTTON *****************/}
        <LinearGradient colors={[COLORS.btnLiner1, COLORS.btnLiner2]} style={styles.signInSignUpBtn}
          start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(ROUTES.LOGIN)}>
            <Text style={styles.signInSignUpBtnText}>{"Sign in"}</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/***************** SIGN UP BUTTON *****************/}
        <TouchableOpacity activeOpacity={0.8} 
          style={[styles.signInSignUpBtn, { marginLeft: 30, backgroundColor: COLORS.bgColor }]}>
          <Text style={styles.signInSignUpBtnText}>{"Sign up"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wFull}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="New Password" />
        <TextInput style={styles.input} placeholder="Confirm Password " />
        {/***************** FORGOT PASSWORD BUTTON *****************/}
        <Text style={[styles.descText, { marginTop: 20 }]}>{"Password must be at least 8 character long and include 1 capital letter and 1 symbol"}</Text>
       
        <LinearGradient colors={[COLORS.btnLiner1, COLORS.btnLiner2]} style={styles.linearGradient}
          start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
          {/******************** LOGIN BUTTON *********************/}
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(ROUTES.LOGIN)} 
            style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>{"Create Account"}</Text>
          </TouchableOpacity>
        </LinearGradient>
       
      </View>
    </SafeAreaView>
  )
}

export default Register

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
    fontFamily:'Manrope-Medium',
    fontWeight: "300",
    letterSpacing: 2,
    textAlign:'justify'
  },
  shortDec: {
    width:'90%',
    color: COLORS.white,
    fontSize: 12,
    fontFamily:'Manrope-Medium',
    fontWeight: "300",
    letterSpacing: 2,
    textAlign:'justify'
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
    textAlign: 'justify',
  },

});