import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../screen/HomeScreen/HomeScreen'
import { DetailScreen } from '../../screen/DetailScreen/DetailScreen'
import { MainNavigationProps, RootStackParamList } from './type'
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const useMainNavigator = () => useNavigation<MainNavigationProps>()

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}
