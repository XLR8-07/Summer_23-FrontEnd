import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ListScreen from "./src/Screens/ListScreen";
import CounterScreen from "./src/Screens/CounterScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install react-native-safe-area-view
// npm install react-native-gesture-handler


const stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreens = () =>{
  return(
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={LoginScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  )
}

function App(){
 return(
  <AuthProvider>
    <AuthContext.Consumer>
  {(auth)=><NavigationContainer>
    {/* <stack.Navigator> */}
      {/* <stack.Screen name="MAD(A)" component={HomeScreen}/>
      <stack.Screen name="List Of Products" component={ListScreen}/>
      <stack.Screen name="Counter" component={CounterScreen}/>
      <stack.Screen name="SignIn" component={LoginScreen}/> */}
      {auth?.isLoggedIn? <CounterScreen/> : <AuthStackScreens/>}
    {/* </stack.Navigator> */}
  </NavigationContainer>}
  </AuthContext.Consumer>
  </AuthProvider>
 )
}

export default App;