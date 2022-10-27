import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { iconSize, lightFont, mainColor, mediumText } from '../DesignTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'


const NavigationCard = ({name}) => {
    return (
        <View style={{ borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: scale(10), height: moderateScale(50), marginVertical: moderateScale(10), borderRadius: moderateScale(4), borderColor: mainColor }}>
            <Text style={{ color: mainColor, fontFamily: lightFont, fontSize: mediumText }}>{name}</Text>
            <AntDesign name='right' size={iconSize} color={mainColor} />
        </View>
    )
}

export default NavigationCard

const styles = StyleSheet.create({})