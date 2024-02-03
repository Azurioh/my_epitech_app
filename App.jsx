import React from "react";
import LoginScreen from "./src/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./src/screens/Home";
import HelpPage from "./src/screens/Help";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} options={{ title: "Page de connexion"}} />
        <Stack.Screen name="accueil" component={HomePage} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="help" component={HelpPage} options={{headerTransparent: true, headerTitle: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;