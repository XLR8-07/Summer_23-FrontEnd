import React from "react";
import { View, Text, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const HomeScreen = (props: any)=>{
    
    const handleListScreen=()=>{
        props.navigation.navigate("List Of Products")
    }
    return(
        <SafeAreaView>
            <View>
            <Text>
                HELLO WORLD AGAIN
            </Text>
            <Button title="GO TO LIST SCREEN" onPress={handleListScreen}></Button>
        </View>
        </SafeAreaView>
        
    )
}


export default HomeScreen;