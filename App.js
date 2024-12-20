const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import StartingPage from "./screens/StartingPage";
import Search from "./screens/Search";
import Compare from "./screens/Compare";
import Camera from "./screens/Camera";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const App = () => {
  // const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const Tab = createBottomTabNavigator();

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { position: "absolute" },
            // tabBarIcon: (tabInfo) => {<FontAwesome5 name="search" size={24} color="black" />},
          }}
        >
          <Tab.Screen
            name="StartingPage"
            component={StartingPage}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Octicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Octicons name="search" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Compare"
            component={Compare}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="compare-arrows" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Camera"
            component={Camera}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="camera-alt" size={24} color="black" />
              ),
            }}
          />
          {/* <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" size={24} color="black" />
              ),
            }}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
