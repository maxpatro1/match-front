import type { ImageSourcePropType } from 'react-native'
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native'

import Block from 'src/ui/block'
import Author from './author'

type ImageBlockProps = {
  source: ImageSourcePropType
}

const ImageBlock = (props: ImageBlockProps) => {
  const { source } = props

  const { width } = useWindowDimensions()

  return (
    <Block style={styles.container}>
      <Image
        source={source}
        style={[{ width: width - 32, height: (width * 3) / 2 }]}
      />
      <View style={styles.author}>
        <Author name="Pablo Escobar" />
      </View>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  author: {
    position: 'absolute',
    top: 0,
    right: 0
  }
})

export default ImageBlock
