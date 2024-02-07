import React from 'react'
import { View, Text, StatusBar, Image, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import { COLORS, DATA } from '../../constants'
import RadialGradient from 'react-native-radial-gradient'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'

function Categories({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.bgColor} barStyle='light-content' />
            <RadialGradient style={styles.container} colors={[COLORS.red, COLORS.bgColor]} stops={[.9, 0.7, 0.8, 0.5]} >
                <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(255, 0, 0, 0.1)']} style={{ height: '100%', width: '100%', }}>
                    {/******************** Go Back *********************/}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.goBack} onPress={navigation.goBack}>
                            <Ionicons name={'arrow-back'} size={22} color={COLORS.white} />
                        </TouchableOpacity>
                        <Text style={styles.goBackText}>{'Choose your News Categories'}</Text>
                    </View>
                    <FlatList
                        data={DATA}
                        numColumns={3}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <View style={{ margin: '2%' }}>
                                <View style={styles.main}>
                                    <View style={styles.imgContainer}>
                                        <Image source={item.image} style={styles.img} />
                                    </View>
                                    <Text style={styles.categoryText}>{item.category}</Text>
                                </View>
                            </View>} />
                </LinearGradient>
            </RadialGradient>
        </SafeAreaView>
    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    goBack: {
        marginLeft: 24,
        marginVertical: 10,
        alignSelf: 'flex-start',
    },
    goBackText: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Poppins-Medium',
        color: COLORS.white,
        lineHeight:24,
        marginLeft:20,
    },
    main: {
        height: 118,
        width: 112,
        borderRadius: 6,
        backgroundColor: '#3A3B3C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgContainer: {
        height: 84,
        width: 96,
        borderRadius: 6,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 40
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Medium',
        color: COLORS.white
    },

})

