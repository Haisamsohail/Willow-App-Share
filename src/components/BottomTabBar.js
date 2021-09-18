import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import Colors from '../theme/Colors'

const screenWidht = Dimensions.get('screen').width;
import Svg, { Circle, Path } from "react-native-svg";
import Icon from 'react-native-vector-icons/FontAwesome'

import FontSize from '../theme/FontSize'
import BottomTabButton from './BottomTabButton'
import ImageCropPicker from 'react-native-image-crop-picker'


const BottomTabBar = ({ navigation, state, ...props }) => {

    const { routes } = state;

    const onProfileClick = () => {

        navigation.navigate("Profile")
    }
    const onHomeClick = () => {

        navigation.navigate("Home")
    }
    const onCameraClick = () => {
        ImageCropPicker.openCamera({
            
            cropping: false,
        }).then(image => {
            console.log(image);

            var img = { sourceURL: image.path }
            this.state.multipleFile.push(img)

            this.setState({ multipleFile: this.state.multipleFile })

        });

    }
    console.log(routes)
    return (
        <View style={[styles.container]}>


            <View style={[styles.content]}>
                <Svg
                    version="1.1"
                    id="bottom-bar"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100"
                    viewBox="0 0 1092 260"
                    space="preserve"
                    style={{ elevation: 10, shadowColor: 'grey' }}
                >
                    <Path
                        fill={"#ffffff"}
                        stroke={"white"}
                        d={`M 30 60 h 356 c 17 -21 127 -74 152 -70 C 568 -19 672 25 706.7 60 H 1062 c 16.6 0 30 13.4 30 30 v 94 c -1 68 2 69 -1 69 H 76 c -74 1 -76 3 -75 0 V 90 C 0 73.4 13.4 60 30 60 z`}
                    />
                    <Circle
                        fill={Colors.ColorPrimary}
                        stroke={"#7EE6D2"}
                        cx="546"
                        cy="100"
                        r="100"
                    />

                </Svg>
            </View>

            <TouchableOpacity onPress={onCameraClick} style={{ position: 'absolute', left: "46%", top: -5 }}>
                <Icon name="camera" color="white" size={30} ></Icon>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30
            }}>

                <TouchableOpacity onPress={onHomeClick} style={{ marginBottom: 20, justifyContent: "center", alignItems: "center", top: 10, }}>
                    <Icon name="home" size={30} color={Colors.ColorPrimary} />
                    <Text style={{ fontSize: FontSize.defaultTxtSize }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onProfileClick} style={{ marginBottom: 20, justifyContent: "center", alignItems: "center", top: 10, }}>
                    <Icon name="user" size={30} color={Colors.ColorPrimary} />
                    <Text style={{ fontSize: FontSize.defaultTxtSize }}>Profile</Text>
                </TouchableOpacity>


            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {

        elevation: 10,
    },
    content: {
        flexDirection: "column",
        zIndex: 0,
        width: Dimensions.get("screen").width,
        position: "absolute",
        bottom: -7,

    },
    subContent: {
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        zIndex: 1,
        position: "absolute",
        bottom: 5,

    }
});
export default BottomTabBar;