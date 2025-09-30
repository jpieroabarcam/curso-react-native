import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './navigation/StackNavigator'
import { PermissionsChecker } from './providers/PermissionsChecker'

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  )
}
