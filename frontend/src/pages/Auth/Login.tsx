import React from "react";
import { View , StyleSheet, Text} from "react-native";

export default function Login(){
    return(
        <View style={styles.statContain}>
            <Text>Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    statContain:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})