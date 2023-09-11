import { View } from "react-native";
import { Button, Text, TouchableOpacity } from "react-native";

const OrderHistory = ({navigation}:any) => {
    
    return(
        <View style={{flex:1,backgroundColor:'red'}}>
            <Text>Order</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
        
    )
};

export default OrderHistory;