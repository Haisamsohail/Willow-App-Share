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

const BlogDetail = ({navigation}) => {
  const ScreenHeight = Dimensions.get('window').height;
  const ScreenWidth = Dimensions.get('window').width;

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
    navigation.navigate('Blog');
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
      height: hp('25%'),
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
    blogContainer: {
      marginStart: 20,
      marginEnd: 20,
    },
    category: {
      marginTop: 20,
      flexDirection: 'row',
    },
    categoryOne: {
      backgroundColor: '#DBDFE4',
      borderRadius: 5,
      paddingStart: 10,
      paddingEnd: 10,
      paddingTop: 3,
      paddingBottom: 3,
      width: wp('22%'),
      alignSelf: 'center',
      marginEnd: 10,
    },
    categoryOneText: {
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      color: '#000',
      textTransform: 'uppercase',
      fontSize: 12,
      fontWeight: 'bold',
    },
    blogTitle: {
      marginTop: 30,
    },
    blogTitleText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    blogAuthorDetail: {
      marginTop: 5,
      marginLeft: -8,
    },
    bookmarkIcon: {
      left: 130,
    },
    cardTitle: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: 'bold',
      color: '#0D1A37',
    },
    cardAvatarTitle: {
      fontSize: 12,
      marginLeft: -18,
      marginTop: 0,
      color: '#0D1A37',
    },
    cardAvatarSubtitle: {
      marginTop: -8,
      marginLeft: -18,
      fontSize: 10,
      color: '#B8BDCB',
    },
    blogContentText: {
      fontSize: 14,
      lineHeight: 23,
      color: '#555255',
      textAlign: 'left',
      marginBottom: 10,
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
        <View style={styles.blogContainer}>
          <View style={styles.category}>
            <TouchableOpacity>
              <View style={styles.categoryOne}>
                <Text style={styles.categoryOneText}>Care</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.categoryOne}>
                <Text style={styles.categoryOneText}>Indoor</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookmarkIcon}>
              <Icon name="bookmark" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.blogTitle}>
            <Text style={styles.blogTitleText}>
              Top 10 plants to suit every Australian house
            </Text>
          </View>
          <View style={styles.blogAuthorDetail}>
            <Card.Title
              style={styles.cardAvatar}
              title="Jared Carlin"
              titleStyle={styles.cardAvatarTitle}
              subtitle="04.02.2021"
              subtitleStyle={styles.cardAvatarSubtitle}
              left={LeftContent}
            />
          </View>
          <View style={styles.blogContent}>
            <Text style={styles.blogContentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              lacinia condimentum leo, vitae fringilla lectus. Morbi quis massa
              a nulla convallis convallis. Integer ornare nibh ut tempor
              convallis. Vivamus sed condimentum urna. Ut egestas eget lorem eu
              suscipit. Aliquam erat volutpat. Maecenas cursus viverra egestas.
            </Text>
            <Text style={styles.blogContentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              lacinia condimentum leo, vitae fringilla lectus. Morbi quis massa
              a nulla convallis convallis. Integer ornare nibh ut tempor
              convallis. Vivamus sed condimentum urna. Ut egestas eget lorem eu
              suscipit. Aliquam erat volutpat. Maecenas cursus viverra egestas.
            </Text>
            <Text style={styles.blogContentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              lacinia condimentum leo, vitae fringilla lectus. Morbi quis massa
              a nulla convallis convallis. Integer ornare nibh ut tempor
              convallis. Vivamus sed condimentum urna. Ut egestas eget lorem eu
              suscipit. Aliquam erat volutpat. Maecenas cursus viverra egestas.
            </Text>
            <Text style={styles.blogContentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              lacinia condimentum leo, vitae fringilla lectus. Morbi quis massa
              a nulla convallis convallis. Integer ornare nibh ut tempor
              convallis. Vivamus sed condimentum urna. Ut egestas eget lorem eu
              suscipit. Aliquam erat volutpat. Maecenas cursus viverra egestas.
            </Text>
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
          <TouchableOpacity
            onPress={onBlogClick}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              top: 10,
              left: 20,
            }}>
            <Icon name="book-open" size={25} color={'#2DDA93'} />
            <Text
              style={{
                fontSize: FontSize.defaultTxtSize,
                marginTop: 3,
                textTransform: 'uppercase',
                color: '#2DDA93',
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

export default BlogDetail;
