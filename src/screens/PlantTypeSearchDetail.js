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

const PlantTypeSearchDetail = ({navigation}) => {
  const ScreenHeight = Dimensions.get('window').height;
  const ScreenWidth = Dimensions.get('window').width;

  const onProfileClick = () => {
    navigation.navigate('Profile');
  };
  const onBackClick = () => {
    navigation.navigate('PlantTypeSearch');
  };
  const onBlogClick = () => {
    navigation.navigate('Blog');
  };
  const onHomeClick = () => {
    navigation.navigate('Dashboard');
  };
  const onMyPlantClick = () => {
    navigation.navigate('MyPlants');
  };
  const onConnectPlantClick = () => {
    navigation.navigate('ConnectPlant');
  };
  const onPlantTypeDetail = () => {
    navigation.navigate('PlantDetailInner');
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
      //display: "flex",
      //alignItems: 'flex-end',
      alignSelf: 'center',
      marginLeft: 'auto',
      right: 25,
      //marginLeft: 140
      //paddingLeft: 140
    },
    shadow: {},
    plantContainer: {
      flex: 1,
      margin: 15,
      padding: 3,
      flexDirection: 'row',
      //backgroundColor: '#fff',
      borderRadius: 10,
      //elevation: 10,
    },
    plantImage: {
      flex: 4,
      height: 155,
      backgroundColor: '#fff',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    plantImg: {
      height: 155,
      width: 140,
    },
    plantContent: {
      flex: 5,
      height: 155,
      backgroundColor: '#fff',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    plantText: {
      margin: 10,
    },
    mainTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'capitalize',
      color: '#000',
      marginBottom: 10,
    },
    kingdomFamilyWrapper: {
      flexDirection: 'row',
    },
    kingdomText: {
      fontSize: 14,
      textTransform: 'uppercase',
      color: '#C7CBD5',
      marginRight: 20,
    },
    familyText: {
      fontSize: 14,
      textTransform: 'uppercase',
      color: '#C7CBD5',
    },
    kingdomFamilyContent: {
      flexDirection: 'row',
    },
    kingdomContent: {
      fontSize: 12,
      textTransform: 'capitalize',
      color: '#5A6574',
      marginRight: 42,
      marginTop: 3,
    },
    familyContent: {
      fontSize: 12,
      textTransform: 'capitalize',
      color: '#5A6574',
      marginTop: 3,
    },
    descTitle: {
      marginTop: 10,
      fontSize: 14,
      textTransform: 'uppercase',
      color: '#C7CBD5',
    },
    descText: {
      fontSize: 12,
      textTransform: 'none',
      color: '#5A6574',
      width: 160,
      marginTop: 2,
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
              <Text style={styles.titleText}>Cactus</Text>
            </View>
          </View>
          {/* Header End */}
          {/* Search Box Start */}
          <View style={{height: 20}}></View>
          <View style={styles.searchBox}>
            <TextInput
              placeholder={Strings.SearchPlantsTxt}
              style={styles.searchInput}
            />
            <Icon name="search" size={20} style={styles.searchIcon} />
          </View>
          {/* Search Box End */}
        </View>
        {/* Content Start */}
        <TouchableOpacity onPress={onPlantTypeDetail} style={styles.shadow}>
          <View style={styles.plantContainer}>
            <View style={styles.plantImage}>
              <Image
                source={require('../assets/plants.png')}
                style={styles.plantImg}
                resizeMode="cover"
              />
            </View>
            <View style={styles.plantContent}>
              <View style={styles.plantText}>
                <Text style={styles.mainTitle}>Red Cactus</Text>
                <View style={styles.kingdomFamilyWrapper}>
                  <Text style={styles.kingdomText}>Kingdom</Text>
                  <Text style={styles.familyText}>Family</Text>
                </View>
                <View style={styles.kingdomFamilyContent}>
                  <Text style={styles.kingdomContent}>Plantae</Text>
                  <Text style={styles.familyContent}>Cactaceae</Text>
                </View>
                <Text style={styles.descTitle}>Description</Text>

                <Text numberOfLines={2} style={styles.descText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to mak
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlantTypeDetail} style={styles.shadow}>
          <View style={styles.plantContainer}>
            <View style={styles.plantImage}>
              <Image
                source={require('../assets/plants.png')}
                style={styles.plantImg}
                resizeMode="cover"
              />
            </View>
            <View style={styles.plantContent}>
              <View style={styles.plantText}>
                <Text style={styles.mainTitle}>Red Cactus</Text>
                <View style={styles.kingdomFamilyWrapper}>
                  <Text style={styles.kingdomText}>Kingdom</Text>
                  <Text style={styles.familyText}>Family</Text>
                </View>
                <View style={styles.kingdomFamilyContent}>
                  <Text style={styles.kingdomContent}>Plantae</Text>
                  <Text style={styles.familyContent}>Cactaceae</Text>
                </View>
                <Text style={styles.descTitle}>Description</Text>

                <Text numberOfLines={2} style={styles.descText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to mak
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlantTypeDetail} style={styles.shadow}>
          <View style={styles.plantContainer}>
            <View style={styles.plantImage}>
              <Image
                source={require('../assets/plants.png')}
                style={styles.plantImg}
                resizeMode="cover"
              />
            </View>
            <View style={styles.plantContent}>
              <View style={styles.plantText}>
                <Text style={styles.mainTitle}>Red Cactus</Text>
                <View style={styles.kingdomFamilyWrapper}>
                  <Text style={styles.kingdomText}>Kingdom</Text>
                  <Text style={styles.familyText}>Family</Text>
                </View>
                <View style={styles.kingdomFamilyContent}>
                  <Text style={styles.kingdomContent}>Plantae</Text>
                  <Text style={styles.familyContent}>Cactaceae</Text>
                </View>
                <Text style={styles.descTitle}>Description</Text>

                <Text numberOfLines={2} style={styles.descText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to mak
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* Content End */}
        <View style={{height: 100}}></View>
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
          onPress={onConnectPlantClick}
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
            <Icon name="home" size={25} color={'#2DDA93'} />
            <Text
              style={{
                fontSize: FontSize.defaultTxtSize,
                textTransform: 'uppercase',
                color: '#2DDA93',
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

export default PlantTypeSearchDetail;
