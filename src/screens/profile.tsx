import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32
  }
})

export default Profile
