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

const PlantOverview = ({navigation}) => {
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
            </View>
            {/* Header Icons */}
          </ImageBackground>
          {/* Header End */}
        </View>
        {/* Content Start */}
        <View style={styles.container}>
          {/* Title */}
          <View style={styles.plantTitle}>
            <Text style={styles.titleText}>Monty</Text>
          </View>
          {/* Subtitle */}
          <View style={styles.plantSubtitle}>
            <Text style={styles.subtitleText}>Planae - Monstera</Text>
          </View>
          {/* Plant Health Card */}
          <View style={styles.plantHealthCard}>
            <View style={styles.healthCardHeader}>
              <Text style={styles.titleHealthCard}>Plant Health</Text>
              <TouchableOpacity style={styles.infoIcon}>
                <Icon name="info-circle" size={18} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBar}>
              <ProgressCircle
                percent={90}
                radius={50}
                borderWidth={8}
                color="#2DDA93"
                shadowColor="#CCCBCC"
                bgColor="#fff">
                <Icon name="envira" size={34} color="#2DDA93" />
              </ProgressCircle>
            </View>
            <View style={styles.progressText}>
              <Text style={styles.progressNumber}>90%</Text>
              <Text style={styles.progressTitle}>Plant Happiness</Text>
              <Text style={styles.progressDesc}>
                Monty is very healthy but needs more water
              </Text>
            </View>
          </View>
          {/* Small Cards Start */}
          <View style={styles.rowCard}>
            {/* Water */}
            <View style={styles.waterCard}>
              <View style={styles.waterProgressBar}>
                <ProgressCircle
                  percent={90}
                  radius={30}
                  borderWidth={6}
                  color="#85B6FF"
                  shadowColor="#CCCBCC"
                  bgColor="#fff">
                  <Icon name="tint" size={20} color="#85B6FF" />
                </ProgressCircle>
              </View>
              <Text style={styles.waterText}>Water</Text>
              <Text style={styles.waterSubtitle}>600 ml every 3 weeks</Text>
            </View>
            {/* Light */}
            <View style={styles.lightCard}>
              <View style={styles.waterProgressBar}>
                <ProgressCircle
                  percent={90}
                  radius={30}
                  borderWidth={6}
                  color="#FFD639"
                  shadowColor="#CCCBCC"
                  bgColor="#fff">
                  <Icon name="sun" size={20} color="#FFD639" />
                </ProgressCircle>
              </View>
              <Text style={styles.waterText}>Light</Text>
              <Text style={styles.waterSubtitle}>All day</Text>
            </View>
            {/* Temp */}
            <View style={styles.tempCard}>
              <View style={styles.waterProgressBar}>
                <ProgressCircle
                  percent={90}
                  radius={30}
                  borderWidth={6}
                  color="#FFB44D"
                  shadowColor="#CCCBCC"
                  bgColor="#fff">
                  <Icon name="thermometer-half" size={20} color="#FFB44D" />
                </ProgressCircle>
              </View>
              <Text style={styles.waterText}>Temp</Text>
              <Text style={styles.waterSubtitle}>dry and warm place</Text>
            </View>
          </View>
          {/* Small Cards End */}
          {/* Care Title */}
          <View style={styles.plantTitle}>
            <Text style={styles.titleText}>Care Instruction</Text>
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
          {/* Pairing Title */}
          <View style={styles.pairingTitle}>
            <Text style={styles.titleText}>Pairing</Text>
          </View>
          {/* Pairing Card */}
          <View style={styles.pairCard}>
            <View style={styles.pairContent}>
              <Text style={styles.pairedText}>Paired with</Text>
              <View style={styles.SensorContent}>
                <Text style={styles.sensorText}>Sensor 1</Text>
                <Icon name="ellipsis-v" size={18} color="#000" />
              </View>
            </View>
          </View>
        </View>
        {/* Content End */}
        <View style={{height: hp('15%')}}></View>
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
    marginTop: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111E3A',
    textTransform: 'capitalize',
  },
  plantSubtitle: {
    marginTop: 3,
  },
  subtitleText: {
    fontSize: 16,
    color: '#5B585B',
    textTransform: 'capitalize',
  },
  plantHealthCard: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingStart: 8,
    paddingEnd: 8,
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
  infoIcon: {
    marginRight: 6,
    marginTop: 2,
  },
  progressBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  progressNumber: {
    marginTop: 3,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#14213D',
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#29354E',
    marginBottom: 6,
  },
  progressDesc: {
    fontSize: 14,
    color: '#B7B6B7',
    marginBottom: 14,
  },
  rowCard: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  waterCard: {
    backgroundColor: '#fff',
    width: wp('29%'),
    height: hp('20%'),
    elevation: 3,
    borderRadius: 5,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waterProgressBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  waterText: {
    fontSize: 18,
    marginTop: 5,
    color: '#1F2C47',
    fontWeight: 'bold',
  },
  waterSubtitle: {
    marginTop: 2,
    fontSize: 11,
    color: '#C7C6C7',
  },
  lightCard: {
    backgroundColor: '#fff',
    width: wp('29%'),
    height: hp('20%'),
    elevation: 3,
    borderRadius: 5,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempCard: {
    backgroundColor: '#fff',
    width: wp('29%'),
    height: hp('20%'),
    elevation: 3,
    borderRadius: 5,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
  pairingTitle: {
    marginTop: 18,
    marginBottom: 10,
  },
  pairCard: {
    backgroundColor: '#fff',
    paddingTop: 18,
    paddingBottom: 18,
    paddingStart: 10,
    paddingEnd: 10,
    borderRadius: 5,
    elevation: 2,
  },
  pairContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SensorContent: {
    flexDirection: 'row',
  },
  pairedText: {
    fontSize: 16,
    color: '#000',
  },
  sensorText: {
    fontSize: 16,
    marginRight: 40,
    color: '#5AE2AB',
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

export default PlantOverview;
