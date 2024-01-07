import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

const HomeScreen = () => { 
	return ( 
    	<View style={styles.homeScreen}> 
        	<Text>HomeScreen</Text> 
        </View> 
    ) 
} 
// 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다. 
const Stack = createStackNavigator(); 

const Navigation = () => { 
	return ( 
    	//네비게이션의 트리를 관리해주는 컴포넌트 
        <NavigationContainer> 
        	{/* 네비게이션 기본틀의 스택을 생성 */} 
            <Stack.Navigator> 
            	{/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
                <Stack.Screen name="Home" component={HomeScreen}/> 
            </Stack.Navigator> 
        </NavigationContainer> 
    ) 
} 

const styles = StyleSheet.create({ 
	homeScreen: { 
    	flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    } 
}) 
export default Navigation;