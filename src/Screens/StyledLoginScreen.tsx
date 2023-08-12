import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';


const StyledLoginScreen = () =>{
    const [userEmail , setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return(
        <View style={styles.mainContainer}>
            <Card style={styles.cardContainer}>
                <View style={styles.titleContainer}>
                    <Text>L O G I N</Text>
                </View>
                <View style={styles.formContainer}>
                <TextInput
                    mode="outlined"
                    label="Email"
                    value={userEmail}
                    onChangeText={text =>setUserEmail(text)}
                    />
                <TextInput
                    mode="outlined"
                    label="Password"
                    secureTextEntry={true}
                    value={userPassword}
                    onChangeText={text =>setUserPassword(text)}
                    />
                </View>
                
                <Button style={styles.buttonContainer} icon="ray-start-arrow" mode="contained" onPress={() => console.log('Pressed')}>
                    S U B M I T
                </Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#edfffd",
        height: '100%'
    },
    cardContainer:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
    },
    titleContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    formContainer:{
        marginTop: 16,
        width: 280,
        marginBottom: 16
    },
    buttonContainer:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        fontSize: 16,
        fontWeight: 700,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10
    }
})

export default StyledLoginScreen;