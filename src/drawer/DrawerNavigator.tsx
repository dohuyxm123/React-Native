import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text } from "react-native";

const Main = () => {
  return(
    <Text>Main</Text>
  )  
};


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
       
        <Drawer.Navigator>
            <Drawer.Screen name="main" component={Main} options={{headerShown:true}}/>
        </Drawer.Navigator>
    )
};

export default DrawerNavigator;