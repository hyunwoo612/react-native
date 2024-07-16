import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
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

const Signuppage: React.FC<Props> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'ONE Mobile POP': require('../android/app/src/main/assets/fonts/ONE Mobile POP.ttf'),
  });

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [msg, setMsg] = useState('');

  const onChangeName = (inputText: React.SetStateAction<string>) => {
    setName(inputText);
  };

  const onChangeId = (inputText: string) => {
    const filteredText = inputText.replace(/[^a-zA-Z0-9]/g, '');
    setId(filteredText);
  };

  const onChangePassword = (inputText: React.SetStateAction<string>) => {
    setPassword(inputText);
  };

  const onChangePassword2 = (inputText: React.SetStateAction<string>) => {
    setPassword2(inputText);
  };

  const onChangePhonenumber = (inputText: string) => {
    const numericText = inputText.replace(/[^0-9]/g, '');
    setPhonenumber(numericText);
  };

  const handlesignup = async () => {
    try {
      const response = await fetch('https://port-0-flask-ly7hfh5b552425a2.sel5.cloudtype.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, password, password2, name, phonenumber})
      });
  
      // 응답을 JSON으로 파싱
      const result = await response.json();
  
      if (response.ok) {
        console.log(result);
        navigation.navigate('MainPage')
        setMsg(result.message || 'signup in successfully!');
      } else {
        setMsg(result.message || '');
      }
    } catch (error) {
      console.log('서버 오류:', id, password);
      console.error('로그인 요청 실패:', error);
      setMsg('서버 오류');
    }
  };

  useEffect(() => {
    if (phonenumber.length === 11) {
      setPhonenumber(phonenumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [phonenumber]);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.all}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity style={styles.font} onPress={() => navigation.navigate('MainPage')}>
              <FontAwesomeIcon icon={faAngleLeft} size={40} />
            </TouchableOpacity>
            <Text style={styles.headertext}>회원가입</Text>
          </View>
          <View style={styles.allsignup}>
            <TextInput 
              onChangeText={onChangeName}
              value={name}
              placeholder="이름"
              placeholderTextColor="#999"
              style={styles.name}
              keyboardType="default"
            />
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
              onChangeText={onChangePhonenumber}
              value={phonenumber}
              placeholder="전화번호"  
              placeholderTextColor="#999"
              style={styles.phonenumber}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.loginbuttons}>
            <TouchableOpacity style={styles.signup} onPress={handlesignup}>
              <Text style={styles.signuptext}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

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
    top: 50,
  },
  loginbuttons: {
    marginTop: 30,
    alignItems: 'center',
  },
  signuptext: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'ONE Mobile POP',
  },
  name:{
    width: 300,
    fontSize: 18,
    borderBottomColor: '#878787',
    borderBottomWidth: 1,
    color: '#000',
    marginBottom: 10,
    paddingBottom: 10,
    fontFamily: 'ONE Mobile POP',
  },
  id: {
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
    marginTop: 60,
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
});

export default Signuppage;
