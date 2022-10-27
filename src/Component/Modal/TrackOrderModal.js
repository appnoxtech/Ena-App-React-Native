import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { iconSize, mediumFont, mediumText } from '../DesignTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { moderateScale, scale } from 'react-native-size-matters'

const TrackOrderModal = ({orderTrakeModal,setOrderTrakeModal}) => {
  return (
    <Modal>
        <SafeAreaView style={{flex:1}}>
            <View>
            <View style={styles.headerConatiner}>
                        <TouchableOpacity onPress={() => setOrderTrakeModal(false)}
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name='left' size={iconSize} />
                            <Text style={styles.backBtnText}>Track Order</Text>
                        </TouchableOpacity>
                    </View>

            </View>
        </SafeAreaView>
    </Modal>
  )
}

export default TrackOrderModal

const styles = StyleSheet.create({
    headerConatiner: {
        paddingVertical: moderateScale(5),
        paddingHorizontal: scale(10)
    },
    backBtnText: {
        fontFamily: mediumFont,
        fontSize: mediumText + 2,

    },
})