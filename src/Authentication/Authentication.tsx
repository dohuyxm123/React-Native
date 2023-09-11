import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Authentication = ({navigation}:any) => {
    return (
        <>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Authenticationscreen</Text>
          
        </View>
      </>
      
    );
};

const styles = StyleSheet.create({
    
})
    

export default Authentication;