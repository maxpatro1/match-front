import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

type ScreenProps = {
  children: ReactNode
}

const Screen = (props: ScreenProps) => {
  const { children } = props

  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})

export default Screen
