import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity ,PermissionsAndroid, StyleSheet, Button } from 'react-native'
import AppImages from '../theme/AppImages';
import Strings from '../theme/Strings';
import Colors from '../theme/Colors';
import FontSize from '../theme/FontSize';
import FontWeight from '../theme/FontWeight';


const Splash = ({ navigation }) => {

    const ScreenHeight = Dimensions.get('window').height;
    const ScreenWidth = Dimensions.get('window').width;



    const onNextClick = () => {

        navigation.navigate('Walkthrough')

    }



    return (
        <View style={{ backgroundColor: Colors.BackGroundColorWhite, height: ScreenHeight, marginTop: 20 }}>
            <View style={{flex: 1, flexDirection: 'column', alignItems: "center", justifyContent: "center", alignContent: "center", backgroundColor: Colors.BackGroundColorWhite, width: ScreenWidth }}>

                <Image style={styles.logo}
                    source={AppImages.logo}
                />
                <Text style={{ margin : 10 ,fontSize: 22, fontWeight: "bold", color: Colors.ColorPrimaryDark, paddingTop: 20 }}>{Strings.WelcomeTxt}</Text>
                <Text style={{ margin : 5 ,color: Colors.TxtColor, fontSize: 14 }}>{Strings.SplashTxt}</Text>
            </View>
            <View style={{ backgroundColor: Colors.BackGroundColorWhite, paddingBottom:100 }}>
                <TouchableOpacity onPress={onNextClick} style={{ borderColor: 'black', elevation: 5, borderRadius: 3, width: ScreenWidth - 30, justifyContent: "center", alignItems: "center", backgroundColor: Colors.ColorPrimary, height: 50, alignSelf: "center", marginBottom: 50 }}>
                    <Text style={{ color: Colors.BackGroundColorWhite, fontWeight: FontWeight.BoldWeight }}>{Strings.NextTxt}</Text>
                </TouchableOpacity>
                <View style={styles.bottomLine}></View>
            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    logo: {
      width: 110,
      height: 110
    }, 
    bottomLine: {
        marginLeft: 140,
        marginRight: 140,
        position: 'relative',
        top: 40,
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 4
    }
  });

export default Splash;