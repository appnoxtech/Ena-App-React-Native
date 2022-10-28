import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar, Pressable, Platform, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyle from '../../Style/GlobalStyle'
import CommonCard from '../../Common/CommonCard'
import { moderateScale, scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { iconSize, lightFont, mainColor, mediumFont, mediumText, normalText, samllText, white, } from '../../DesignTheme'

const AdminOrder = ({ navigation }) => {
  const [showDetail, setShowDetail] = useState(false)
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]


  //#region  flatList Render Card
  const renderItem = () => {
    return (
      <View style={styles.orderCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: scale(7) }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: moderateScale(10) }}>
              <AntDesign name='user' size={iconSize - 10} />
              <Text style={[styles.listValue, { fontSize: mediumText + 2 }]}>  UserId</Text>
            </View>
            <Text style={styles.time}>08 Oct 2022 18:00Am - 08 Oct 2022 18:00Am </Text>
          </View>
          <View style={{ alignItems: 'flex-end', marginTop: moderateScale(10) }}>
            <TouchableOpacity onPress={() => setShowDetail(!showDetail)}>
              <AntDesign name={showDetail ? 'up' : 'down'} size={iconSize - 10} />
            </TouchableOpacity>
            {false && <Text style={{ backgroundColor: '#efda', padding: moderateScale(5), color: mainColor, paddingHorizontal: scale(7) }}>Status</Text>}
          </View>
        </View>

        {/* order deatil information */}
        {showDetail && <View style={{ marginTop: moderateScale(10) }}>
          <View style={styles.listConatiner}>
            <Text style={styles.listHeading}>Coustomer Name</Text>
            <Text style={styles.listValue}>Jhon Doe</Text>
          </View>

          <View style={[styles.listConatiner, { backgroundColor: white }]}>
            <Text style={styles.listHeading}>Product Name</Text>
            <Text style={styles.listValue}>Fresh Apple</Text>
          </View>

          <View style={styles.listConatiner}>
            <Text style={styles.listHeading}>Price</Text>
            <Text style={styles.listValue}>$100</Text>
          </View>

          <View style={[styles.listConatiner, { backgroundColor: white }]}>
            <Text style={styles.listHeading}>Deleivery Status</Text>
            <Text style={styles.listValue}>Pending</Text>
          </View>

          <View style={styles.listConatiner}>
            <Text style={styles.listHeading}>Rider Name</Text>
            <Text style={styles.listValue}>Shohan Doe</Text>
          </View>
        </View>}

      </View>
    )
  }
  //#endregion

  return (
    <>
      <StatusBar backgroundColor={'#fff'} />
      <SafeAreaView style={GlobalStyle.container}>
        {true &&
          //#region call all component
          <View style={styles.ComponetsContainer}>
            <View style={GlobalStyle.backBtnContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}
                style={GlobalStyle.backBtn}>
                <AntDesign name='left' size={iconSize - 5} />
                <Text style={GlobalStyle.backButtonText}> Order Details</Text>
              </TouchableOpacity>
            </View>

            {
              //#region search order by name
              <View style={styles.search}>
                <AntDesign name='search1' size={iconSize - 7} color={mainColor} />
                <TextInput placeholder='Search Order' style={styles.input} />
              </View>
              //#endregion
            }

            {
              //#region  filter Data 
              <View style={GlobalStyle.commonWidth}>
                <TouchableOpacity style={styles.filterButton}>
                  <AntDesign name='menu-unfold' />
                  <Text style={styles.filterText}>Filter</Text>
                </TouchableOpacity>
              </View>
              //#region 
            }
            <View style={{ marginBottom: moderateScale(80) }}>
              {/* order Detail card */}
              <FlatList
                data={data}
                renderItem={renderItem} />
            </View>

          </View>
          //#endregion
        }
      </SafeAreaView>

    </>
  )
}


const styles = StyleSheet.create({
  ComponetsContainer: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  orderCard: {
    width: '93%',
    alignSelf: 'center',
    backgroundColor: white,
    elevation: 5,
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(4),
    marginVertical: moderateScale(5)

  }, search: {
    paddingVertical: moderateScale(7),
    backgroundColor: white,
    marginVertical: moderateScale(10),
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(8),
    borderColor: '#727272',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,

  },
  input: {
    fontFamily: lightFont,
    width: '70%',
    fontSize: normalText + 2,
    marginLeft: scale(5)
  },
  time: {
    fontSize: samllText,
    fontFamily: lightFont,
    marginVertical: moderateScale(4)
  },
  listConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    paddingVertical: moderateScale(9),
    paddingHorizontal: scale(7),
    // marginVertical:moderateScale(5),
  },
  listHeading: {
    fontSize: moderateScale(13),
    fontFamily: lightFont,
    color: '#727272'
  },
  listValue: {
    fontFamily: mediumFont,
    fontSize: moderateScale(13),
  },
  filterButton: {
    borderWidth: 1,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(80),
    paddingHorizontal: scale(10),
    paddingVertical: moderateScale(6),
    borderColor: mainColor,
    borderRadius: moderateScale(4),
    marginVertical: moderateScale(10)
  },
  filterText: {
    fontFamily: mediumFont,
    fontSize: moderateScale(14),
    marginLeft: scale(10),
    color:mainColor
  }
})

export default AdminOrder
