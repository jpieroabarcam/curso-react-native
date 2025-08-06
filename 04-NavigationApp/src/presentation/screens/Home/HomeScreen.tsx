
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';

export const HomeScreen = () => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => { navigation.dispatch( DrawerActions.toggleDrawer)}}>
          <Text> Menu </Text>
        </Pressable>
      )
    })
    
  }, [])
  

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
        {/* <Pressable 
        onPress={ () => navigation.navigate('Products')}
        style={globalStyles.primaryButton}>
          <Text style={globalStyles.buttonText}>Productos</Text>
        </Pressable> */}
      
        <PrimaryButton
          label="Productos"
          onPress={() => navigation.navigate('Products')}
        >
        </PrimaryButton>

        <PrimaryButton
          label="Settings"
          onPress={() => navigation.navigate('Settings')}
        >
        </PrimaryButton>
        


    </View>
  )
}
