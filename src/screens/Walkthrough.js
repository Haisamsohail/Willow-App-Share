import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {Pages, Indicator} from 'react-native-pages';
import AppImages from '../theme/AppImages';
import Strings from '../theme/Strings';
import Colors from '../theme/Colors';
import FontWeight from '../theme/FontWeight';
import FontSize from '../theme/FontSize';

export default class Walkthrough extends Component {
  onNextClick = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    const ScreenHeight = Dimensions.get('window').height;
    const ScreenWidth = Dimensions.get('window').width;
    return (
      <View style={{flex: 1, backgroundColor: Colors.BackGroundColorWhite}}>
        <View style={{height: ScreenHeight - 100}}>
          <Pages indicatorOpacity={0.50} indicatorColor="#2DDA93">
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.BackGroundColorWhite,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{margin: 20, width: 280, height: 280}}
                source={AppImages.page1}
              />
              <Text
                style={{
                  margin: 10,
                  fontSize: 22,
                  fontWeight: FontWeight.BoldWeight,
                }}>
                {Strings.Page1Txt}
              </Text>
              <Text
                style={{
                  marginLeft: 40,
                  marginRight: 40,
                  textAlign: 'center',
                  paddingHorizontal: 20,
                  paddingBottom:30,
                  color: '#8E929D'
                }}>
                {Strings.Page1Txt2}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.BackGroundColorWhite,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={{margin: 20, width: 280, height: 280}} source={AppImages.page2} />
              <Text style={{margin: 10, fontSize: 22, fontWeight: 'bold'}}>
                {Strings.Page2Txt}
              </Text>
              <Text
                style={{
                    marginLeft: 40,
                    marginRight: 40,
                    textAlign: 'center',
                    paddingHorizontal: 20,
                    paddingBottom:30,
                    color: '#8E929D'
                }}>
                {Strings.Page2Txt2}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.BackGroundColorWhite,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={{margin: 20, width: 270, height: 270}} source={AppImages.page3} />
              <Text
                style={{
                  margin: 5,
                  fontSize: 22,
                  fontWeight: 'bold',
                }}>
                {Strings.Page3Txt}
              </Text>
              <Text
                style={{
                    marginLeft: 40,
                    marginRight: 40,
                    textAlign: 'center',
                    paddingHorizontal: 20,
                    paddingBottom:30,
                    color: '#8E929D'
                }}>
                {Strings.Page3Txt2}
              </Text>
            </View>
          </Pages>

          <TouchableOpacity
            onPress={this.onNextClick}
            style={{
              margin: 20,
              borderColor: 'black',
              elevation: 5,
              borderRadius: 3,
              width: ScreenWidth - 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2dda93',
              height: 50,
              alignSelf: 'center',
              fontWeight: 'bold'
            }}>
            <Text
              style={{color: Colors.BackGroundColorWhite, fontWeight: 'bold'}}>
              {Strings.NextTxt}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin: 20, alignSelf: 'center'}} onPress={this.onNextClick}>
            <Text
              style={{
                color: Colors.ColorPrimary,
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}>
              {Strings.LaterTxt}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              marginLeft: 140,
              marginRight: 140,
              position: 'relative',
              top: 60,
              borderBottomColor: '#E3E3E3',
              borderBottomWidth: 4,
            }}></View>
        </View>
      </View>
    );
  }
}
