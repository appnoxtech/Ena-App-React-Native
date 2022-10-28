import { StyleSheet, Text, View,ScrollView, TouchableOpacity, StatusBar,Pressable} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyle from '../../Style/GlobalStyle'
import CommonCard from '../../Common/CommonCard'
import { moderateScale, scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { addIcon, iconSize, mainColor, white } from '../../DesignTheme'
import AddDeleiveryModal from '../../Modal/AddDeleiveryModal'

const WareHouse = ({navigation}) => {
    const [showAddDeleviryModal, setShowAddDeleviryModal] = useState(false)

    return (
        <>
        <StatusBar backgroundColor={'#fff'}/>
        <SafeAreaView style={GlobalStyle.container}>
            {true &&
                //#region call all component
                <View style={styles.ComponetsContainer}>
                    {
                        //#region Add ware houe Button
                            <TouchableOpacity onPress={()=>setShowAddDeleviryModal(true)}
                            activeOpacity={0.6} style={{position:'absolute',bottom:scale(20),right:scale(20),zIndex:999}}>
                                <AntDesign name='pluscircle' size={addIcon+5} color={mainColor} style={{backgroundColor:white,borderRadius:100}}/>
                            </TouchableOpacity>
                        //#endregion
                    }
                    <View style={GlobalStyle.backBtnContainer}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}
                         style={GlobalStyle.backBtn}>
                            <AntDesign name='left' size={iconSize-5}/>
                            <Text style={GlobalStyle.backButtonText}> WareHouse</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{}}>
                        <View style={{ marginBottom: moderateScale(80) }}>
                            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((d, i) => {
                                return (
                                    <CommonCard />
                                )
                            })}
                        </View>

                    </ScrollView>
                </View>
                //#endregion
            }
        <AddDeleiveryModal showAddDeleviryModal={showAddDeleviryModal} setShowAddDeleviryModal={setShowAddDeleviryModal} />

        </SafeAreaView>
        
        </>
    )
}

export default WareHouse

const styles = StyleSheet.create({
    ComponetsContainer:{
        flex:1
    }
})