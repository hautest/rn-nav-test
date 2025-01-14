import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useMainNavigator } from '../../navigators/RootStack/RootStack'

export function HomeScreen() {
  const navigation = useMainNavigator()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Detail')}>
        <Text>Go to Detail</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
