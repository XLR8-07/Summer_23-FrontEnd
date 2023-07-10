import React, { useState } from "react";
import { View,Text, StyleSheet, Pressable, Button } from "react-native";
import { AuthContext, IAuthProvider } from "../providers/AuthProvider";

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

    const handleLogOut = (auth: IAuthProvider)=>{
        auth.setIsLoggedIn(false)
    }
    return(
        <AuthContext.Consumer>
        {(auth)=><View style={styles.mainContainer}>
            <Text style={styles.counterStyles}>{Counter}</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonStyles} onPress={()=>{handleIncrease()}}>
                    <Text>Increase</Text>
                </Pressable>
                <Pressable style={styles.buttonStyles} onPress={()=>{handleDecrease()}}>
                    <Text>Decrease</Text>
                </Pressable>
            </View>
            <View>
                <Button title="Log Out" onPress={()=>handleLogOut(auth as IAuthProvider)}/>
            </View>
        </View>}
        </AuthContext.Consumer>
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
    },
    buttonStyles:{
        margin: 10,
        backgroundColor: "#87e09f",
        borderRadius: 4,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        shadowRadius: 3
    }
})

export default CounterScreen;