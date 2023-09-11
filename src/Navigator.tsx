import { Button, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./main/Main";
import Authentication from "./Authentication/Authentication";
import OrderHistory from "./OrderHistory/OrderHistory";
import ChangeInfo from "./ChangeInfo/ChangeInfo";

const Home = ({navigation}:any) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>Home</Text>
           <Button title="go detail"
           onPress={()=>navigation.navigate('Detail')}
           
           />
        </View>
    )
};

const Detail = ({navigation}:any) => {
   return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Detail</Text>
    <Button title="go Back"
    onPress={() =>navigation.goBack()}
    
    />
    </View>   
   ) 

};

const Stack = createStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="main" component={Main} options={{headerShown:false}} />    
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="Detail"component={Detail} options={{headerShown:false}}/>
            <Stack.Screen name="Authentication"component={Authentication} options={{headerShown:false}}/>
            <Stack.Screen name="OrderHistory"component={OrderHistory} options={{headerShown:false}}/>
            <Stack.Screen name="Changeinfo"component={ChangeInfo} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>        
    )

};

export default Navigator;