
import { DrawerActions, useNavigation } from '@react-navigation/native';

import { View,Text } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { Ionicons } from "@react-native-vector-icons/ionicons";

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
        <Text>Tab1Screen</Text>
        <Ionicons name="rocket-outline" size={20} color="red" />
        
    </View>
  )
}
