import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TextInput, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import { COLORS, DATA, IMGS, ROUTES } from '../../constants'
import RadialGradient from 'react-native-radial-gradient';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'



function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.bgColor} barStyle='light-content' />
      <RadialGradient style={{ height: '100%', width: '100%' }} colors={[COLORS.red, COLORS.bgColor]} stops={[.9, 0.7, 0.8, 0.5]} >
        <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(255, 0, 0, 0.1)']} style={{ height: '100%', width: '100%', }}>


          {/******************** SEARCH INPUT AND LIVE BUTTON *********************/}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <TextInput style={styles.input} placeholder="Search" placeholderTextColor={COLORS.grayLight} />
            <Image source={IMGS.live} style={{ marginRight: 24 }} />
          </View>

          {/******************** BIG LIST *********************/}
          <View>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) =>
                <View style={styles.bigView}>
                  <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(ROUTES.VVIEW_ARTICLE, { DATA: item })}>
                    <ImageBackground source={item.image} imageStyle={{ height: "100%", width: "100%", borderRadius: 20 }} >
                      <LinearGradient colors={['rgba(0, 0, 0, 0)', '#141E2800']} style={styles.bigGradient}>
                        <LinearGradient colors={['rgba(0, 0, 0, 0)', '#141E28']} style={styles.bigGradient2}>
                          <LinearGradient colors={['rgba(0, 0, 0, 0)', '#141E28EB']} style={styles.bigGradient2}>

                            <Text style={styles.textCategory}>{item.category}</Text>
                            <Text style={styles.textHeading}>{item.heading}</Text>

                          </LinearGradient>
                        </LinearGradient>
                      </LinearGradient>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>} />
          </View>



          {/******************** LEFT ARROW *********************/}
          <Ionicons name={'arrow-forward-circle-outline'} size={22} color={COLORS.white} style={{ alignSelf: 'flex-end', marginRight: 24, }} />

          {/******************** SMALL LIST *********************/}
          <View style={{ flex: 1 }}>
            <FlatList
              data={DATA}
              renderItem={({ item }) =>
              <View>
                <TouchableOpacity style={styles.secondList} activeOpacity={0.8}
                  onPress={() => navigation.navigate(ROUTES.VVIEW_ARTICLE, { DATA: item })}>
                  <Image source={item.image} style={{ height: 100, width: 100, borderRadius: 16 }} />
                  <View style={{ marginHorizontal: 20, marginVertical: 4 }}>
                    <Text style={styles.textCategory2}>{item.category}</Text>
                    <Text style={styles.textHeading2}>{item.heading}</Text>
                  </View>
                </TouchableOpacity>
                </View>
              }/>
          </View>
        </LinearGradient>
      </RadialGradient>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: 270,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.gray,
    padding: 15,
    marginVertical: 10,
    marginLeft: 24,
    marginRight: 63,
    borderRadius: 5,
  },
  bigView: {
    height: 311,
    width: 311,
    marginHorizontal: 24,
    marginVertical: 24,
  },
  bigGradient: {
    height: "100%",
    width: "100%",
  },
  bigGradient2: {
    height: "100%",
    width: "100%",
    justifyContent: 'space-between',
    borderRadius: 20,

  },
  textCategory: {
    color: COLORS.white,
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  textHeading: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'AlfaSlabOne-Regular',
    fontWeight: '400',
    marginBottom: 20,
    marginHorizontal: 15
  },
  secondList: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 24,
    alignItems: 'center',
    marginVertical: 10
  },
  textCategory2: {
    color: COLORS.grayLight,
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    fontWeight: '400'
  },
  textHeading2: {
    width: '40%',
    color: COLORS.white,
    fontSize: 18,
    fontFamily: 'Almarai-ExtraBold',
    fontWeight: '700'
  },
});