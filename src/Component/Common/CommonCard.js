import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters';
import {  iconSize, lightFont, mediumFont, mediumText,} from '../DesignTheme';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CommonCard = ({ item,status}) => {
  // console.log(item)


  return (
    <View style={{
      width: '90%',
      alignSelf: 'center',
      paddingVertical: moderateScale(5),
      paddingHorizontal: scale(10),
      borderColor: '#dadada',
      borderRadius: moderateScale(8),
      marginTop:moderateScale(10),
      borderWidth:1
    }}>
      <View style={styles.headingView}>
        <Text style={styles.cardSubheading}>Name</Text>
        <Text style={styles.userDeatilText}> Ena App</Text>
      </View>
      <View style={styles.headingView}>
        <Text style={styles.cardSubheading}>Location</Text>
        <Text style={styles.userDeatilText} > Noida Sector 142 </Text>
      </View>
      <View style={styles.headingView}>
        <Text style={styles.cardSubheading}>Phone :</Text>
        <Text style={styles.userDeatilText}> 921342222</Text>
      </View>

     {status !=1&& <View style={[styles.headingView, { alignItems: 'center' }]}>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
          <TouchableOpacity style={{ marginHorizontal: scale(10) }}>
            <Text style={{ fontFamily: mediumFont, color: '#4285f4' }}>View</Text>
          </TouchableOpacity >
          <TouchableOpacity style={{ marginHorizontal: scale(10) }}>
            <AntDesign name='edit' size={iconSize - 5} color={'#4285f4'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: scale(10) }}>
            <Ionicons name='trash' size={iconSize - 5} color={'#ff0000'} />
          </TouchableOpacity>
        </View>
      </View>}
    </View>
  )
}
const styles = StyleSheet.create({
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
});
export default CommonCard