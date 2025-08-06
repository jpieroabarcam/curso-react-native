
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View,Text, Pressable } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
        <Text>Tab1Screen</Text>
    </View>
  )
}
