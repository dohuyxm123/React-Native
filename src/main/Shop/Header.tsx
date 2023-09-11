
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
const Header = ({navigation}:any) => {
    return (
        <View>
            <TouchableOpacity onPress={navigation}>
                <Text>Open Menu</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Header;