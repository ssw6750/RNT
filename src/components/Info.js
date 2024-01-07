import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Info = ({ route }) => {
  const receivedData = route.params?.data || {};
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      console.log('receivedData.ocid >>> ', receivedData.ocid)
      // Axios를 사용하여 서버에 POST 요청을 보내는 예제
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/maplestory/v1/character/basic`,
      {
        params: {
         ocid: receivedData.ocid,
         date: '2024-01-06' // 현재 날짜로 처리
        },
        headers: {
          ['x-nxopen-api-key']: process.env.EXPO_PUBLIC_API_KEY
        }
      },
      );
      console.log('response.data >>> ', response.data)
      // 성공적인 응답 처리
      setResponseData(response.data);
      navigation.navigate('Info', { data: response.data })
      console.log('response.data >>> ', response.data);
    } catch (error) {
      // 에러 처리
      console.error('Error making API request:', error);
    }
  };

  return (
    <View>
      <Text>Info Screen</Text>
      <Text>Received Data:</Text>
      <Text>{JSON.stringify(responseData)}</Text>
    </View>
  );
};

export default Info