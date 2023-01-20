import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ImageFeed from './screens/image-feed'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageFeed />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#fff'
  }
})

export default registerRootComponent(App)
