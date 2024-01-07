import { View, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { GlobalStyleProvider, useGlobalStyles } from './src/styles/GlobalStyleContext';
import Main from './src/components/Main';
import Info from './src/components/Info';

// 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다. 
const Stack = createStackNavigator(); 

const App = () => { 
	return ( 
    <GlobalStyleProvider>
        <Navigator/>
    </GlobalStyleProvider>
    ) 
} 
 
export default App;

const Navigator = () => { 
    const styles = useGlobalStyles();

	return ( 
    	<NavigationContainer> 
        	{/* 네비게이션 기본틀의 스택을 생성 */} 
            <Stack.Navigator
                screenOptions={{
                    headerStyle: styles?.headerStyle,
                    headerTitleStyle: styles?.headerTitleStyle,
                }}
            > 
            	{/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
                {/* <Stack.Screen name="Home" component={HomeScreen}/>  */}
                <Stack.Screen name="Main" component={Main}/>
                <Stack.Screen name="Info" component={Info} />
            </Stack.Navigator> 
        </NavigationContainer>  
    ) 
} 



const HomeScreen = () => { 
    const styles = useGlobalStyles();

	return ( 
    	<View style={styles.container}> 
        	<Text style={styles.text}>HomeScreen</Text> 
        </View> 
    ) 
} 

// const LoadingComponent = () => { 
// 	return ( 
//     	<View> 
//         	<Text>LoadingComponent</Text> 
//         </View> 
//     ) 
// } 