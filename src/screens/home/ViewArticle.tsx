import React from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, IMGS } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'

function ViewArticle({route, navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar backgroundColor={COLORS.bgColor} barStyle='light-content' /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground source={route.params.DATA.image} imageStyle={{ height: 337, width: '100%' }}>
                <View style={styles.imgInner}>
                    {/******************** Go Back *********************/}
                    <TouchableOpacity activeOpacity={0.5} style={styles.goBack} onPress={navigation.goBack}>
                        <Ionicons name={'arrow-back'} size={22} color={COLORS.white} />
                    </TouchableOpacity>
                    {/******************** Icon Holder *********************/}
                    <View style={styles.iconHolder}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image source={IMGS.message} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image source={IMGS.shares} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image source={IMGS.save} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image source={IMGS.font} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image source={IMGS.sound} />
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
            {/******************** Text Holder *********************/}
            <View style={styles.textHolder}>
                <Text style={styles.dateText}>{'Harry Harper · Apr 12, 2023'}</Text>
                <Text style={styles.headingText}>{route.params.DATA.heading}</Text>
                <Text style={styles.descText}>{'Mikel Arteta enters his fifth year as an Arsenal coach and he has successfully transformed the club into something brand new during his time at the helm, with his side aiming for a historic feat \n\n Mikel Arteta has now entered his fifth year in charge of Arsenal (whether it be as head-coach or manager), having won the FA Cup and picked up two Community Shields. Many might point to this as being an underachievement for a club of the stature of Arsenal but that would be ignoring some major details of his tenure.\n\nWhat Arteta has done during this short time is take the club from a side on a slide and turn them into established title challengers. Last season,s effort had been mused to potentially be simply a surprise but as Arteta reaches this milestone, his side again sits top of the Premier League table, five points ahead of Manchester City having already beaten them this season.\n\nHe has transformed the club,s recruitment policy. Before he arrived Arsenal were known for finding gems outside of the K and typically only bringing in-depth options like Calum Chambers, Danny Welbeck, Mathieu Debuchy and David Luiz.plants and animals, many of which are found nowhere else on earth. Forests also provide a source of food and medicine for many communities around the world. In fact, it is estimated that around 80% of the world,s population relies on traditional medicine derived from plants, many of which are found in forests.\n\nIn addition to their ecological and cultural importance, forests also provide economic benefits. They provide jobs and income for millions of people around the world, particularly in rural areas. Forests also provide timber, paper, and other products that are essential to many industries.'
                }</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ViewArticle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgInner: {
        height: 337,
        width: "100%",
        justifyContent: 'space-between',

    },
    goBack: {
        marginLeft: 24,
        marginTop: 24,
        alignSelf: 'flex-start',
    },
    iconHolder: {
        height: 43,
        width: 300,
        borderRadius: 10,
        opacity: 0.8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderWidth: .7,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.gray,
        marginBottom: 40,
    },
    textHolder: {
        top:-25,
        height:'100%',
        width: '100%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 24,
        backgroundColor: '#1C1B1B'
    },
    dateText: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Inter-Regular',
        color: COLORS.grayLight
    },
    headingText: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
        marginTop: 10,
        fontFamily: 'Inter-Regular',
        color: COLORS.grayLight
    },
    descText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        marginTop: 10,
        fontFamily: 'Inter-Regular',
        color: COLORS.grayLight
    },

});