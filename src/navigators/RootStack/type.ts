import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Detail: undefined
}

export type MainNavigationProps = NativeStackNavigationProp<RootStackParamList>
