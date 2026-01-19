/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen } from './src/screens/Onboarding/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AuthScreen } from './src/screens/Auth/Auth';

const AppContent = createNativeStackNavigator()

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
    <SafeAreaProvider >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer >
        <AppContent.Navigator
          screenOptions={{headerShown : false}}
        >
          <AppContent.Screen name='/onboarding' component={OnboardingScreen} />
          <AppContent.Screen name='/auth' component={AuthScreen} />
        </AppContent.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
