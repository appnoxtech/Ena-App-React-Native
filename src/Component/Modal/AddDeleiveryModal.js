import { Modal, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale } from 'react-native-size-matters'
import { lightFont, mediumFont, normalText, semiBoldFont, white } from '../DesignTheme'

const AddDeleiveryModal = ({showAddDeleviryModal,setShowAddDeleviryModal}) => {
    return (
        <>
            <StatusBar />
            <Modal statusBarTranslucent transparent visible={showAddDeleviryModal} animationType='slide'>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.cconatiner}>
                        <View style={styles.ModalCard}>
                            <Text style={{fontFamily:mediumFont,paddingTop:moderateScale(20),marginLeft:scale(10)}}>  Enter Details</Text>
                            {/* TextInput Box Here */}
                            <View style={{marginTop:moderateScale(10)}}>
                            <View style={styles.inputConatiner}>
                            <TextInput style={styles.input} placeholder='Enter Name'/>
                            </View>
                            <View style={styles.inputConatiner}>
                            <TextInput style={styles.input} placeholder='Enter Location'/>
                            </View>
                            <View style={styles.inputConatiner}>
                            <TextInput style={styles.input} placeholder='Enter Phone Number'/>
                            </View>
                            </View>

                            {/* buuton View start */}
                            <View style={{width:'90%',alignSelf:'center',flexDirection:'row',justifyContent:'flex-end',marginTop:moderateScale(5)}}>
                                <TouchableOpacity onPress={()=>{setShowAddDeleviryModal(false)}}
                                style={[styles.btn,{backgroundColor:'red'}]}>
                                    <Text style={styles.btnText}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.btn,{backgroundColor:'#4285f4'}]}>
                                    <Text style={styles.btnText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>

            </Modal>
        </>
    )
}

export default AddDeleiveryModal

const styles = StyleSheet.create({
    cconatiner: {
        flex: 1,
        backgroundColor: 'rgba(126,126,126,0.40)',
        alignItems:'center',
        justifyContent:'center'
    },
    ModalCard:{
        width:'90%',
        height:moderateScale(250),
        backgroundColor:white,
        elevation:2,
        borderRadius:moderateScale(6)

    },
    inputConatiner:{
        width:'90%',
        alignSelf:'center',
        borderWidth:1,
        marginVertical:moderateScale(6),
        padding:moderateScale(5),
        borderColor:'#727272',
        borderRadius:moderateScale(4)
    },
    btn:{
        padding:moderateScale(8),
        marginHorizontal:moderateScale(5),
        paddingHorizontal:moderateScale(10),
        borderRadius:moderateScale(4)
    },
    btnText:{
        fontFamily:mediumFont,
        fontSize:normalText,
        color:white
    },
    input:{
        fontFamily:lightFont,
        fontSize:normalText
    }
})