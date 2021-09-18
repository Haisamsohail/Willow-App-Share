import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import Colors from '../theme/Colors';
import AppImages from '../theme/AppImages';
import Strings from '../theme/Strings';
import FontSize from '../theme/FontSize';
import FontWeight from '../theme/FontWeight';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageCropPicker from 'react-native-image-crop-picker';
import Svg, {Circle, Path} from 'react-native-svg';

export default class Dashboard extends Component {
  onProfileClick = () => {
    this.props.navigation.navigate('Profile');
  };
  onHomeClick = () => {
    this.props.navigation.navigate('Dashboard');
  };
  onBlogClick = () => {
    this.props.navigation.navigate('Blog');
  };
  onMyPlantClick = () => {
    this.props.navigation.navigate('MyPlants');
  };
  onConnectCamera = () => {
    this.props.navigation.navigate('ConnectPlant');
  };
  onPlantTypeClick = () => {
    this.props.navigation.navigate('PlantTypeSearch');
  };
  onPlantTypeDetail = () => {
    this.props.navigation.navigate('PlantDetailInner');
  };
  onPlantClick = () => {
    this.props.navigation.navigate('PlantOverview');
  };

  onCameraClick = () => {
    ImageCropPicker.openCamera({
      cropping: false,
    }).then(image => {
      console.log(image);

      var img = {sourceURL: image.path};
      this.state.multipleFile.push(img);

      this.setState({multipleFile: this.state.multipleFile});
    });
  };

