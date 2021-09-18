import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
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
import ImageCropPicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const MyPlants = ({navigation}) => {
  const ScreenHeight = Dimensions.get('window').height;
  const ScreenWidth = Dimensions.get('window').width;

  const LeftContent = props => (
    <Avatar.Image size={28} source={require('../assets/HamzaImg.png')} />
  );

  const onProfileClick = () => {
    navigation.navigate('Profile');
  };
  const onPlantClick = () => {
    navigation.navigate('PlantOverview');
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

  const Data = [
    {
      id: 1,
      text: 'Monstera with long name',
      img2: require('../assets/Img40.png'),
      img1: require('../assets/plants.png'),
      Desc: 'Your plants need some attention',
    },
    {
      id: 2,
      text: 'Monstera with long name',
      img2: require('../assets/Img40.png'),
      img1: require('../assets/plants.png'),
      Desc: 'Your plants need some attention',
    },
    {
      id: 3,
      text: 'Monstera with long name',
      img2: require('../assets/Img40.png'),
      img1: require('../assets/plants.png'),
      Desc: 'Your plants need some attention',
    },
    {
      id: 4,
      text: 'Monstera with long name',
      img2: require('../assets/Img40.png'),
      img1: require('../assets/plants.png'),
      Desc: 'Your plants need some attention',
    },
  ];

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
      height: 160,
      width: '100%',
      position: 'relative',
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
      textTransform: 'capitalize',
    },
    searchBox: {
      elevation: 10,
      flexDirection: 'row',
      width: ScreenWidth - 40,
      position: 'absolute',
      bottom: 0,
      backgroundColor: Colors.BackGroundColorWhite,
      alignSelf: 'center',
      borderRadius: 25,
    },
    searchInput: {
      marginLeft: 20,
    },
    searchIcon: {
      //marginHorizontal: 176,
      alignSelf: 'center',
      marginLeft: 'auto',
      right: 20,
    },
    ContentTitle: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 10,
    },
    contentText: {
      fontWeight: 'bold',
      color: '#000',
      fontSize: 28,
      textTransform: 'capitalize',
    },
    connectContainer: {
      flex: 1,
      marginStart: 20,
      marginEnd: 20,
      marginBottom: -10,
    },
    cameraCard: {
      marginTop: 10,
      backgroundColor: '#fff',
      height: hp('20%'),
      //elevation: 5,
      borderRadius: 5,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardText: {
      marginTop: 10,
      fontSize: 14,
      color: '#7B787B',
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
              <Text style={styles.titleText}>Plants</Text>
            </View>
          </View>
          {/* Header End */}
          {/* Search Box Start */}
          <View style={{height: 20}}></View>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search for your plants"
              style={styles.searchInput}
            />
            <Icon name="search" size={20} style={styles.searchIcon} />
          </View>
          {/* Search Box End */}
        </View>
        {/* Content Start */}
        <View style={styles.ContentTitle}>
          <Text style={styles.contentText}>My Plants</Text>
        </View>
        <View style={styles.connectContainer}>
          <TouchableOpacity onPress={onConnectClick}>
            <View style={styles.cameraCard}>
              <Icon name="camera" size={28} color="#34DB97" />
              <Text style={styles.cardText}>
                Add new plant and pair with sensors
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', padding: 30}}>
          <ScrollView>
            <TouchableOpacity
              onPress={onPlantClick}
              style={{
                elevation: 5,
                margin: 10,
                borderRadius: 5,
                width: 300,
                height: 150,
                backgroundColor: Colors.BackGroundColorWhite,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    width: 130,
                    height: 150,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                  source={require('../assets/plants.png')}
                />
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 170,
                  }}>
                  <Text
                    style={{
                      margin: 2,
                      color: Colors.ColorPrimaryDark,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    Monstera with long name
                  </Text>
                  <Image
                    style={{alignItems: 'center'}}
                    source={require('../assets/Img40.png')}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#B7B5B7',
                      right: 5,
                      //marginStart: -18,
                    }}>
                    Your plants need some attention
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPlantClick}
              style={{
                elevation: 5,
                margin: 10,
                borderRadius: 5,
                width: 300,
                height: 150,
                backgroundColor: Colors.BackGroundColorWhite,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    width: 130,
                    height: 150,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                  source={require('../assets/plants.png')}
                />
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 170,
                  }}>
                  <Text
                    style={{
                      margin: 2,
                      color: Colors.ColorPrimaryDark,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    Monstera with long name
                  </Text>
                  <Image
                    style={{alignItems: 'center'}}
                    source={require('../assets/Img40.png')}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#B7B5B7',
                      right: 5,
                      //marginStart: -18,
                    }}>
                    Your plants need some attention
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPlantClick}
              style={{
                elevation: 5,
                margin: 10,
                borderRadius: 5,
                width: 300,
                height: 150,
                backgroundColor: Colors.BackGroundColorWhite,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    width: 130,
                    height: 150,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                  source={require('../assets/plants.png')}
                />
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 170,
                  }}>
                  <Text
                    style={{
                      margin: 2,
                      color: Colors.ColorPrimaryDark,
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    Monstera with long name
                  </Text>
                  <Image
                    style={{alignItems: 'center'}}
                    source={require('../assets/Img40.png')}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#B7B5B7',
                      right: 5,
                      //marginStart: -18,
                    }}>
                    Your plants need some attention
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* Content End */}
        <View style={{height: 90}}></View>
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
            <Icon name="envira" size={25} color={'#2DDA93'} />
            <Text
              style={{
                fontSize: FontSize.defaultTxtSize,
                marginTop: 3,
                textTransform: 'uppercase',
                color: '#2DDA93',
                marginBottom: 10,
              }}>
              MY PLANTS
            </Text>
          </TouchableOpacity>
          {/* Blogs */}
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
              color={'#A4A2A4'}
              backgroundColor={'#A4A2A4'}
            />
            <Text
              style={{
                fontSize: FontSize.defaultTxtSize,
                marginTop: 3,
                textTransform: 'uppercase',
                color: '#A4A2A4',
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

export default MyPlants;
