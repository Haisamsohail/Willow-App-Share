import React, {Component, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '../theme/Colors';
import Strings from '../theme/Strings';
import FontWeight from '../theme/FontWeight';
import FontSize from '../theme/FontSize';
import AppImages from '../theme/AppImages';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const SignUpScreen = ({navigation}) => {
  const ScreenHeight = Dimensions.get('window').height;
  const ScreenWidth = Dimensions.get('window').width;

  const [username, setUsername] = useState('');
  const [usernameError, setusernameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const gotoLogin = () => {
    navigation.navigate('Login');
  };

  const register = () => {
    if (username == '') {
      setusernameError('Username must not be empty');
    } else if (email == '') {
      setEmailError('Email must not be empty');
    } else if (password == '') {
      setpasswordError('Password must not be empty');
    } else {
      fetch('https://ezibgoapps.com/willowapi/public/userAdd', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          loginid: username,
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(resData => {
          if (resData.Status == true) {
            ToastAndroid.show(resData.Data, ToastAndroid.SHORT);
            navigation.navigate('Login');
          } else {
            //console.log(resData.loginid[0]);
            ToastAndroid.show(
              'Please Try Again, Duplicate entry',
              ToastAndroid.SHORT,
            );
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <View style={{backgroundColor: Colors.BackGroundColorWhite, flex: 1}}>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            backgroundColor: Colors.BackGroundColorWhite,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 40,
              marginTop: 20,
              color: Colors.ColorPrimaryDark,
              fontWeight: FontWeight.BoldWeight,
            }}>
            {Strings.SignUpTxt}
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              color: '#979697',
              marginBottom: 40,
            }}>
            {Strings.LearnTxt}
          </Text>
          {/* Username */}
          <View>
            <View
              style={{
                borderColor: '#dcdcdc',
                flexDirection: 'row',
                marginTop: 10,
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="Username"
                style={{height: 40, width: '100%'}}
                value={username}
                onChangeText={username => setUsername(username)}
                onChange={() => setusernameError('')}
              />
            </View>
            {/* username Validation */}
            <Text style={{color: 'red', fontSize: 12, marginLeft: 10}}>
              {usernameError}
            </Text>
          </View>

          {/* email */}
          <View style={{marginTop: 20}}>
            <View
              style={{
                borderColor: '#dcdcdc',
                flexDirection: 'row',
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                onChange={() => setEmailError('')}
              />
            </View>
            {/* Email Validation */}
            <Text style={{color: 'red', fontSize: 12, marginLeft: 10}}>
              {emailError}
            </Text>
          </View>

          {/* Password */}
          <View style={{marginTop: 20}}>
            <View
              style={{
                borderColor: '#dcdcdc',
                flexDirection: 'row',
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <TextInput
                secureTextEntry
                placeholder="Password"
                style={{height: 40, width: 300}}
                value={password}
                onChangeText={password => setPassword(password)}
                onChange={() => setPassword('')}
              />
            </View>
            {/* Password Validation */}
            <Text style={{color: 'red', fontSize: 12, marginLeft: 10}}>
              {passwordError}
            </Text>
          </View>
          {/* Retype Password */}
          <View
            style={{
              marginTop: 20,
              borderColor: '#dcdcdc',
              flexDirection: 'row',
              borderBottomWidth: 1,
              alignItems: 'center',
            }}>
            <TextInput
              secureTextEntry
              placeholder="Retype Password"
              style={{height: 40, width: '100%'}}
            />
          </View>

          <View style={{marginTop: 20, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={register}
              style={{
                marginTop: 20,
                borderColor: '#dcdcdc',
                elevation: 5,
                borderRadius: 5,
                width: ScreenWidth - 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2dda93',
                height: 60,
              }}>
              <Text
                style={{
                  color: Colors.BackGroundColorWhite,
                  fontWeight: FontWeight.BoldWeight,
                }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginTop: 40,
              alignSelf: 'center',
              color: '#535053',
              marginBottom: 10,
            }}>
            {Strings.OrSignInTxt}
          </Text>

          <View
            style={{
              marginTop: 20,
              width: 100,
              justifyContent: 'space-evenly',
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                height: 50,
                width: 50,
                margin: 10,
                elevation: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <TouchableOpacity>
                <Icon name="facebook" size={25} color="#535053" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                height: 50,
                width: 50,
                marginLeft: 40,
                elevation: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <TouchableOpacity>
                <Icon name="instagram" size={25} color="#535053" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
