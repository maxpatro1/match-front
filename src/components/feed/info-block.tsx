import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

import Block from 'src/ui/block'
import Rate from './rate'
import StatisticCircle from "src/components/feed/statistic-circle";

const InfoBlock = () => {
  return (
    <Block style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pablisssimo Perreira</Text>
      </View>
      <View style={styles.statistic}>
        <StatisticCircle iconName={'star'} text={'4.6'}/>
        <StatisticCircle iconName={'download'} text={'32K'}/>
        <StatisticCircle iconName={'team'} text={'3.2K'}/>
      </View>
      <Rate onRate={() => null} />
      <AntDesign style={styles.infoIcon} name="infocirlceo" size={20} color="grey" />
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  header: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  statistic: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  // body: {
  //   marginBottom: 16,
  //   flexDirection: 'row'
  // },
  // icon: {
  //   marginRight: 4
  // }
  infoIcon: {
    marginTop: 5,
    marginRight: 5,
    position: 'absolute',
    top: 0,
    right: 0
  }
})

export default InfoBlock
