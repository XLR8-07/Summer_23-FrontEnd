import React, { useState } from "react";
import { Button, View, TextInput, Image, StyleSheet, Text } from "react-native";
// import UIULogo from "../../assets/public/icons/uiu_logo.png";
import Logo from "../../assets/public/icons/uiu_logo.png";
import { AuthContext, IAuthProvider } from "../providers/AuthProvider";
import axios from "axios";

export interface INationalizeResponse
{
    count: number
    name: string
    country: ICountry[] 
}

export interface ICountry
{
    country_id: string
    probability: number
}

const LoginScreen=(props:any)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameInput, setNameInput] = useState('') // TO TAKE INPUT FROM USER
    const [nationality, setNationality] = useState('') // TO SHOW THE NATIONALITY

    const match = {
        'email' : 'test@gmail.com',
        'password': 'abcd1234'
    }

    const handleOnSubmit = (authData: IAuthProvider)=>{
        if(email === match['email'] && password === match['password'])
        {
            console.log("SUCCESSFULL")
            authData.setIsLoggedIn(true)
            // props.navigation.navigate("Counter")
        }
        else
        {
            console.log("FAILED")
        }
    }

    const handleEmailInput = (emailInput:string) =>{
        // console.log(emailInput)
        setEmail(emailInput)
    }

    const handlePassInput = (passInput: string) =>{
        // console.log(passInput)
        setPassword(passInput)
    }

    const handleNameInput = (userInput: string) =>{
        setNameInput(userInput)
    }

    const handleGetNationality = async() =>{
        const response = await axios.get(`https://api.nationalize.io?name=${nameInput}`)
        setNationalityFromAPI(response.data)
    }

    const setNationalityFromAPI = (response: INationalizeResponse) =>
    {
        if(response.country.length > 0)
        {
            setNationality(response.country[0].country_id)
        }
        else
        {
            setNationality("")
        }
    }

    return(
        <AuthContext.Consumer>
        {(auth)=><View style={styles.mainContainer}>
            <Image source={Logo} style={styles.imageStyles}/>
            <View style={styles.inputContainer}>
                <TextInput value={email} onChangeText={handleEmailInput} style={styles.inputStyles}/>
                <TextInput value={password} onChangeText={handlePassInput}style={styles.inputStyles}/>
                <TextInput value={nameInput} onChangeText={handleNameInput}style={styles.inputStyles}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={()=>handleOnSubmit(auth as IAuthProvider)}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="GET NATIONALITY" onPress={handleGetNationality}/>
            </View>
            <View>
                <Text>{nationality}</Text> 
            </View>
        </View>}
        </AuthContext.Consumer>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyles:{
        height: 100,
        width: 100,
        margin: 40
    },
    inputContainer:{
        display: 'flex',
        margin: 10
    },
    inputStyles:{
        width: 200,
        height: 60,
        marginTop: 20,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 25
    },
    buttonContainer:{
        margin: 15
    }
    
})
export default LoginScreen;