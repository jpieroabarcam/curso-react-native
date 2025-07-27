import { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.style"
import { FAB } from "react-native-paper"
import Icon from '@react-native-vector-icons/ionicons';



export const CounterM3Screen = () => {

  const [count, setCount] = useState(10)

  return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{ count }</Text>
        <FAB 
            icon="add-outline"
            style={globalStyles.fab}
            onPress={ () => setCount( count +1)}
            onLongPress= { ()=> setCount(0)}
        />
        {/* <Icon name="accessibility-outline" size={25} /> */}
    </View>
  )
}
