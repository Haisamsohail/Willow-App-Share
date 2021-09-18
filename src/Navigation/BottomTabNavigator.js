import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard'
import Profile from '../screens/Profile'
import BottomTabBar from '../components/BottomTabBar'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../theme/Colors'
import FontSize from '../theme/FontSize'

export default class BottomTabNavigator extends Component {


  render() {

    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator


        tabBar={(props) => <BottomTabBar {...props}/> }

        tabBarOptions={{
          
          style: {

            backgroundColor: Colors.BackGroundColorWhite,
          },
          showLabel:false
        }}
      >

        <Tab.Screen name="Home" component={Dashboard} 
        
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View style={{ marginBottom:20, justifyContent: "center", alignItems: "center", top: 10 }}>
        //       <Icon name="home" size={30} color={Colors.ColorPrimary} />
        //       <Text style={{ fontSize: FontSize.defaultTxtSize }}>Home</Text>
        //     </View>
        //   )
        // }} 
        
        />
        <Tab.Screen name="Profile" component={Profile}

          // options={{


          //   tabBarIcon: ({ focused }) => (
          //     <View style={{ marginBottom:20,justifyContent: "center", alignItems: "center", top: 10, }}>
          //       <Icon name="user" size={30} color={Colors.ColorPrimary} />
          //       <Text style={{ fontSize: FontSize.defaultTxtSize }}>Profile</Text>
          //     </View>
          //   )
          // }}
        />
      </Tab.Navigator>
    )
  }

}

const Style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5

  }
})
