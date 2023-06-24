import React from "react";
import { View, Text } from "react-native";

export interface IProduct{
    name: string
    id: number
}

const Product = (props: IProduct) =>{
    return(
        <View>
            <Text>
                {props.id}
            </Text>
            <Text>
                {props.name}
            </Text>
        </View>
    )
}

export default Product;