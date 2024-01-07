import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Main = ({ navigation }) => {
  const [inputText, setInputText] = useState('');
  // const [responseData, setResponseData] = useState(null);

  const handleButtonPress = async () => {
    console.log('character_name!!! >>> ', inputText)
    try {
      // Axios를 사용하여 서버에 POST 요청을 보내는 예제
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/maplestory/v1/id`,
      {
        params: {
         character_name: inputText,
        },
        headers: {
          ['x-nxopen-api-key']: process.env.EXPO_PUBLIC_API_KEY
        }
      },
      );

      // 성공적인 응답 처리
      // setResponseData(response.data);
      navigation.navigate('Info', { data: response.data })
      console.log('response.data >>> ', response.data);
    } catch (error) {
      // 에러 처리
      console.error('Error making API request:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.textContainer}>
        <Text style={styles.text}>TEXT</Text>
      </View> */}
      <TextInput
        style={styles.input}
        placeholder="전적 검색"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 20, // Text 컴포넌트의 아래쪽에 마진을 줍니다.
  },
  text: {
    fontFamily: "Pretendard-Light",
    color: "black",
    fontSize: 32
  },
  button: {
    marginTop: 20,
    backgroundColor: '#222222',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'rgb(245, 233, 219)',
    fontSize: 16,
    fontFamily: "Pretendard-Light",
  }
});

export default Main;