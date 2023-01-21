import type { ViewProps } from 'react-native'
import { Platform, StyleSheet, View } from 'react-native'

const Block = (props: ViewProps) => {
  const { style, children, ...otherProps } = props

  return (
    <View style={[styles.container, styles.boxShadow, style]} {...otherProps}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'white'
  },
  boxShadow:
    Platform.OS === 'ios'
      ? {
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          shadowColor: '#000000'
        }
      : {
          elevation: 4,
          shadowColor: '#000000'
        }
})

export default Block
