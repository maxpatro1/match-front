import type { ImageSourcePropType } from 'react-native'
import { Image, StyleSheet, useWindowDimensions } from 'react-native'

import Block from 'src/ui/block'

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
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
})

export default ImageBlock
