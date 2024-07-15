import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


type RootStackParamList = {
  MainPage: undefined;
  SignUpPage: undefined;
};

type SignupPageNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpPage'>;

type Props = {
  navigation: SignupPageNavigationProp;
};

const Signuppage: React.FC<Props> = ( { navigation } ) => {

  const [fontsLoaded] = useFonts({
    'ONE Mobile POP': require('../android/app/src/main/assets/fonts/ONE Mobile POP.ttf'),
  });

  const [id, setid] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  const [phonenumber, setphonenumber] = useState('');

  const onChangeId = (inputText: React.SetStateAction<string>) => {
    setid(inputText);
  }

  const onChangePassword = (inputText: React.SetStateAction<string>) => {
    setpassword(inputText);
  }

  const onChangePassword2 = (inputText: React.SetStateAction<string>) => {
    setpassword2(inputText);
  }

  const onChangephonenumber = (inputInt: React.SetStateAction<string>) => {
    setphonenumber(inputInt);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

   return(
    <SafeAreaView style={styles.all}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.font} onPress={() => navigation.navigate('MainPage')}>
          <FontAwesomeIcon icon={faAngleLeft} size={25} />
        </TouchableOpacity>
        <Text style={styles.headertext}>회원가입</Text>
      </View>
      <View style={styles.allsignup}>
        <TextInput 
          onChangeText={onChangeId}
          value={id}
          placeholder="아이디"
          placeholderTextColor="#999"
          style={styles.id}
        />
        <TextInput
          onChangeText={onChangePassword}
          value={password}
          placeholder="비밀번호"
          placeholderTextColor="#999" 
          secureTextEntry={true}
          style={styles.password}
        />
        <TextInput
          onChangeText={onChangePassword2}
          value={password2}
          placeholder="비밀번호 재확인"
          placeholderTextColor="#999" 
          secureTextEntry={true}
          style={styles.password2}
        />
        <TextInput
          onChangeText={onChangephonenumber}
          value={phonenumber}
          placeholder="전화번호"
          placeholderTextColor="#999" 
          style={styles.phonenumber}
        />
      </View>
      <View style={styles.loginbuttons}>
          <TouchableOpacity style={styles.signup} onPress={() => Alert.alert("회원가입되었습니다.")}><Text style={styles.signuptext}>회원가입</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  all: {
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
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
  id: {
    width: 300,
    fontSize: 15,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    color: '#000',
    marginBottom: 10,
    fontFamily: 'ONE Mobile POP',
  },
  password: {
    width: 300,
    fontSize: 15,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    marginBottom: 10,
    fontFamily: 'ONE Mobile POP',
  },
  password2: {
    width: 300,
    fontSize: 15,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    fontFamily: 'ONE Mobile POP',
    marginBottom: 10,
  },
  phonenumber: {
    width: 300,
    fontSize: 15,
    borderBottomColor: '#878787',
    fontFamily: 'ONE Mobile POP',
    borderBottomWidth: 1,
  },
  allsignup: {
    marginTop: 120,
    alignItems: 'center',
    rowGap: 20,
  },
  headertext: {
    fontSize: 25,
    color: '#000',
    fontFamily: 'ONE Mobile POP',
  },
  font: {
    position: 'absolute',
    top: 0.5,
    right: 325,
  }
})

export default Signuppage