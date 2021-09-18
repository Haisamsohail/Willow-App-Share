import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import Colors from '../theme/Colors';
import AppImages from '../theme/AppImages';
import Strings from '../theme/Strings';
import FontSize from '../theme/FontSize';
import FontWeight from '../theme/FontWeight';
import Svg, {Circle, Path} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {color} from 'react-native-elements/dist/helpers';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';

const ProfileScreen = ({navigation}) => {
  const ScreenHeight = Dimensions.get('window').height;
  const ScreenWidth = Dimensions.get('window').width;

  const LeftContent = props => (
    <Avatar.Image size={28} source={require('../assets/HamzaImg.png')} />
  );

  const onProfileClick = () => {
    navigation.navigate('Profile');
  };
  const onBackClick = () => {
    navigation.navigate('Dashboard');
  };
  const onConnectClick = () => {
    navigation.navigate('ConnectPlant');
  };
  const onBlogClick = () => {
    navigation.navigate('Blog');
  };
  const onBlogDetailClick = () => {
    navigation.navigate('BlogDetail');
  };
  const onMyPlantClick = () => {
    navigation.navigate('MyPlants');
  };
  const onHomeClick = () => {
    navigation.navigate('Dashboard');
  };
  const onCameraClick = () => {
    ImageCropPicker.openCamera({
      cropping: false,
    }).then(image => {
      console.log(image);

      var img = {sourceURL: image.path};
      this.state.multipleFile.push(img);

      this.setState({multipleFile: this.state.multipleFile});
    });
  };

  const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      height: ScreenHeight,
      width: ScreenWidth,
    },
    scrollSet: {
      height: '100%',
      width: ScreenWidth,
      backgroundColor: Colors.ColorPink,
    },
    header: {
      height: 130,
      width: '100%',
      position: 'relative',
      elevation: 10,
      backgroundColor: '#49D5AE',
    },
    headerIcon: {
      marginHorizontal: 20,
      marginVertical: 22,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerTitle: {
      marginHorizontal: 20,
    },
    titleText: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 32,
      textAlign: 'center',
      textTransform: 'capitalize',
    },

    contianer: {
      margin: 20,
    },
    card: {
      //elevation: 5,
      borderRadius: 8,
      marginBottom: 5,
    },
    bottomView: {
      width: '100%',
      height: 60,
      backgroundColor: '#EE5407',
      position: 'absolute',
      bottom: 0,
      elevation: 10,
    },
    content: {
      flexDirection: 'column',
      zIndex: 0,
      width: Dimensions.get('screen').width,
      position: 'absolute',
      bottom: -7,
    },
  });

  return (
    <View style={styles.containerMain}>
      <ScrollView style={styles.scrollSet}>
        <View>
          {/* Header Start */}
          <View style={styles.header}>
            {/* Header Icons */}
            <View style={styles.headerIcon}>
              <TouchableOpacity onPress={onBackClick}>
                <Icon name="chevron-left" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="ellipsis-v" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            {/* Header Title */}
            <View style={styles.headerTitle}>
              <Text style={styles.titleText}>Profile</Text>
            </View>
          </View>
          {/* Header End */}
        </View>
        {/* Edit Image Starts */}
        <View
          style={{
            height: 160,
            width: ScreenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 90,
              width: 90,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={AppImages.HamzaImg}
              style={{
                height: 120,
                width: 120,
                borderRadius: 90,
                borderWidth: 2,
                borderColor: 'white',
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: Colors.BackGroundColorWhite,
                elevation: 6,
                height: 50,
                width: 50,
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: 0,
                top: -15,
                bottom: 10,
                left: 70,
              }}>
              <Icon name="pencil-alt" size={20} color="#14213d" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Edit Image End*/}
        {/* Content Start */}
        <View style={styles.contianer}>
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text
                style={{
                  marginBottom: 10,
                  paddingBottom: 0,
                  color: '#14213d',
                  fontWeight: 'bold',
                  fontSize: FontSize.defaultTxtSize,
                }}>
                Name
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#e5e5e5',
                  marginBottom: 10,
                  borderRadius: 10,
                  padding: 15,
                }}
                placeholder="Sara Jessica Parker"
              />
              <Text
                style={{
                  marginBottom: 10,
                  paddingBottom: 0,
                  color: '#14213d',
                  fontWeight: 'bold',
                  fontSize: FontSize.defaultTxtSize,
                }}>
                UserName
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#e5e5e5',
                  borderRadius: 10,
                  marginBottom: 10,
                  padding: 15,
                }}
                placeholder="Sara"
              />
              <Text
                style={{
                  marginBottom: 10,
                  paddingBottom: 0,
                  color: '#14213d',
                  fontWeight: 'bold',
                  fontSize: FontSize.defaultTxtSize,
                }}>
                Email Address
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#e5e5e5',
                  borderRadius: 10,
                  marginBottom: 10,
                  padding: 15,
                }}
                placeholder="Sara"
              />
              <Text
                style={{
                  marginBottom: 10,
                  paddingBottom: 0,
                  color: '#14213d',
                  fontWeight: 'bold',
                  fontSize: FontSize.defaultTxtSize,
                }}>
                ID
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#e5e5e5',
                  borderRadius: 10,
                  marginBottom: 10,
                  padding: 15,
                }}
                placeholder="#12456"
              />
            </Card.Content>
          </Card>
        </View>
        {/* SAVE BUTTON */}
        <View style={{margin: 10, alignSelf: 'center'}}>
          <TouchableOpacity
            style={{
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
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
        {/* Content End */}
        <View style={{height: 120}}></View>
      </ScrollView>
      {/* Footer */}
      <View style={styles.bottomView}>
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
            style={{elevation: 10, shadowColor: 'grey'}}>
            <Path
              fill={'#ffffff'}
              stroke={'white'}
              d={`M 30 60 h 356 c 17 -21 127 -74 152 -70 C 568 -19 672 25 706.7 60 H 1062 c 16.6 0 30 13.4 30 30 v 94 c -1 68 2 69 -1 69 H 76 c -74 1 -76 3 -75 0 V 90 C 0 73.4 13.4 60 30 60 z`}
            />
            <Circle
              fill={Colors.ColorPrimary}
              stroke={'#7EE6D2'}
              cx="546"
              cy="100"
              r="70"
            />
          </Svg>
        </View>

        <TouchableOpacity
          onPress={onConnectClick}
          style={{position: 'absolute', left: '47%', top: -5}}>
          <Icon name="camera" color="white" size={22}></Icon>
        </TouchableOpacity>

        {/* Home */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}>
          <TouchableOpacity
            onPress={onHomeClick}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              top: 10,
            }}>
            <Icon name="home" size={25} color={'#A4A2A4'} />
            <Text
              style={{
                fontSize: FontSize.defaultTxtSize,
                textTransform: 'uppercase',
                color: '#A4A2A4',
                marginTop: 3,
                marginBottom: 10,
              }}>
              Home
            </Text>
          </TouchableOpacity>
          {/* My Plant */}
          <TouchableOpacity
            onPress={onMyPlantClick}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              top: 10,
              //marginRight: 100,
              right: 20,
            }}>
            <Icon name="envira" size={25} color={'#A4A2A4'} />
            <Text
              style={{
                fontSize: FontSize.defaultTxtSize,
                marginTop: 3,
                textTransform: 'uppercase',
                color: '#A4A2A4',
                marginBottom: 10,
              }}>
              MY PLANTS
            </Text>
          </TouchableOpacity>

          {/* Blogs */}
          {/* Bottom Stack */}
          <TouchableOpacity
            onPress={onBlogClick}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              top: 10,
              left: 20,
            }}>
            <Icon name="book-open" size={25} color={'#A4A2A4'} />
            <Text
              style={{
                fontSize: FontSize.defaultTxtSize,
                marginTop: 3,
                textTransform: 'uppercase',
                color: '#A4A2A4',
                marginBottom: 10,
              }}>
              BLOG
            </Text>
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity
            onPress={onProfileClick}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              top: 10,
            }}>
            <Icon
              name="user"
              size={25}
              color={'#2DDA93'}
            />
            <Text
              style={{
                fontSize: FontSize.defaultTxtSize,
                marginTop: 3,
                textTransform: 'uppercase',
                color: '#2DDA93',
                marginBottom: 10,
              }}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
