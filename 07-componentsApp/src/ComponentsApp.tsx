import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './presentation/navigator/Navigation'

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}
