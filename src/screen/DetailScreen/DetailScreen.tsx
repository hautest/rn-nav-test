import { StyleSheet, Text, View } from 'react-native'

export function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>detail</Text>
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
