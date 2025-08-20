import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { DetailsScreen } from "../screens/details/DetailsScreen";

const Stack = createNativeStackNavigator();

export type RootStackParams = {
    Home: undefined,
    Details: { movieId:number }
}

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}