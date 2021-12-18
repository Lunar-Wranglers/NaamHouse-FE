import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import { Icon } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 	
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0C0B37'
          },
		      headerTintColor: '#fff'
          }}
	      initialRouteName="Home">
        <Stack.Screen name="the" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
