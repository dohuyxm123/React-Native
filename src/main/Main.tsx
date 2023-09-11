import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Button, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";



const Main = ({navigation}:any)=>{
    const gotoOrder= ()=>{
        navigation.navigate('OderHistory')
    };
    const gotoChangeInfo=()=>{
        navigation.navigate('Changeinfo')
    }
    const gotoAuthentication=()=>{
        navigation.navigate('Authentication')
    }
        return(
            <View>
                <Button title="Go to Authentication" onPress={gotoAuthentication}/>
                <Button title="Go to OrderHistory" onPress={gotoOrder}/>
                <Button title="Go to ChangeInfo" onPress={gotoChangeInfo}/>
            </View>
        )
};
export default Main;