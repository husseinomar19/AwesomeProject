import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, SafeAreaView ,Button ,} from 'react-native';
import Home from './src/compnenten/Home';
import Ard from './src/compnenten/Ard';
import Bekijken from './src/compnenten/Bekijken';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Ard" component={Ard} />
          <Stack.Screen name="Bekijken" component={Bekijken} />
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 13,
  },
  test:{
    backgroundColor: '#000',
    width:100,
  },
});
