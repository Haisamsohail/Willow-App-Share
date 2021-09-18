import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import Colors from '../theme/Colors'
import Strings from '../theme/Strings'
import FontWeight from '../theme/FontWeight'
import FontSize from '../theme/FontSize'
import AppImages from '../theme/AppImages'
export default class SuccesfullyResetScreen extends Component {


    onDoneClick = () => {
        this.props.navigation.navigate("Login")
    }

    render() {

        const ScreenHeight = Dimensions.get('window').height
        const ScreenWidth = Dimensions.get('window').width


        return (
            <View style={{ flex: 1, backgroundColor: Colors.BackGroundColorWhite, paddingHorizontal: 20 }}>
                <Text style={{  fontSize: FontSize.HeadingTxtSize, paddingTop: 40 ,color: Colors.ColorPrimaryDark, fontWeight: FontWeight.BoldWeight }}>{Strings.SuccesfullResetTxt}</Text>
                <Image
                    style={{ alignSelf: "center" , margin : 30 }}
                    source={AppImages.SuccesfulImg}
                />

                <TouchableOpacity onPress = { this.onDoneClick } style={{ borderColor: 'black', elevation: 5, borderRadius: 5, width: ScreenWidth - 30, justifyContent: "center", alignItems: "center", backgroundColor: Colors.ColorPrimary, height: 50, alignSelf: "center" }}>
                    <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: FontWeight.BoldWeight }}>{Strings.DoneTxt}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

