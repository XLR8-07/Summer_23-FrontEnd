import React, { useState } from "react";
import { View,Text, Button, StyleSheet } from "react-native";

const CounterScreen = () =>{
    const [Counter, setCounter] = useState(5);
    const handleIncrease=()=>{
        setCounter(Counter+1)
        console.log(Counter)
    }

    const handleDecrease=()=>{
        setCounter(Counter-1)
        console.log(Counter)
    }
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.counterStyles}>{Counter}</Text>
            <View>
                <Button title="Increase" onPress={()=>{handleIncrease()}}></Button>
                <Button title="Decrease" onPress={()=>{handleDecrease()}}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    counterStyles:{
        color: '#c95cff',
        fontSize: 80
    },
    buttonContainer:{
        display: 'flex',
        marginTop: 40,
        flexDirection: 'row'
    }
})

export default CounterScreen;