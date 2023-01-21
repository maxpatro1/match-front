import type { ViewProps } from 'react-native'
import { StyleSheet, View } from 'react-native'

const Screen = (props: ViewProps) => {
  const { style, children, ...otherProps } = props

  return (
    <View style={[styles.container, style]} {...otherProps}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})

export default Screen
