import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";

const Stack = createStackNavigator();

export type RootStackParams = {
    Home: undefined,
    Details: { movieId:number }
}

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />      
    </Stack.Navigator>
  );
}