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
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Colors from '../theme/Colors';
import FontSize from '../theme/FontSize';
import Svg, {Circle, Path} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {color} from 'react-native-elements/dist/helpers';
import ImageCropPicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const PlantDetailInner = ({navigation}) => {
  const LeftContent = props => (
    <Avatar.Image size={30} source={require('../assets/HamzaImg.png')} />
  );

  const onProfileClick = () => {
    navigation.navigate('Profile');
  };
  const onConnectClick = () => {
    navigation.navigate('ConnectPlant');
  };
  const onBackClick = () => {
    navigation.navigate('MyPlants');
  };
  const onBlogClick = () => {
    navigation.navigate('Blog');
  };
  const onMyPlantClick = () => {
    navigation.navigate('PlantTypeSearchDetail');
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

  return (
    <View style={styles.containerMain}>
      <ScrollView style={styles.scrollSet}>
        <View>
          {/* Header Start */}
          <ImageBackground
            source={{uri: 'https://picsum.photos/900'}}
            resizeMode="cover"
            style={styles.header}>
            <View style={styles.headerIcon}>
              <TouchableOpacity onPress={onBackClick}>
                <Icon name="chevron-left" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onBackClick}>
                <Icon name="ellipsis-v" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            {/* Header Icons */}
          </ImageBackground>
          {/* Header End */}
        </View>
        {/* Content Start */}
        <View style={styles.container}>
          {/* Title */}
          <View style={styles.plantTitle}>
            <Text style={styles.titleText}>Circle Cactus</Text>
            <TouchableOpacity>
              <Icon
                name="bookmark"
                size={24}
                color={'#979597'}
                style={styles.bookmarkIcon}
              />
            </TouchableOpacity>
          </View>
          {/* Subtitle */}
          <View style={styles.plantSubtitle}>
            <Text style={styles.subtitleText}>Planae - Monstera</Text>
          </View>
          {/* Plant Health Card */}
          <View style={styles.plantHealthCard}>
            <View style={styles.healthCardHeader}>
              <Text style={styles.titleHealthCard}>Details</Text>
            </View>
            <View style={styles.kingdomFamilyContent}>
              {/* Kingdom */}
              <View style={styles.kingdomContent}>
                <Text style={styles.titleHealthCard}>KINGDOM</Text>
                <Text style={styles.kingdomFamText}>Plantae</Text>
              </View>
              {/* Family */}
              <View style={styles.familyContent}>
                <Text style={styles.titleHealthCard}>FAMILY</Text>
                <Text style={styles.kingdomFamText}>Plantae</Text>
              </View>
            </View>
            <View style={styles.descContent}>
              <Text style={styles.titleHealthCard}>Description</Text>
              <Text style={styles.descText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tellus lectus, consectetur non tempus non, mollis a nunc. Proin
                mollis arcu id urna dictum, ac tempus risus sagittis.
              </Text>
            </View>
          </View>
          {/* Camera Card */}
          <TouchableOpacity onPress={onConnectClick}>
            <View style={styles.cameraCard}>
              <Icon
                name="camera"
                size={28}
                color="#34DB97"
                style={styles.cameraIcon}
              />
              <Text style={styles.camerSensorText}>No Sensor paired yet</Text>
              <Text style={styles.pairSensorText}>Pair this plant</Text>
            </View>
          </TouchableOpacity>
          {/* Instruction Card */}
          <View style={styles.instructionCard}>
            <View style={styles.instContent}>
              <Text style={styles.titleHealthCard}>
                Generic Care Instruction
              </Text>
              <Text style={styles.descText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tellus lectus, consectetur non tempus non, mollis a nunc.
              </Text>
            </View>
            <View style={styles.plantProp}>
              <View style={styles.waterProp}>
                <Icon
                  name="tint"
                  size={16}
                  color="#85B6FF"
                  style={styles.iconDrop}
                />
                <View style={styles.waterPropConten}>
                  <Text style={styles.waterText}>Water</Text>
                  <Text style={styles.waterSubtitle}>600ml</Text>
                </View>
              </View>
              <View style={styles.waterProp}>
                <Icon
                  name="sun"
                  size={16}
                  color="#FFD639"
                  style={styles.iconDrop}
                />
                <View style={styles.waterPropConten}>
                  <Text style={styles.waterText}>Light</Text>
                  <Text style={styles.waterSubtitle}>Full Day</Text>
                </View>
              </View>
              <View style={styles.waterProp}>
                <Icon
                  name="thermometer-half"
                  size={16}
                  color="#FFB34C"
                  style={styles.iconDrop}
                />
                <View style={styles.waterPropConten}>
                  <Text style={styles.waterText}>Temp</Text>
                  <Text style={styles.waterSubtitle}>dry & warm</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Care Title */}
          <View style={styles.plantTitle}>
            <Text style={styles.titleText}>Additional Infromation</Text>
          </View>
          {/* Accordion Start */}
          {/* Water */}
          <Collapse style={styles.waterAccordion}>
            <CollapseHeader style={styles.waterAccordionHeader}>
              <View style={styles.waterHeaderContent}>
                <View style={styles.waterRow}>
                  <Icon name="tint" size={20} color="#000" />
                  <Text style={styles.textContent}>Water</Text>
                </View>
                <View>
                  <Icon name="chevron-down" size={20} color="#000" />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody style={styles.waterAccordionBody}>
              <Text style={styles.waterContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tellus lectus, consectetur non tempus non
              </Text>
            </CollapseBody>
          </Collapse>
          {/* Light */}
          <Collapse style={styles.waterAccordion}>
            <CollapseHeader style={styles.waterAccordionHeader}>
              <View style={styles.waterHeaderContent}>
                <View style={styles.waterRow}>
                  <Icon name="sun" size={20} color="#000" />
                  <Text style={[styles.textContentLight]}>Light</Text>
                </View>
                <View>
                  <Icon name="chevron-down" size={20} color="#000" />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody style={styles.waterAccordionBody}>
              <Text style={styles.waterContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tellus lectus, consectetur non tempus non
              </Text>
            </CollapseBody>
          </Collapse>
          {/* Temperature */}
          <Collapse style={styles.waterAccordion}>
            <CollapseHeader style={styles.waterAccordionHeader}>
              <View style={styles.waterHeaderContent}>
                <View style={styles.waterRow}>
                  <Icon name="thermometer-half" size={20} color="#000" />
                  <Text style={styles.textContent}>Temperature</Text>
                </View>
                <View>
                  <Icon name="chevron-down" size={20} color="#000" />
                </View>
              </View>
            </CollapseHeader>
            <CollapseBody style={styles.waterAccordionBody}>
              <Text style={styles.waterContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tellus lectus, consectetur non tempus non
              </Text>
            </CollapseBody>
          </Collapse>
          {/* Accordion End */}
        </View>
        {/* Content End */}
        <View style={{height: hp('15%')}}></View>
      </ScrollView>
      {/* Footer Start */}
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
      {/* Footer End */}
    </View>
  );
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
    height: hp('30%'),
    width: wp('100%'),
    position: 'relative',
    //   backgroundColor: '#49D5AE',
  },
  headerIcon: {
    marginHorizontal: 20,
    marginVertical: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    marginStart: 15,
    marginEnd: 15,
    marginTop: 20,
  },
  plantTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111E3A',
    textTransform: 'capitalize',
  },
  plantSubtitle: {
    marginTop: 3,
    marginBottom: 10,
  },
  bookmarkIcon: {
    marginTop: 5,
  },
  subtitleText: {
    fontSize: 16,
    color: '#5B585B',
    textTransform: 'capitalize',
  },
  plantHealthCard: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 10,
    borderRadius: 5,
    elevation: 5,
  },
  healthCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleHealthCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343F58',
  },
  kingdomFamilyContent: {
    flexDirection: 'row',
    marginTop: 10,
    flex: 1,
  },
  kingdomContent: {
    marginEnd: 50,
  },
  kingdomFamText: {
    marginTop: 4,
    fontSize: 14,
    color: '#7B797B',
  },
  descContent: {
    marginTop: 10,
  },
  descText: {
    marginTop: 4,
    fontSize: 14,
    color: '#7B797B',
    marginBottom: 10,
  },
  cameraCard: {
    marginTop: 15,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 10,
    borderRadius: 5,
  },
  cameraIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  camerSensorText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  pairSensorText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 5,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  plantProp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 8,
  },
  waterProp: {
    flexDirection: 'row',
  },
  iconDrop: {
    marginRight: 8,
    marginTop: 7,
  },
  waterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1D2944',
  },
  waterSubtitle: {
    fontSize: 12,
    color: '#475268',
  },
  instructionCard: {
    marginTop: 15,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 10,
    borderRadius: 5,
    elevation: 5,
    marginBottom: 15,
  },
  waterAccordion: {
    marginTop: 15,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 5,
  },
  waterAccordionHeader: {
    paddingTop: 10,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 10,
  },
  waterHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  waterRow: {
    flexDirection: 'row',
  },
  textContent: {
    fontSize: 18,
    marginLeft: 18,
  },
  textContentLight: {
    fontSize: 18,
    marginLeft: 16,
  },
  waterAccordionBody: {
    paddingTop: 8,
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 10,
  },
  waterContent: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#676467',
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

export default PlantDetailInner;
