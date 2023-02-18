import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

const rates = [1, 2, 3, 4, 5]

type RateProps = {
  onRate: () => void
}

const Rate = (props: RateProps) => {
  const { onRate } = props

  const [selectedRate, setSelectedRate] = useState(0)

  const handleRate = (rate: number) => {
    setSelectedRate(rate)
    onRate()
  }

  return (
    <View style={styles.container}>
      {rates.map((rate) => (
        <TouchableWithoutFeedback key={rate} onPress={() => handleRate(rate)}>
          <AntDesign
            name={selectedRate >= rate ? 'star' : 'staro'}
            size={32}
            color="yellow"
          />
        </TouchableWithoutFeedback>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Rate
