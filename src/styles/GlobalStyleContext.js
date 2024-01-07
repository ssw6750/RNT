import { createContext, useContext,useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';

const GlobalStyleContext = createContext();

export const useGlobalStyles = () => {
  return useContext(GlobalStyleContext);
};

export const GlobalStyleProvider = ({ children }) => {
  const globalStyles = StyleSheet.create({
    // 다른 스타일들...
    text: {
      fontSize: 16,
      fontFamily: 'Pretendard-Light',
      // 다른 폰트 관련 스타일 속성 추가
    },
    headerStyle: {
    },
    headerTitleStyle : {
      fontSize: 16,
      fontFamily: 'Pretendard-Light',
    }
  });

  const [fontsLoaded] = useFonts({
        // Pretendard: require("./assets/fonts/PretendardVariable.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.otf"),
    "Pretendard-Black": require("../../assets/fonts/Pretendard-Black.otf"),
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.otf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.otf"),
    "Pretendard-Thin": require("../../assets/fonts/Pretendard-Thin.otf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.otf"),
    "Pretendard-SemiBold": require("../../assets/fonts/Pretendard-SemiBold.otf"),
    'Pretendard-Regular': require('../../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Medium': require('../../assets/fonts/Pretendard-Medium.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalStyleContext.Provider value={globalStyles}>
      {children}
    </GlobalStyleContext.Provider>
  );
};