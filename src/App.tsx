import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStack } from './navigators/RootStack/RootStack'

type AppStackParamList = {
  RootStack: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RootStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RootStack" component={RootStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
