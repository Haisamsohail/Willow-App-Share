import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Colors from '../theme/Colors'
import Strings from '../theme/Strings'
import FontSize from '../theme/FontSize'
import FontWeight from '../theme/FontWeight'

export default class ResetPassScreen extends Component {
   
    

    onResetClick = () => {
        this.props.navigation.navigate("SuccesfullResetScreen")
    }

    render() {

        const ScreenHeight = Dimensions.get('window').height
        const ScreenWidth = Dimensions.get('window').width

        return (
            <View style={{ backgroundColor: Colors.BackGroundColorWhite, flex: 1, paddingHorizontal: 20 , paddingTop : 40 }}>
                <Text style={{ color: Colors.ColorPrimaryDark, margin: 10 , fontSize: FontSize.HeadingTxtSize, fontWeight: FontWeight.BoldWeight }} >{Strings.ResetTxt}</Text>
                
                <Text style={{ margin : 10 ,color: Colors.ColorPrimaryDark, fontSize: FontSize.defaultTxtSize }} >{Strings.NewPassTxt}</Text>

                <TextInput
                    secureTextEntry={true}
                    style={{ borderBottomWidth: 1, height: 40, margin : 10 ,justifyContent: "center", width: ScreenWidth - 70 }}
                />
                <Text style={{ color: Colors.ColorPrimaryDark, margin : 10 ,fontSize: FontSize.defaultTxtSize }} >{Strings.RepeatPassTxt}</Text>

                <TextInput
                    secureTextEntry={true}
                    style={{ borderBottomWidth: 1, height: 40, margin : 10 ,justifyContent: "center", width: ScreenWidth - 50 }}
                />

                <TouchableOpacity onPress={this.onResetClick} style={{ margin : 20,borderColor: 'black', elevation: 5, borderRadius: 5, width: ScreenWidth - 30, justifyContent: "center", alignItems: "center", backgroundColor: Colors.ColorPrimary, height: 50, alignSelf: "center" }}>
                    <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: FontWeight.BoldWeight }}>{Strings.ResetpassTxt}</Text>
                </TouchableOpacity>


            </View>
        )
    }
}