import React from "react";
import { Dimensions, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const {height} = Dimensions.get('window')
const Menu = () => {
    return (
       <View>
            <View style={{flex:1,backgroundColor:'red'}}>
                <Text>MenuComponent</Text>
            </View>
            <TextInput>

            </TextInput>
        </View> 
    );
}

export default Menu;