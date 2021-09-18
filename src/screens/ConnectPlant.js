import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    TouchableHighlight ,
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
import Svg, { Circle, Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-elements/dist/helpers';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Avatar, Button, Card, Title } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const ConnectPlant = ({ navigation }) => {

    const LeftContent = props => (
        <Avatar.Image size={28} source={require('../assets/HamzaImg.png')} />
    );

    const onProfileClick = () => {
        navigation.navigate('Profile');
    };
    const onBackClick = () => {
        navigation.navigate('Dashboard');
    };
    const onBlogClick = () => {
        navigation.navigate('Blog');
    };
    const onConnectClick = () => {
        navigation.navigate('ConnectPlant');
    };
    const onBlogDetailClick = () => {
        navigation.navigate('BlogDetail');
    };
    const onMyPlantClick = () => {
        navigation.navigate('MyPlants');
    };
    const onPlantTypeSearch = () => {
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

            var img = { sourceURL: image.path };
            this.state.multipleFile.push(img);

            this.setState({ multipleFile: this.state.multipleFile });
        });
    };

    return (
        <View style={styles.containerMain}>
            <ScrollView style={styles.scrollSet}>
                <View>
                    {/* Header Start */}
                    <View style={styles.header}>
                        {/* Header Icons */}
                        <View style={styles.headerIcon}>
                            <TouchableOpacity onPress={onBackClick}>
                                <Icon name="chevron-left" size={24} color="#555255" />
                            </TouchableOpacity>
                        </View>
                        {/* Header Title */}
                        <View style={styles.headerTitle}>
                            <Text style={styles.titleText}>Connect Plant</Text>
                        </View>
                    </View>
                    {/* Header End */}
                </View>
                {/* Content Start */}
                <View style={styles.connectContainer}>
                    <TouchableOpacity onPress={onCameraClick}>
                        <View style={styles.cameraCard}>
                            <Icon name="envira" size={28} color="#34DB97" />
                            <Text style={styles.cardText}>Take a photo or select from Gallery</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPlantTypeSearch}>
                        <View style={styles.cameraCard}>
                            <Icon name="envira" size={28} color="#34DB97" />
                            <Text style={styles.cardText}>Search through list</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Content End */}
                <View style={{ height: 60 }}></View>
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
                        style={{ elevation: 10, shadowColor: 'grey' }}>
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
                    style={{ position: 'absolute', left: '47%', top: -5 }}>
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
                            right: 20
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
                            left: 20
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
                            backgroundColor={'#A4A2A'}
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
        height: hp('12%'),
        width: wp('100%'),
        backgroundColor: 'transparent',
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
        color: '#555255',
        fontSize: 32,
        textTransform: 'capitalize',
    },
    connectContainer: {
        flex: 1,
        marginStart: 20,
        marginEnd: 20
    },
    cameraCard: {
        marginTop: 40,
        backgroundColor: '#fff',
        height: hp('20%'),
        //elevation: 5,
        borderRadius: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },cardText:{
        marginTop: 10,
        fontSize: 14,
        color: '#7B787B'

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

export default ConnectPlant;
