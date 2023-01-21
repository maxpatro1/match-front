import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

type AuthorProps = {
  name: string
}

const Author = (props: AuthorProps) => {
  const { name } = props

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.icon}>
        <AntDesign name="user" size={24} color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  text: {
    fontSize: 16,
    color: 'white'
  },
  icon: {
    marginLeft: 8
  }
})

export default Author
