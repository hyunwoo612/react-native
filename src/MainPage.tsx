import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, TextInput, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import BouncyCheckbox from "react-native-bouncy-checkbox";

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

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const onChangeId = (inputText: string) => {
    const filteredText = inputText.replace(/[^a-zA-Z0-9]/g, '');
    setId(filteredText);
  }

  const onChangePassword = (inputText: string) => {
    setPassword(inputText);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleLogin = async () => {
    try {
      const response = await fetch('https://port-0-flask-ly7hfh5b552425a2.sel5.cloudtype.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, password })
      });

      // 응답을 JSON으로 파싱
      const result = await response.json();
  
      if (response.ok) {
        console.log('로그인 성공:', id, password);
        console.log(result);
        navigation.navigate('ChatingPage')
        setMsg(result.message || 'Logged in successfully!');
      } else {
        console.log('로그인 실패:', id, password);
        setMsg(result.message || '이메일 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.log('서버 오류:', id, password);
      console.error('로그인 요청 실패:', error);
      setMsg('서버 오류');
    }
  };

  return (
    <SafeAreaView style={styles.all}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
          <View style={styles.logo}>
            <Image source={require('../assets/Logo.png')} style={styles.mainimg}></Image>
          </View>
          <View>
          <BouncyCheckbox
            style={styles.checkbox}
            size={20}
            fillColor="orange"
            text="로그인 유지하기"
            textStyle={{ fontFamily: "ONE Mobile POP" }}
          />
        </View>
          <View style={styles.inputs}>
            <View style={styles.id}>
              <Image source={require('../assets/id.png')} style={styles.idimg}></Image>
              <TextInput
                onChangeText={onChangeId}
                value={id}
                placeholder="아이디"
                placeholderTextColor="#999"
                style={styles.idinput}
                keyboardType="default"
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
          <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('SignUpPage')}>
              <Text style={styles.signuptext}>회원가입</Text>
            </TouchableOpacity>
          <View style={styles.loginbuttons}>
            <TouchableOpacity style={styles.login} onPress={handleLogin}>
              <Text style={styles.logintext}>로그인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    margin: 10,
    right:-35,
    top: 215,
    width: 150,
  },
  all: {
    backgroundColor: '#fff',
  },
  logo: {
    alignItems: 'center',
    marginTop: 60,
  },
  mainimg: {
    width: 200,
    height: 200,
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
    width: 100,
    height: 50,
  },
  loginbuttons: {
    marginTop: 100,
    alignItems: 'center',
  },
  inputs: {
    marginTop: 50,
    alignItems: 'center',
    rowGap: 35
  },
  logintext: {
    color: '#F97F25',
    fontSize: 20,
    fontFamily: 'ONE Mobile POP',
  },
  signuptext: {
    color: '#F97F25',
    fontSize: 15,
    fontFamily: 'ONE Mobile POP',
    left: 290,
    top: 10,
  },
  id: {
    marginBottom: 30,
    width: 300,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  password: {
    width: 300,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10    
  },
  idinput: {
    marginLeft: 10,
    width: 300,
    fontSize: 18,
    fontFamily: 'ONE Mobile POP',
  },
  passwordinput: {
    marginLeft: 10,
    width: 300,
    fontSize: 18,
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
  },
  loginkeep: {
    color: "#F97F25",
    fontFamily: 'ONE Mobile POP',
  }
});

export default MainPage;
