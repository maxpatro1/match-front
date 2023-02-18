import {StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";


type StatisticCircleProps = {
    iconName: 'team' | 'star' | 'download'
    text: string
}


const StatisticCircle = (props: StatisticCircleProps) => {
    const { text } = props
    const { iconName } = props

    return (
       <View style={styles.circle}>
            <AntDesign size={20} name={ iconName } color={iconName != 'star' ? 'grey': 'yellow'}/>
            <Text>{ text }</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    circle: {
        width: 58,
        height: 58,
        fontSize: 18,
        borderRadius: 58,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: "center",
        alignItems: "center",
    }
})

export default StatisticCircle