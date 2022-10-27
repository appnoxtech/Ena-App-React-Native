import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { boldFont, grey, iconSize, lightFont, mainColor, mediumFont, mediumText, normalText, regularFont, samllText, semiBoldFont, white } from '../../Component/DesignTheme'
import { moderateScale, scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AddDeleiveryModal from '../../Component/Modal/AddDeleiveryModal'
import CommonCard from '../../Component/Common/CommonCard'

const Admin = () => {

    const [activetab, setActivetab] = useState('Dashboard')
    const [showAddDeleviryModal, setShowAddDeleviryModal] = useState(false)


    return (
        <View style={styles.container}>
            {
                //#region  Add Dellivery Button
                <View style={{alignItems:'flex-end',paddingHorizontal:scale(10),marginBottom:moderateScale(10)}}>
                    <TouchableOpacity onPress={()=>{setShowAddDeleviryModal(true)}}
                    style={{
                    paddingVertical:moderateScale(7),paddingHorizontal:scale(5),backgroundColor:'#4285f4',borderRadius:moderateScale(4)}}>
                        <Text style={{fontFamily:mediumFont,color:white}}>Add Deleivery</Text>
                    </TouchableOpacity>
                </View>
                //#endregion
            }
            {
                //#region call all component
                <View style={styles.ComponetsContainer}>
                    <ScrollView style={{}}>
                        <View style={{marginBottom:moderateScale(10)}}>
                        {[1,1,1,1,1,1,1,1,1].map((d,i)=>{
                            return(
                                <CommonCard/>
                            )
                        })}
                        </View>
                        
                    </ScrollView>
                </View>
                //#endregion
            }
            {
                //#region  header start
                <View style={styles.bottomNaviagtion}>
                    <View style={styles.bottomNaviagtionInner}>
                        <TouchableOpacity style={styles.navigationBtn}>
                            <AntDesign name='appstore1' color={activetab == 'Dashboard' ? mainColor : grey} size={iconSize} />
                            <Text style={[styles.btnText, { color: activetab == 'Dashboard' ? mainColor : grey }]}>DashBoard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationBtn}>
                            <AntDesign name='database' color={activetab == 'WareHouse' ? mainColor : grey} size={iconSize} />
                            <Text style={[styles.btnText, { color: activetab == 'WareHouse' ? mainColor : grey }]}>WareHouse</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationBtn}>
                            <MaterialCommunityIcons name='bike-fast' color={activetab == 'Delivery' ? mainColor : grey} size={iconSize} />
                            <Text style={[styles.btnText, { color: activetab == 'Delivery' ? mainColor : grey }]}>Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navigationBtn}>
                            <AntDesign name='appstore1' color={activetab == 'Dashboard1' ? mainColor : grey} size={iconSize} />
                            <Text style={[styles.btnText, { color: activetab == 'Dashboard1' ? mainColor : grey }]}>DashBoard1</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                //#endregion
            }

            {/* Add Deleivery Modal here */}
            <AddDeleiveryModal showAddDeleviryModal={showAddDeleviryModal} setShowAddDeleviryModal={setShowAddDeleviryModal} />
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
        height: moderateScale(55),
    },
    ComponetsContainer: {
        flex: 9,

    },
    navigationBtn: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomNaviagtionInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(10)
    },
    btnText: {
        color: grey,
        fontSize: samllText,
        fontFamily: lightFont,
        marginTop: moderateScale(3)
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