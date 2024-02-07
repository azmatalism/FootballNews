import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, Dimensions, SafeAreaView, StatusBar } from 'react-native'
import RadialGradient from 'react-native-radial-gradient';
import { COLORS, IMGS, ROUTES } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { width, } = Dimensions.get('window');
const slider = [
  {
    title: 'KEEP AN EYE ON\n THE STADIUM',
    image: IMGS.intro1,
  },
  {
    title: 'SCORER TO THE\n FINAL MATCH',
    image: IMGS.intro2,
  },
  {
    title: 'KEEP AN EYE ON\n THE STADIUM',
    image: IMGS.intro3,
  },

];

function IntroScreen({ navigation }) {
  
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const navigateToLoginScreen = () => {
    navigation.navigate(ROUTES.LOGIN);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slider.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    } else {
      navigateToLoginScreen();
    }
  };

  const skipAllSlide = () => {
    const lastSlideIndex = slider.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.bgColor} barStyle='light-content' />
      <RadialGradient style={[styles.container,]} colors={['red', '#1B1B1B']} stops={[.9, 0.7, 0.8, 0.5]} >
        <View style={styles.headerView}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image source={IMGS.icon} style={{ height: 60, width: 60, }} resizeMode='center' />
            <View style={{ marginLeft: 10, }}>
              <Text style={styles.title}>Football</Text>
              <Text style={styles.subTitle}>News Club</Text>
            </View>
          </View>
          
          <TouchableOpacity activeOpacity={0.8} onPress={skipAllSlide} style={styles.btnSkip}>
            <Text style={styles.skipText}>{"Skip"}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          renderItem={({ item }) =>
            <View style={styles.container}>
              <Image source={item?.image} style={styles.sliderImg} />
              <Text style={styles.sliderTitle}>{item?.title}</Text>
              {/* indicator */}
              <View style={styles.indicatorContainer}>
                {/* Render indicator */}
                {slider.map((_, index) => ( <View key={index} style={[styles.indicator,
                  currentSlideIndex == index && { backgroundColor: COLORS.white, width: 25, },]} />
                ))}
              </View>
              <TouchableOpacity activeOpacity={0.8} 
              onPress={goToNextSlide}
              style={styles.sliderBtn}>
                <Text style={styles.btnText}>{"Next"}</Text>
                <MaterialIcons name={'keyboard-arrow-right'} size={40} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          } />
      </RadialGradient>
    </SafeAreaView>
  )
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 40,
  },
  btnSkip: {
    width: 80,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center'
  },
  skipText: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: "500",
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
  sliderImg: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width,
  },
  sliderTitle: {
    color: COLORS.white,
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 50,
  },
  sliderBtn: {
    width: "90%",
    height: 72,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: "700",
  },
  indicatorContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 20, 
  },
  indicator: {
    height: 8,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 5,
  },

})