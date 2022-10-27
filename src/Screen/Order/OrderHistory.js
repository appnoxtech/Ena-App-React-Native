import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { iconSize, lightFont, mainColor, mediumFont, mediumText, normalText } from '../../Component/DesignTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { moderateScale, scale } from 'react-native-size-matters'
import TrackOrderModal from '../../Component/Modal/TrackOrderModal'

const OrderHistory = ({ route }) => {
    const navigetion = useNavigation()
    const [orderStatus, setOrderStatus] = useState('upComming')
    const [orderTrakeModal, setOrderTrakeModal] = useState(false)
    const orderStatusHandler = (type) => {
        setOrderStatus(type)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {
                    //#region  hedare start
                    <View style={styles.headerConatiner}>
                        <TouchableOpacity onPress={() => navigetion.goBack()}
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name='left' size={iconSize} />
                            <Text style={styles.backBtnText}>My Order</Text>
                        </TouchableOpacity>
                    </View>
                    //#endregion
                }
                {
                    //#region  order History Card
                    <View>
                        <View style={{ width: '95%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: moderateScale(10) }}>
                            <TouchableOpacity onPress={() => orderStatusHandler('upComming')}
                                style={[styles.btn, orderStatus == 'upComming' ? { backgroundColor: mainColor, borderWidth: 0 } : {}]}>
                                <Text style={[styles.btnText, orderStatus == 'upComming' ? { color: '#fff' } : {}]}>Upcomming Order</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => orderStatusHandler('pervious')}
                                style={[styles.btn, orderStatus == 'pervious' ? { backgroundColor: mainColor, borderWidth: 0 } : {}]}>
                                <Text style={[styles.btnText, orderStatus == 'pervious' ? { color: '#fff' } : {}]}>Pervious Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    //#endregion
                }

                {
                    //#region  order card start
                    <ScrollView>
                    <View style={{ marginTop: moderateScale(20),marginBottom:moderateScale(30) }}>
                        {[11,1,1,1,1,1,1,1,1,].map((item, index) => {
                            return (
                                <View key={index} style={{ width: '90%', alignSelf: 'center', elevation: 3, paddingVertical: moderateScale(5), paddingHorizontal: scale(10), borderRadius: moderateScale(6), backgroundColor: '#ffff',marginVertical:moderateScale(5)}}>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                            <View>
                                                <Text style={{ fontSize: normalText + 1, fontFamily: mediumFont }}>Order#:99999</Text>
                                                <Text style={{ fontFamily: lightFont, fontSize: normalText, color: '#727272', marginTop: moderateScale(3) }}>20-Dec-2019-3:00PM</Text>
                                            </View>
                                            <View style={{ height: moderateScale(70), width: moderateScale(60) }}>
                                                <Image source={require('../../../assets/ProductImages/c.jpeg')} style={{ height: '100%', width: '100%' }} resizeMode='contain' />
                                            </View>
                                        </View>

                                        {/* Delivery Date And rating View */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                            <View>
                                                <Text style={{ fontSize: normalText + 1, fontFamily: mediumFont, color: mainColor }}>Esimate Deleivery 21 Dec</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{
                                                    fontFamily: lightFont, fontSize: normalText, color: '#727272', marginTop: moderateScale(3), marginRight: scale
                                                        (25)
                                                }}>Rating</Text>
                                                {[1, 1, 1, 1, 1].map((rate, ind) => {
                                                    return (
                                                        <TouchableOpacity>
                                                            <AntDesign name={true ? 'star' : 'staro'} color={'#ff9529'} size={iconSize-13}/>
                                                        </TouchableOpacity>
                                                    )
                                                })}
                                            </View>
                                        </View>
                                    </View>

                                    {false&&
                                        <View style={{marginTop:moderateScale(20)}}>
                                        {[1,1,1,].map((d,i)=>{
                                            return(
                                                <View style={{flexDirection:'row',}}>
                                                <View style={{alignItems:'flex-start'}}>
                                                    <View style={{width:10,height:10,borderRadius:10,backgroundColor:'#000'}}></View>
                                                    <Text style={{borderWidth:1,width:1,backgroundColor:'#000',marginLeft:scale(3),height:moderateScale(40)}}></Text>
                                                </View>
        
                                                <View style={{flexDirection:'row',marginLeft:scale(20)}}>
                                                    <AntDesign name='star' size={moderateScale(26)}/>
                                                    <Text>  Order Placed</Text>
                                                </View>
                                            </View>
                                            )
                                        })}
                                        </View>
                                    }
                                </View>
                            )
                        })}
                    </View>
                    </ScrollView>
                    //#endregion
                }
                {/* order Track Modal here */}
                {/* <TrackOrderModal orderTrakeModal={orderTrakeModal} setOrderTrakeModal={setOrderTrakeModal}/> */}
            </View>
        </SafeAreaView>

    )
}

export default OrderHistory

const styles = StyleSheet.create({
    headerConatiner: {
        paddingVertical: moderateScale(5),
        paddingHorizontal: scale(10)
    },
    backBtnText: {
        fontFamily: mediumFont,
        fontSize: mediumText + 2,

    },
    btn: {
        borderWidth: 1,
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(20),
        width: scale(140),
        alignItems: 'center',
        borderColor: mainColor
    },
    btnText: {
        fontSize: normalText,
        color: mainColor,
        fontFamily: mediumFont
    }
})