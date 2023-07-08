import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ListScreen from "./src/Screens/ListScreen";
import CounterScreen from "./src/Screens/CounterScreen";
// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install react-native-safe-area-view
// npm install react-native-gesture-handler


const stack = createStackNavigator();

function App(){
 return(
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="MAD(A)" component={HomeScreen}/>
      <stack.Screen name="List Of Products" component={ListScreen}/>
      <stack.Screen name="Counter" component={CounterScreen}/>
    </stack.Navigator>
  </NavigationContainer>
 )
}

export default App;