import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {  grey,  iconSize, lightFont, mainColor, mediumFont, mediumText,  white } from '../../Component/DesignTheme'
import { moderateScale, scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const Admin = () => {
    const navigation=useNavigation()
    const [activetab, setActivetab] = useState('Dashboard')
    const [showAddDeleviryModal, setShowAddDeleviryModal] = useState(false)


    return (
        <View style={styles.container}>

            {
                //#region  header start
                <View style={styles.bottomNaviagtion}>
                    <View style={styles.bottomNaviagtionInner}>
                        <TouchableOpacity onPress={()=>navigation.navigate('WareHouse')}
                         style={styles.navigationBtn}>
                            <AntDesign name='database' size={iconSize+15} color={mainColor} />
                            <Text style={[styles.btnText,]}>WareHouse</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('AdminOrder')}
                        style={styles.navigationBtn}>
                            <AntDesign name='shoppingcart'  size={iconSize+15} color={mainColor} />
                            <Text style={[styles.btnText, ]}>Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Delivery')}
                        style={styles.navigationBtn}>
                            <MaterialCommunityIcons name='bike-fast'  size={iconSize+15} color={mainColor} />
                            <Text style={[styles.btnText,]}>Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Distribution')}
                        style={styles.navigationBtn}>
                            <AntDesign name='user' size={iconSize+15} color={mainColor} />
                            <Text style={[styles.btnText, ]}>Distribution</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                //#endregion
            }

            {false &&
                //#region  Add Dellivery Button
                <View style={{ alignItems: 'flex-end', paddingHorizontal: scale(10), marginBottom: moderateScale(10) }}>
                    <TouchableOpacity onPress={() => { setShowAddDeleviryModal(true) }}
                        style={{
                            paddingVertical: moderateScale(7), paddingHorizontal: scale(5), backgroundColor: '#4285f4', borderRadius: moderateScale(4)
                        }}>
                        <Text style={{ fontFamily: mediumFont, color: white }}>Add Deleivery</Text>
                    </TouchableOpacity>
                </View>
                //#endregion
            }


        </View>
    )
}

export default Admin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    bottomNaviagtion: {
        // height: moderateScale(55),
    },
    navigationBtn: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'100%',
        borderWidth:1,
        height:moderateScale(100),
        marginVertical:scale(10),
        borderColor:mainColor,
        borderRadius:moderateScale(4),
        elevation:2,
        backgroundColor:'#ffff',
        flexDirection:'row',
        paddingHorizontal:scale(15)
    },
    bottomNaviagtionInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(10),
        flexWrap:'wrap'
    },
    btnText: {
        color: grey,
        fontSize: mediumText+5,
        fontFamily: lightFont,
        marginTop: moderateScale(3),
        color:mainColor
    },
    cardSubheading: {
        fontSize: mediumText,
        fontFamily: mediumFont,
        color: '#727272',
        width: '20%'
    },
    headingView: {
        flexDirection: 'row',
        paddingVertical: moderateScale(6)
    },
    userDeatilText: {
        fontSize: mediumText,
        fontFamily: lightFont,
        color: '#000',
        width: '80%'
    }
})