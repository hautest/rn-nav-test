import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../screen/HomeScreen/HomeScreen'
import { DetailScreen } from '../../screen/DetailScreen/DetailScreen'
import { RootStackParamList } from './type'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}
