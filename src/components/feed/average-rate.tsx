import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

type AverageRateProps = {
  rate: number
}

const AverageRate = (props: AverageRateProps) => {
  const { rate } = props

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <AntDesign name="star" size={24} color="black" />
      </View>
      <Text>{rate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 4
  }
})

export default AverageRate
