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
};

type SignupPageNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpPage'>;

type Props = {
  navigation: SignupPageNavigationProp;
};

const MyPageEdit: React.FC<Props> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'ONE Mobile POP': require('../android/app/src/main/assets/fonts/ONE Mobile POP.ttf'),
  });

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onChangeName = (inputText: React.SetStateAction<string>) => {
    setName(inputText);
  };

  const onChangePassword = (inputText: React.SetStateAction<string>) => {
    setPassword(inputText);
  };

  const onChangePassword2 = (inputText: React.SetStateAction<string>) => {
    setPassword2(inputText);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.header}>
        <Image source={require('../assets/bear.jpg')} style={{width: 100,
        height: 100, borderRadius: "50%"}}>
        </Image>
        <Text style={styles.user}>USER</Text>
        <TouchableOpacity style={styles.font} onPress={() => navigation.navigate('ChatingPage')}>
          <FontAwesomeIcon icon={faAngleLeft} size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.allsignup}>
        <TextInput
          onChangeText={onChangeName}
          value={name}
          placeholder="이름 변경"
          placeholderTextColor="#999"
          style={styles.name}
        />
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="비밀번호 변경"
          placeholderTextColor="#999"
          secureTextEntry={true}
          style={styles.password}
        />
        <TextInput
          onChangeText={onChangePassword2}
          value={password2}
          placeholder="비밀번호 확인"
          placeholderTextColor="#999"
          secureTextEntry={true}
          style={styles.password2}
        />
      </View>
      <View style={styles.loginbuttons}>
        <TouchableOpacity style={styles.check}>
          <Text style={styles.checktext}>확인</Text>
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
  signup: {
    width: 300,
    height: 70,
    borderWidth: 2,
    borderColor: '#F97F25',
    backgroundColor: '#F97F25',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
  },
  loginbuttons: {
    marginTop: 80,
    alignItems: 'center',
  },
  signuptext: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'ONE Mobile POP',
  },
  name: {
    width: 300,
    fontSize: 18,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    color: '#000',
    marginBottom: 10,
    paddingBottom: 10,
    fontFamily: 'ONE Mobile POP',
  },
  password: {
    width: 300,
    fontSize: 18,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
    fontFamily: 'ONE Mobile POP',
  },
  password2: {
    width: 300,
    fontSize: 18,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    fontFamily: 'ONE Mobile POP',
    marginBottom: 10,
    paddingBottom: 10,
  },
  phonenumber: {
    width: 300,
    fontSize: 18,
    borderBottomColor: '#878787',
    fontFamily: 'ONE Mobile POP',
    borderBottomWidth: 1,
    paddingBottom: 10,
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
  user: {
    fontSize: 18,
    fontFamily: 'ONE Mobile POP',
    color: '#000',
    top: 50
  },
  checktext: {
    color: '#F97F25',
    fontSize: 20,
    fontFamily: 'ONE Mobile POP',
  },
  check: {
    top: 50,
    width: 300,
    height: 70,
    borderWidth: 2,
    borderColor: '#F97F25',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  roundimg: {

  },
});

export default MyPageEdit;
