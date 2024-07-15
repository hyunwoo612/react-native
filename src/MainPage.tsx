import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity, SafeAreaView, TextInput, Image } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// Stack Navigator의 Param List 정의
type RootStackParamList = {
  MainPage: undefined;
  SignUpPage: undefined;
};

// MainPage의 navigation prop 타입 정의
type MainPageNavigationProp = StackNavigationProp<RootStackParamList, 'MainPage'>;

type Props = {
  navigation: MainPageNavigationProp;
};

const MainPage: React.FC<Props> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'ONE Mobile POP': require('../android/app/src/main/assets/fonts/ONE Mobile POP.ttf'),
  });

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = (inputText: string) => {
    setId(inputText);
  }

  const onChangePassword = (inputText: string) => {
    setPassword(inputText);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.inputs}>
        <View style={styles.id}>
          <Image source={require('../assets/id.png')} style={styles.idimg}></Image>
          <TextInput
            onChangeText={onChangeId}
            value={id}
            placeholder="아이디"
            placeholderTextColor="#999"
            style={styles.idinput}
          />
        </View>
        <View style={styles.password}>
          <Image source={require('../assets/password.png')} style={styles.passwordimg}></Image>
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholderTextColor="#999"
            placeholder="비밀번호"
            secureTextEntry={true}
            style={styles.passwordinput}
          />
        </View>
      </View>
      <View style={styles.loginbuttons}>
        <TouchableOpacity style={styles.login} onPress={() => Alert.alert("로그인 버튼 입니다.")}>
          <Text style={styles.logintext}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('SignUpPage')}>
          <Text style={styles.signuptext}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  all: {
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff'
  },
  login: {
    width: 300,
    height: 70,
    borderWidth: 2,
    borderColor: '#F97F25',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
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
    marginTop: 100,
    alignItems: 'center',
  },
  inputs: {
    marginTop: 300,
    alignItems: 'center',
  },
  logintext: {
    color: '#F97F25',
    fontSize: 20,
    fontFamily: 'ONE Mobile POP',
  },
  signuptext: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'ONE Mobile POP',
  },
  id: {
    marginBottom: 30,
    width: 300,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  password: {
    width: 300,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  idinput: {
    marginLeft: 10,
    width: 300,
    fontSize: 15,
    fontFamily: 'ONE Mobile POP',
  },
  passwordinput: {
    marginLeft: 10,
    width: 300,
    fontSize: 15,
    fontFamily: 'ONE Mobile POP',
  },
  idimg: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },
  passwordimg: {
    marginLeft: 5,
    width: 20,
    height: 20,
  }
});

export default MainPage;
