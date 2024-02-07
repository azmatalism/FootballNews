import React from 'react'
import { View, Text, StatusBar, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { COLORS, IMGS, ROUTES } from '../../constants'
import RadialGradient from 'react-native-radial-gradient'
import LinearGradient from 'react-native-linear-gradient'

function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.bgColor} barStyle='light-content' />
      <RadialGradient style={{ height: '100%', width: '100%' }} colors={[COLORS.red, COLORS.bgColor]} stops={[.9, 0.7, 0.8, 0.5]} >
        <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(255, 0, 0, 0.1)']} style={{ height: '100%', width: '100%', }}>
          {/******************** PROFILE *********************/}
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image source={IMGS.profile} style={{ marginLeft: 30, marginTop: 60 }} />
            <View style={{ marginLeft: 10, marginTop: 60 }}>
              <Text style={styles.profileName}>{"Leslie Alexander"}</Text>
              <Text style={styles.phtoText}>{"Photographer"}</Text>
            </View>
          </View>
          {/******************** PRIVACY *********************/}
          <TouchableOpacity activeOpacity={0.8} onPress={() => console.warn('Privacy Clicked')}>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <LinearGradient colors={['#9C1E1E', 'red']} style={styles.iconHolder}>
                <Image source={IMGS.privacy} />
              </LinearGradient>
              <Text style={styles.settingText}>Privacy</Text>
            </View>
          </TouchableOpacity>
          {/******************** TERM *********************/}
          <TouchableOpacity activeOpacity={0.8} onPress={() => console.warn('Term Clicked')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <LinearGradient colors={['#9C1E1E', 'red']} style={styles.iconHolder}>
              <Image source={IMGS.term} />
            </LinearGradient>
            <Text style={styles.settingText}>{"Terms & Conditions"}</Text>
          </View>
          </TouchableOpacity>
          {/******************** ABOUT *********************/}
          <TouchableOpacity activeOpacity={0.8} onPress={() => console.warn('About Clicked')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <LinearGradient colors={['#9C1E1E', 'red']} style={styles.iconHolder}>
              <Image source={IMGS.about} />
            </LinearGradient>
            <Text style={styles.settingText}>{"About Us"}</Text>
          </View>
          </TouchableOpacity>
          {/******************** CONTACT *********************/}
          <TouchableOpacity activeOpacity={0.8} onPress={() => console.warn('Contact Clicked')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <LinearGradient colors={['#9C1E1E', 'red']} style={styles.iconHolder}>
              <Image source={IMGS.contact} />
            </LinearGradient>
            <Text style={styles.settingText}>{"Contact Us"}</Text>
          </View>
          </TouchableOpacity>
          {/******************** RATE *********************/}
          <TouchableOpacity activeOpacity={0.8} onPress={() => console.warn('Rate Clicked')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <LinearGradient colors={['#9C1E1E', 'red']} style={styles.iconHolder}>
              <Image source={IMGS.star} />
            </LinearGradient>
            <Text style={styles.settingText}>{"Rate Us"}</Text>
          </View>
          </TouchableOpacity>
          {/******************** SHARE *********************/}
          <TouchableOpacity activeOpacity={0.8} onPress={() => console.warn('Share Clicked')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <LinearGradient colors={['#9C1E1E', 'red']} style={styles.iconHolder}>
                <Image source={IMGS.share} />
              </LinearGradient>
              <Text style={styles.settingText}>{"Share App"}</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </RadialGradient>
    </SafeAreaView>
  )
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileName: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
  },
  phtoText: {
    color: COLORS.white,
    fontFamily: 'DM-Mono',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
  },
  iconHolder: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.red,
    borderRadius: 12,
    marginLeft: 24,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingText: {
    color: COLORS.white,
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    marginLeft: 20,
    marginTop: 7,
  },



})