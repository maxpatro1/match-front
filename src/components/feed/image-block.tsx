import { StyleSheet } from 'react-native'

import Block from 'src/ui/block'

const ImageBlock = () => {
  return <Block style={styles.container}></Block>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16
  }
})

export default ImageBlock
