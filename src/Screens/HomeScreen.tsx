import React from "react";
import { View, Text, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const HomeScreen = (props: any)=>{
    const handleListScreen=()=>{
        props.navigation.navigate("List Of Products")
    }
    const handleCounterScreen=()=>{
        props.navigation.navigate("Counter")
    }

    const handleLoginScreen=()=>{
        props.navigation.navigate("SignIn")
    }
    return(
        <SafeAreaView>
            <View>
            <Text>
                HELLO WORLD AGAIN
            </Text>
            <Button title="GO TO LIST SCREEN" onPress={handleListScreen}></Button>
            <Button title="GO TO Counter SCREEN" onPress={handleCounterScreen}></Button>
            <Button title="LOG IN" onPress={handleLoginScreen}></Button>
        </View>
        </SafeAreaView>
        
    )
}


export default HomeScreen;