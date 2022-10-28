import { StyleSheet} from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'
import { mediumFont, white } from '../DesignTheme'

const GlobalStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white
    },
    backButtonText:{
        fontFamily:mediumFont,
        fontSize:moderateScale(16)
    },
    backBtn:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:moderateScale(10)
    },
    backBtnContainer:{
        paddingHorizontal:scale(10),
        
    },

    commonWidth:{
        width:'90%',
        alignSelf:'center'
    }

})

export default GlobalStyle