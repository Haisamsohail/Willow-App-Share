import React from "react";
import { View, Text, TouchableOpacity, Image,StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from '../theme/Colors'

const getIconName = (iconName) => {
    console.log(iconName);
   return iconName;
};


const BottomTabButton = ({ 
  title,
  isActive,
  iconName,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 8,
        alignItems: "center",
        height: 74,
        width: 116,
        
      }}
      onPress={onPress}
    >
      
      {(title=="Home"&&isActive==true)?
        <View style={styles.activeBar} />:<View></View>
      
      }
      {(title=="Profile"&&isActive==true)?
        <View style={styles.activeBarRecords} />:<View></View>
      
      }
      <Icon
        name={getIconName(iconName)}
        size={24}
        style={[styles.icon, isActive && styles.iconActive]}
      />
      <Text style={[styles.text, isActive && styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles =StyleSheet.create({
    buttonNav: {
      borderTopWidth: 3,
      borderColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      height: 72,
      backgroundColor: "transparent",
      paddingLeft: 0,
      paddingRight: 0,
    },
    buttonNavActive: {
      borderTopWidth: 3,
      borderColor: "#004b89",
    },
    buttonNavText: {
      color: "rgba(111,109,109,1)",
      fontSize: 16,
    },
    buttonNavTextActive: {
      color: "#004b89",
      fontSize: 16,
    },
    icon: {
      color: "rgba(111,109,109,1)",
      fontSize: 24,
    },
    iconActive: {
      color: Colors.ColorPrimary,
      fontSize: 24,
    },
    activeBar: {
      borderTopColor: Colors.ColorPrimary,
      borderTopWidth: 3,
      position: "absolute",
      left: 0,
      width: 80,
    },
    activeBarRecords: {
      borderTopColor: Colors.ColorPrimary,
      borderTopWidth: 3,
      position: "absolute",
      right: 0,
      width: 80,
    },
    text: {
      color: Colors.ColorGrey,
    },
    textActive: {
      color: Colors.ColorPrimaryDark,
    },
  });


export default BottomTabButton;