import { View, Text, TouchableOpacity } from 'react-native';

const Info = ({ route }) => {
  const receivedData = route.params?.data || {};

  return (
    <View>
      <Text>Info Screen</Text>
      <Text>Received Data:</Text>
      <Text>{JSON.stringify(receivedData)}</Text>
    </View>
  );
};

export default Info