import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity, SafeAreaView, TextInput, Image } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

type RootStackParamList = {
  MainPage: undefined;
  SignUpPage: undefined;
  ChatingPage: undefined;
  MyPageEdit: undefined;
};

type UserPageNavigationProp = StackNavigationProp<RootStackParamList, 'User'>;

type Props = {
  navigation: UserPageNavigationProp;
};

const ScheduleEmpty: React.FC<Props> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'ONE Mobile POP': require('../android/app/src/main/assets/fonts/ONE Mobile POP.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.font} onPress={() => navigation.navigate('ChatingPage')}>
          <FontAwesomeIcon icon={faAngleLeft} size={40} />
        </TouchableOpacity>
      </View>
    <Text style={styles.text}>비어 있습니다.</Text>
      <View style={styles.makebutton}>
        <TouchableOpacity style={styles.make}>
            <Text style={styles.maketext}>시간표 만들기</Text>  
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  all: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    width: 350,
  },
  makebutton: {
    marginTop: 100,
    alignItems: 'center',
  },
  maketext: {
    color: '#F97F25',
    fontSize: 20,
    fontFamily: 'ONE Mobile POP',
  },
  make: {
    width: 300,
    height: 70,
    borderWidth: 2,
    borderColor: '#F97F25',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  signuptext: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'ONE Mobile POP',
  },
  allsignup: {
    marginTop: 120,
    alignItems: 'center',
    rowGap: 40,
  },
  headertext: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'ONE Mobile POP',
  },
  font: {
    position: 'absolute',
    top: -2,
    right: 315,
  },
  text: {
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 10,
    color: '#878787',
  },
});

export default ScheduleEmpty;
