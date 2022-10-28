import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyle from '../../Style/GlobalStyle'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { moderateScale, scale } from 'react-native-size-matters'
import { iconSize, mainColor, mediumFont, normalText } from '../../DesignTheme'

const Distribution = ({navigation}) => {
    const riderData=[
        {}
    ]
    // There are 15 orders for a day and 5 delivery persons are available. So this page will allow admin to distribute orders among different delivery persons.
    let date=new Date().toDateString()
    return (
        <SafeAreaView style={GlobalStyle.container}>
            <View style={GlobalStyle.container}>
                {
                    <View style={GlobalStyle.backBtnContainer}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}
                     style={GlobalStyle.backBtn}>
                        <AntDesign name='left' size={iconSize-5}/>
                        <Text style={GlobalStyle.backButtonText}> Distribution</Text>
                    </TouchableOpacity>
                </View>
                }

                {
                    <View style={[GlobalStyle.commonWidth,styles.dateAndProductDetail]}>          
                    <Text style={{fontFamily:mediumFont,fontSize:normalText+2,color:mainColor,paddingVertical:moderateScale(10)}}>{date}</Text>
                    <Text style={styles.totalProduct}>Total Product 10</Text>
                    </View>
                }

                {

                    <View style={GlobalStyle.commonWidth}>
                        <View style={styles.riderAvilableCard}>
                            <View>
                                
                            </View>
                        </View>
                    </View>
                }
            </View>
        </SafeAreaView>
    )
}

export default Distribution

const styles = StyleSheet.create({
    dateAndProductDetail:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    totalProduct:{
        fontSize:moderateScale(16),
        fontFamily:mediumFont
    },
    riderAvilableCard:{
        borderWidth:1,
        paddingVertical:moderateScale(10)
    }
})