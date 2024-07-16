import React, { useState } from "react";
import { StyleSheet, View, Alert, TouchableOpacity, SafeAreaView, Text, TextInput } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faPlus, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

type RootStackParamList = {
  MainPage: undefined;
  SignUpPage: undefined;
  ChatingPage: undefined;
  OptionPage: undefined;
  MyPageEdit: undefined;
};

type ChatingPageNavigationProp = StackNavigationProp<RootStackParamList, 'ChatingPage'>;

type Props = {
  navigation: ChatingPageNavigationProp;
};

const ChatingPage: React.FC<Props> = ({ navigation }) => {

  const [inputMessage, setInputMessage] = useState("");

  const handleButtonClick = () => {
    console.log(inputMessage);
  };

  const handleTextInput = (text: string) => {
    setInputMessage(text);
    console.log(text);
  };

  const [fontsLoaded] = useFonts({
    'ONE Mobile POP': require('../android/app/src/main/assets/fonts/ONE Mobile POP.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.user}>USER</Text>
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('MyPageEdit')}>
            <FontAwesomeIcon icon={faBars} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}></View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.plusButton} onPress={() => Alert.alert('')}>
            <FontAwesomeIcon icon={faPlus} size={40} />
          </TouchableOpacity>
          <TextInput
            placeholder="메세지를 입력하세요."
            placeholderTextColor="#000"
            onChangeText={handleTextInput}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.sendchat} onPress={handleButtonClick}>
            {(inputMessage.length === 1 ? <FontAwesomeIcon icon={faCircleArrowUp} size={30} style={{ color: 'black' }}/> : <FontAwesomeIcon icon={faCircleArrowUp} size={30} style={{ color: 'gray' }}/> )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  footer: {
    backgroundColor: '#EBEBEB',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top: 30,
    padding: 10,
  },
  menuButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  user: {
    fontSize: 18,
    fontFamily: 'ONE Mobile POP',
    color: '#000',
  },
  plusButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    flex: 1,
  },
  sendchat: {
    right: 50,
  }
});

export default ChatingPage;
