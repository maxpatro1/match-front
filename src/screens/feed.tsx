import { AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const rates = [1, 2, 3, 4, 5]

const Feed = () => {
  const [selectedRate, setSelectedRate] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.icon}>
          <AntDesign name="staro" size={32} color="black" />
        </View>
        <Text style={styles.appTitle}>Pointer</Text>
      </View>

      <View style={styles.image}>
        <Text>Image</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoHeader}>
          <Text style={styles.imageTitle}>Кремниевая долина</Text>
          <View style={styles.averageRate}>
            <View style={styles.averageRateIcon}>
              <AntDesign name="star" size={24} color="black" />
            </View>
            <Text style={styles.imageTitle}>4.6</Text>
          </View>
        </View>
        <View style={styles.address}>
          <Text>367 Addison Ave, Palo Alto.</Text>
        </View>
        <View style={styles.rate}>
          {rates.map((rate) => (
            <TouchableWithoutFeedback
              key={rate}
              onPress={() => setSelectedRate(rate)}
            >
              {selectedRate >= rate ? (
                <AntDesign name="star" size={32} color="black" />
              ) : (
                <AntDesign name="staro" size={32} color="black" />
              )}
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  icon: {
    marginRight: 8
  },
  header: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 24
  },
  image: {
    flex: 1,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'black'
  },
  info: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'black'
  },
  infoHeader: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageTitle: {
    fontSize: 20
  },
  averageRate: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  averageRateIcon: {
    marginRight: 4
  },
  address: {
    marginBottom: 16,
    flexDirection: 'row'
  },
  rate: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Feed
