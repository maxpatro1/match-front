import { StyleSheet, Text, View } from 'react-native'

const ImageFeed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image feed screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 32
  }
})

export default ImageFeed
