import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import ClimateScreen from "../screens/Climate/Climate";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home"  >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Climate" component={ClimateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}