import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

import LoginScreen from "../screens/LoginScreen.js";
import HomeScreen from "../screens/HomeScreen.js";
import MenuScreen from "../screens/MenuScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator defaultScreeonOptions={HomeScreen}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Image source={focused ? require("../assets/home1.png") : require("../assets/home2.png")} style={{ width: size, height: size }} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Image source={focused ? require("../assets/menu1.png") : require("../assets/menu2.png")} style={{ width: size, height: size }} />,
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator defaultScreenOptions={LoginScreen}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
  
}

export default StackNavigator;
