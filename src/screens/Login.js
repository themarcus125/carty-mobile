import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/LoginBackground.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={{ ...styles.snsButton, ...styles.facebookButton }}>
            <Image
              source={require('../assets/img/facebookLogo4x.png')}
              resizeMode="contain"
              style={styles.snsLogo}
            />
            <Text style={{ ...styles.snsText, ...styles.whiteText }}>Continue with Facebook</Text>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity style={{ ...styles.snsButton, ...styles.googleButton }}>
            <Image
              source={require('../assets/img/googleLogo4x.png')}
              resizeMode="contain"
              style={styles.snsLogo}
            />
            <Text style={{ ...styles.snsText, ...styles.darkText }}>Continue with Google</Text>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity style={{ ...styles.snsButton, ...styles.appleButton }}>
            <Image
              source={require('../assets/img/appleLogo4x.png')}
              resizeMode="contain"
              style={styles.snsLogo}
            />
            <Text style={{ ...styles.snsText, ...styles.whiteText }}>Continue with Apple</Text>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity
            style={{ ...styles.snsButton, ...styles.center }}
            onPress={() => navigation.navigate('Home'
            )}>
            <Text style={{ ...styles.whiteText, ...styles.centerText }}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 24,
  },
  snsButton: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  snsLogo: {
    width: 32,
    height: 32,
  },
  snsText: {
    paddingLeft: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  facebookButton: {
    backgroundColor: '#1877f2',
  },
  googleButton: {
    backgroundColor: '#ffffff',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#333333',
  },
  seperator: {
    height: 14,
  },
  center: {
    justifyContent: 'center',
  },
});

export default LoginScreen;
