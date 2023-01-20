import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import ImageFeed from './screens/image-feed.screen'

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default registerRootComponent(App)
