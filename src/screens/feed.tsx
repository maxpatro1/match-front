import { StyleSheet, View } from 'react-native'

import Header from 'src/components/feed/header'
import ImageBlock from 'src/components/feed/image-block'
import InfoBlock from 'src/components/feed/info-block'

const Feed = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ImageBlock />
      <InfoBlock />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})

export default Feed
