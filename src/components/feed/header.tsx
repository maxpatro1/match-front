import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <AntDesign name="staro" size={32} color="black" />
      </View>
      <Text style={styles.text}>Pointer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 8
  },
  text: {
    fontSize: 24
  }
})

export default Header
