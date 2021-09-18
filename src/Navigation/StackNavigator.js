import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import Walkthrough from '../screens/Walkthrough'
import RecoveryScreen from '../screens/RecoveryScreen';
import ResetPassScreen from '../screens/ResetPassScreen';
import SuccesfullyResetScreen from '../screens/SuccesfullyResetScreen'
import SignUpScreen from '../screens/SignUpScreen'
import Dashboard from '../screens/Dashboard'
import FlatListComp from '../components/FlatListComp'
import Profile from '../screens/Profile'
import PlantTypeSearch from '../screens/PlantTypeSearch'
import PlantTypeSearchDetail from '../screens/PlantTypeSearchDetail'
import Blog from '../screens/Blog'
import BlogDetail from '../screens/BlogDetail'
import ConnectPlant from '../screens/ConnectPlant'
import MyPlants from '../screens/MyPlants'
import PlantOverview from '../screens/PlantOverview'
import BottomTabNavigator from './BottomTabNavigator'
import PlantDetailInner from '../screens/PlantDetailInner'



export default class StackNavigator extends Component {

    render() {

        const Stack = createStackNavigator();

        return (

            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="ResetPassScreen" component={ResetPassScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Walkthrough" component={Walkthrough} />
                <Stack.Screen options={{ headerShown: false }} name="RecoveryScreen" component={RecoveryScreen} />
                <Stack.Screen options={{ headerShown: false }} name="SuccesfullResetScreen" component={SuccesfullyResetScreen} />
                <Stack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
                <Stack.Screen options={{ headerShown: false }} name="FlatListComp" component={FlatListComp} />
                <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
                <Stack.Screen options={{ headerShown: false }} name="PlantTypeSearch" component={PlantTypeSearch} />
                <Stack.Screen options={{ headerShown: false }} name="PlantTypeSearchDetail" component={PlantTypeSearchDetail} />
                <Stack.Screen options={{ headerShown: false }} name="Blog" component={Blog} />
                <Stack.Screen options={{ headerShown: false }} name="BlogDetail" component={BlogDetail} />
                <Stack.Screen options={{ headerShown: false }} name="ConnectPlant" component={ConnectPlant} />
                <Stack.Screen options={{ headerShown: false }} name="MyPlants" component={MyPlants} />
                <Stack.Screen options={{ headerShown: false }} name="PlantOverview" component={PlantOverview} />
                <Stack.Screen options={{ headerShown: false }} name="PlantDetailInner" component={PlantDetailInner} />
                <Stack.Screen options={{ headerShown: false }} name="BottomTabNavigator" component={BottomTabNavigator} />
                
            </Stack.Navigator>
        )
    }
}

