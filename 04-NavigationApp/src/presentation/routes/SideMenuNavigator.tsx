import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';
import Ionicons from '@react-native-vector-icons/ionicons';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator =() =>{

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator 

      drawerContent={ (props) => <CustomDrawerContent {...props}/>}
 
      screenOptions={{
        drawerType: dimensions.width >= 500 ? 'permanent' : 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal:20
        }
        
      }}
    >
      <Drawer.Screen options={{drawerIcon: (({color}) => ( <Ionicons name='bonfire-outline' size={20} color={color}/> ))}} name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen options={{drawerIcon: (({color}) => ( <Ionicons name='person-circle-outline' size={20} color={color}/> ))}} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View 
        style= {{
          height:200,
          backgroundColor: globalColors.primary,
          margin: 30, 
          borderRadius: 50
        }}
      />
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}