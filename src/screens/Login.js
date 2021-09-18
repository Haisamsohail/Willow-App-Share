import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AppImages from '../theme/AppImages';
import Strings from '../theme/Strings';
import Colors from '../theme/Colors';
import FontSize from '../theme/FontSize';
import FontWeight from '../theme/FontWeight';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from 'react-native-elements';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const ScreenHeight = Dimensions.get('window').height;
  const ScreenWidth = Dimensions.get('window').width;

  const [username, setUsername] = useState('');
  const [usernameError, setusernameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const login = () => {
    if (username == '') {
      setusernameError('* Username is required.');
    } else if (password == '') {
      setpasswordError('* Password is required');
    } else {
      // alert(username, password);
      // ToastAndroid.show('hello', ToastAndroid.SHORT);

      fetch('https://ezibgoapps.com/willowapi/public/userLogin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          loginid: username,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(resData => {
          if (resData.Status == true) {
            let accessToken = resData.access_token;
            AsyncStorage.setItem('token', accessToken);
            const token = AsyncStorage.getItem('token');
            console.log(token);
            ToastAndroid.show(
              'Login Successfully',
              ToastAndroid.SHORT,
              ToastAndroid.TOP,
            );
            navigation.navigate('Dashboard');
          } else {
            ToastAndroid.show(
              'Please Try Again, Credential not valid',
              ToastAndroid.SHORT,
              ToastAndroid.TOP,
            );
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <ScrollView style={{backgroundColor: Colors.BackGroundColorWhite}}>
      <View
        style={{
          padding: 20,
          height: ScreenHeight,
          backgroundColor: Colors.BackGroundColorWhite,
        }}>
        {/* Header Menu Start */}
        <TouchableOpacity onPress={() => navigation.navigate('Walkthrough')}>
          <Icon
            name="chevron-left"
            size={24}
            color="#9B999B"
            style={styles.iconLeft}
          />
        </TouchableOpacity>
        {/* Header Menu End */}

        {/* Header Text Start */}
        <Text
          style={{
            marginLeft: 10,
            color: Colors.HelloColor,
            fontSize: 28,
            fontWeight: FontWeight.BoldWeight,
            paddingTop: 30,
            paddingBottom: 10,
          }}>
          {Strings.HelloTxt}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            color: '#8B8A8C',
            fontSize: 14,
          }}>
          {' '}
          {Strings.LoginLearnTxt}{' '}
        </Text>
        <View style={{height: 40}}></View>
        {/* Input Text Label */}
        <Text
          style={{
            margin: 10,
            marginBottom: 0,
            paddingBottom: 0,
            color: '#A4A4A7',
            fontSize: FontSize.defaultTxtSize,
          }}>
          {Strings.UserNameTxt}
        </Text>
        <View>
          <View
            style={{
              borderColor: '#89E9C3',
              flexDirection: 'row',
              margin: 10,
              borderBottomWidth: 1,
              alignItems: 'center',
            }}>
            {/* <Icon
              name="user"
              size={20}
              style={{position: 'absolute'}}
              color="green"
            /> */}
            <TextInput
              style={{height: 40, width: 300, color: '#000'}}
              value={username}
              onChangeText={username => setUsername(username)}
              onChange={() => setusernameError('')}
            />
          </View>
          {/* UserName Validation */}
          <Text style={{color: 'red', fontSize: 12, marginLeft: 10}}>
            {usernameError}
          </Text>
        </View>
        <Text
          style={{
            margin: 10,
            marginBottom: 0,
            paddingBottom: 0,
            color: '#A4A4A7',
            fontSize: FontSize.defaultTxtSize,
          }}>
          {' '}
          {Strings.PasswordTxt}{' '}
        </Text>
        <View>
          <View
            style={{
              borderColor: '#89E9C3',
              flexDirection: 'row',
              margin: 10,
              borderBottomWidth: 1,
              alignItems: 'center',
            }}>
            {/* <Icon
              name="lock"
              size={20}
              style={{position: 'absolute'}}
              color="green"
            /> */}
            <TextInput
              secureTextEntry={true}
              style={{height: 40, width: 250, color: '#000'}}
              value={password}
              onChangeText={password => setPassword(password)}
              onChange={() => setpasswordError('')}
            />
            <View>
              <TouchableOpacity
                style={{height: 30, width: 30, marginHorizontal: 20}}>
                <Icon
                  name="eye"
                  size={20}
                  style={{position: 'absolute'}}
                  color="#B1AFB1"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Password Validation */}
          <Text style={{color: 'red', fontSize: 12, marginLeft: 10}}>
            {passwordError}
          </Text>
        </View>

        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* <BouncyCheckbox
            size={15}
            fillColor="#89E9C3"
            unfillColor={Colors.UnfillColor}
            text="Remember Me"
            iconStyle={{borderColor: '#B6B6B8'}}
            textStyle={{
              fontFamily: 'JosefinSans-Regular',
              fontSize: 12,
              color: '#8D8B8E',
            }}
            // onPress={(isChecked: boolean) => { }}
          /> */}
          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              lineWidth="1"
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.label}>Remember Me</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('RecoveryScreen')}>
            <Text style={{color: '#8D8B8E', fontSize: 12}}>
              {' '}
              {Strings.ForgotPaswordTxt}{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 10, alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={login}
            style={{
              marginTop: 20,
              borderColor: Colors.BorderColorBlack,
              elevation: 5,
              borderRadius: 5,
              width: ScreenWidth - 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2dda93',
              height: 50,
            }}>
            <Text
              style={{
                color: Colors.BackGroundColorWhite,
                fontWeight: FontWeight.BoldWeight,
              }}>
              {Strings.LoginTxt}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{margin: 10, alignSelf: 'center'}}>
          {Strings.OrLoginThrTxt}
        </Text>

        <View
          style={{
            width: 100,
            justifyContent: 'space-evenly',
            alignContent: 'center',
            margin: 10,
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              margin: 10,
              backgroundColor: 'white',
              height: 40,
              width: 40,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <TouchableOpacity>
              <Icon name="facebook" size={20} color="#535053" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              margin: 10,
              backgroundColor: 'white',
              height: 40,
              width: 40,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <TouchableOpacity>
              <Icon name="instagram" size={20} color="#535053" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            margin: 10,
            width: ScreenWidth,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: -15,
          }}>
          <Text>{Strings.DontHaveAccTxt}</Text>

          <View style={{width: 10}}></View>

          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{color: Colors.ColorPrimary, fontWeight: 'bold'}}>
              {Strings.SignUpTxt}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.versionText}>Willow Version 2.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLeft: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    //alignSelf: 'center',
    bottom: 8,
    color: '#B1AFB1',
  },
  label: {
    marginLeft: 6,
    color: '#8D8B8E',
    fontSize: 12,
  },
  versionText: {
    marginTop: 10,
    color: '#8D8B8E',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default Login;
