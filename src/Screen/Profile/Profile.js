import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyle from '../../Component/Style/GlobalStyle'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { moderateScale, scale } from 'react-native-size-matters'
import { grey, iconSize, lightFont, mainColor, mediumFont, mediumText, normalText } from '../../Component/DesignTheme'
import NavigationCard from '../../Component/Common/NavigationCard'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation=useNavigation()
  return (
    <View style={GlobalStyle.container}>
      {
        //#region user Deatil 
        <View style={styles.ProfileCard}>
            <View style={styles.iconConatiner}>
                <AntDesign name='user' size={moderateScale(70)} color={mainColor}/>
            </View>
            <View style={{width:'65%',marginLeft:scale(10)}}>
                <Text style={styles.informationText}>User Name</Text>
                <Text style={styles.informationText}>ena@email.com</Text>
                <Text style={styles.informationText}>9876543210</Text>
            </View>
        </View>
        //#endregion
      }

      {
        //#region  orderHistory View
          <View style={{width:'90%',alignSelf:'center',marginTop:moderateScale(20)}}>
              <TouchableOpacity onPress={()=>navigation.navigate('OrderHistory',{name:'sachin'})}>
                  <NavigationCard name={'My Order'}/>
              </TouchableOpacity>

              <TouchableOpacity>
              <NavigationCard name={'Wish List'}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
              <NavigationCard name={'Cart'}/>
              </TouchableOpacity>

              <TouchableOpacity>
              <NavigationCard name={'Help Center'}/>
              </TouchableOpacity>
          </View>
        //#endregion
      }
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    ProfileCard:{
        width:'90%',
        borderWidth:1,
        paddingVertical:moderateScale(15),
        alignSelf:'center',
        paddingHorizontal:moderateScale(10),
        borderRadius:moderateScale(8),
        flexDirection:'row',
        alignItems:'center',
        borderColor:mainColor
    },
    iconConatiner:{
        borderWidth:1,
        height:moderateScale(100),
        width:moderateScale(100),
        borderRadius:200,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:mainColor     
    },
    informationText:{
      fontFamily:mediumFont,
      fontSize:mediumText+1,
      paddingVertical:moderateScale(2),
      color:mainColor

    }
    
})