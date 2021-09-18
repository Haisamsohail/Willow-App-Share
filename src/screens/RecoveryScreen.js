import React, { Component } from 'react'
import { Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import Strings from '../theme/Strings'
import Colors from '../theme/Colors'
import FontSize from '../theme/FontSize'
import FontWeight from '../theme/FontWeight'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class RecoveryScreen extends Component {


    onNextClick = () => {
        this.props.navigation.navigate("ResetPassScreen")
    }



    render() {



        const ScreenHeight = Dimensions.get('window').height
        const ScreenWidth = Dimensions.get('window').width

        return (
            <View style = {{ backgroundColor : Colors.BackGroundColorWhite , flex : 1 }}>
            <View style={{ backgroundColor: Colors.BackGroundColorWhite,  margin : 30 }}>
             
                <Text style={{color: Colors.HelloColor,margin : 10 ,fontSize: FontSize.HeadingTxtSize, fontWeight: FontWeight.BoldWeight }}>{Strings.RecoveryEmailTxt}</Text>
                <Text style={{ color: Colors.ColorPrimaryDark , margin : 10 }}>{Strings.EmailText}</Text>
                
                <View>
                    <View style={{ flexDirection: "row", margin: 10, borderBottomWidth: 1,alignItems : "center" }}>
                        <Icon name="envelope" size={20} style={{ position: "absolute" }} color="green" />
                        <TextInput
                            placeholder="Email"
                            style={{ height: 40, width: 300, marginHorizontal: 30 }}
                        />

                    </View>
                </View>
                <TouchableOpacity onPress ={this.onNextClick} style={{ margin : 30 ,borderColor: 'black', elevation: 5, borderRadius: 5, width: ScreenWidth - 30, justifyContent: "center", alignItems: "center", backgroundColor: Colors.ColorPrimary, height: 50, alignSelf: "center" }}>
                    <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: FontWeight.BoldWeight }}>{Strings.SendTxt}</Text>
                </TouchableOpacity>

            </View>
            </View>
        )
    }
}