import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

import AverageRate from './average-rate'
import Rate from './rate'

const InfoBlock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Кремниевая долина</Text>
        <AverageRate rate={4.6} />
      </View>
      <View style={styles.body}>
        <View style={styles.icon}>
          <AntDesign name="enviromento" size={24} color="black" />
        </View>
        <Text>367 Addison Ave, Palo Alto.</Text>
      </View>
      <Rate onRate={() => null} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  header: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20
  },
  body: {
    marginBottom: 16,
    flexDirection: 'row'
  },
  icon: {
    marginRight: 4
  }
})

export default InfoBlock
