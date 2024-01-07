import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ style, children }) => {

  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    // 다른 기본 텍스트 스타일 속성을 추가할 수 있습니다.
  },
});

export default CustomText;