import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const Collection = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Collection</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32
  }
})

export default Collection