  render() {
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

    const ScreenHeight = Dimensions.get('window').height;
    const ScreenWidth = Dimensions.get('window').width;

    const styles = StyleSheet.create({
      containerMain: {
        flex: 1,
        height: ScreenHeight,
        width: ScreenWidth,
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
        <ScrollView
          style={{
            height: '100%',
            width: ScreenWidth,
            backgroundColor: Colors.ColorPink,
          }}>
          <View>
            <View style={{backgroundColor: '#60C09B', height: 330}}>
              <View
                style={{
                  margin: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <View style={{marginTop: 20}}>
                  <TouchableOpacity
                    onPress={this.onProfileClick}
                    style={{height: 10, width: 10}}>
                    <Image
                      style={{
                        borderRadius: 40,
                        height: 50,
                        width: 50,
                        position: 'absolute',
                        right: 18,
                        top: 25,
                      }}
                      source={AppImages.HamzaImg}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{marginHorizontal: 5}}>
                  <Text
                    style={{
                      marginTop: 20,
                      color: Colors.BackGroundColorWhite,
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}>
                    {Strings.GdMrngTxt}
                  </Text>
                  <Text
                    style={{
                      color: Colors.BackGroundColorWhite,
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    {Strings.NameTxt}!
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: ScreenWidth - 150,
                  alignSelf: 'center',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 12,
                    color: Colors.BackGroundColorWhite,
                  }}>
                  {Strings.DashTxt}
                </Text>
              </View>

              <View
                style={{
                  margin: 20,
                  flexDirection: 'row',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: Colors.BackGroundColorWhite,
                  height: 100,
                  width: ScreenWidth - 50,
                  marginTop: 30,
                }}>
                <TouchableOpacity
                  onPress={this.onConnectCamera}
                  style={{
                    alignSelf: 'center',
                    backgroundColor: Colors.BackGroundColorWhite,
                    height: 60,
                    width: 150,
                    borderRightWidth: 1,
                    borderRightColor: '#89E9C3',
                  }}>
                  <View
                    style={{
                      marginRight: 25,
                    }}>
                    <Icon
                      name="camera"
                      size={20}
                      style={{alignSelf: 'center'}}
                      color="#2DDA93"
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 10,
                        color: '#3F4961',
                      }}>
                      {Strings.ScanTxt}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onPlantTypeClick}
                  style={{
                    alignSelf: 'center',
                    backgroundColor: Colors.BackGroundColorWhite,
                    height: 60,
                    width: 150,
                  }}>
                  <View
                    style={{
                      marginLeft: 25,
                    }}>
                    <Icon
                      name="pagelines"
                      size={20}
                      style={{alignSelf: 'center'}}
                      color="#2DDA93"
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 10,
                        color: '#3F4961',
                      }}>
                      {Strings.BrowseTxt}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height: 25}}></View>
            <View
              style={{
                elevation: 10,
                flexDirection: 'row',
                width: ScreenWidth - 50,
                position: 'absolute',
                bottom: 0,
                backgroundColor: Colors.BackGroundColorWhite,
                alignSelf: 'center',
                borderRadius: 25,
              }}>
              <TextInput
                placeholder={Strings.SearchPlantsTxt}
                style={{marginLeft: 20}}
              />
              <Icon
                name="search"
                size={20}
                style={{marginLeft: 'auto', right: 25, alignSelf: 'center'}}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: Colors.ColorPrimaryDark,
                }}>
                {Strings.PlantTxt}
              </Text>
              <TouchableOpacity onPress={this.onMyPlantClick}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    fontSize: 14,
                    marginTop: 5,
                  }}>
                  {Strings.ViewAllTxt}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{margin: 10, flexDirection: 'row'}}>
              <FlatList
                horizontal
                data={Data}
                renderItem={({item}) => (
                  <ScrollView style={{}} horizontal={true}>
                    <TouchableOpacity
                      onPress={this.onPlantClick}
                      style={{
                        elevation: 5,
                        margin: 10,
                        borderRadius: 5,
                        width: 300,
                        height: 150,
                        backgroundColor: Colors.BackGroundColorWhite,
                      }}>
                      <View style={{flexDirection: 'row'}}>
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
                            {item.text}
                          </Text>
                          <Image
                            style={{alignItems: 'center'}}
                            source={item.img2}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#B7B5B7',
                              right: 5,
                              //marginStart: -18,
                            }}>
                            {item.Desc}
                          </Text>
                        </View>
                        <Image
                          style={{
                            width: 130,
                            height: 150,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                          }}
                          source={item.img1}
                        />
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                )}
                keyExtractor={item => item.id}
              />
            </View>

            <View
              style={{
                margin: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: Colors.ColorPrimaryDark,
                }}>
                {Strings.PlantTypeTxt}
              </Text>
              <TouchableOpacity onPress={this.onPlantTypeClick}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    fontSize: 14,
                    marginTop: 5,
                  }}>
                  {Strings.ViewAllTxt}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{margin: 10, flexDirection: 'row', marginBottom: 50}}>
              <FlatList
                horizontal
                data={Data}
                renderItem={({item}) => (
                  <ScrollView style={{}} horizontal={true}>
                    <TouchableOpacity
                      onPress={this.onPlantTypeDetail}
                      style={{
                        elevation: 5,
                        margin: 10,
                        borderRadius: 5,
                        width: 130,
                        height: 150,
                        backgroundColor: Colors.BackGroundColorWhite,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        {/* <View
                          style={{
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 170,
                          }}>
                          <Text
                            style={{
                              marginRight: 20,
                              color: Colors.ColorPrimaryDark,
                              fontSize: FontSize.defaultTxtSize,
                            }}>
                            {item.text}
                          </Text>
                          <Image style={{marginRight: 20}} source={item.img2} />
                          <Text>{item.Desc}</Text>
                        </View> */}
                        <Image
                          style={{
                            width: 130,
                            height: 150,
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                          }}
                          source={item.img1}
                        />
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          <View style={{height: 50}}></View>
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
            onPress={this.onConnectCamera}
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
              onPress={this.onHomeClick}
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
              onPress={this.onMyPlantClick}
              style={{
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
                top: 10,
                right: 20,
                //marginRight: 100,
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
              onPress={this.onBlogClick}
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
              onPress={this.onProfileClick}
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
  }
}
