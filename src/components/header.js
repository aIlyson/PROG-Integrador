import React from 'react';
import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const StatusBarHeight = StatusBar.currentHeight;

export default function Header() {
    const navigation = useNavigation();

    const handleReturnHome = () => {
        navigation.navigate('Home');
    };

    const handleSettingsPress = () => {
        navigation.navigate('Config');
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/resources/header_des.jpg')}
                style={styles.backgroundImage}
            >
                <TouchableOpacity onPress={handleReturnHome} style={styles.homeButton}>
                    <Icon name="home" size={22} color="#FFF" />
                </TouchableOpacity>
                {/* --Logo-- */}
                <View style={styles.titleContainer}>
                    <Image source={require('../assets/resources/logo.jpg')} style={styles.logoImage} />
                </View>
                <TouchableOpacity onPress={handleSettingsPress} style={styles.settingsButton}>
                    <Icon name="stream" size={22} color="#FFF" />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        overflow: 'hidden',
        borderBottomLeftRadius: 25,
        borderBottomEndRadius: 25,
        elevation: 25,
        zIndex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        paddingTop: StatusBarHeight + 17,
        paddingBottom: 22,
        alignItems: 'center',
        flexDirection: 'row',
    },
    homeButton: {
        backgroundColor: 'transparent',
        padding: 8,
        marginLeft: 12,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFF',
    },
    settingsButton: {
        padding: 10,
        marginRight: 15,
    },
    logoImage: {
        width: 180, 
        height: 55, 
    },
});
