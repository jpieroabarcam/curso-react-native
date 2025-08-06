import Ionicons from "@react-native-vector-icons/ionicons"
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Pressable, Text } from "react-native"
import { globalColors } from "../../theme/theme"



export const HamburgerMenu = () => {
    const navigation = useNavigation()
  
    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Pressable 
          style={{marginLeft:5}}
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer )}
          >
            {/* <Text>Menú</Text> */}
            <Ionicons name="menu-outline" size={20} color={globalColors.primary} />
          </Pressable>
        )
      })
    }, [])
    return (<></>);
}
