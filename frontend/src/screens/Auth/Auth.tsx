import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Statut from "../../pages/Auth/Statut";
import Login from "../../pages/Auth/Login";

const AuthStack = createNativeStackNavigator()

export function AuthScreen(){
    return(
        <AuthStack.Navigator 
          screenOptions={{headerShown : false}}
        >
            <AuthStack.Screen name="/statut" component={Statut}/>
            {/* <AuthStack.Screen name="/niveau" component={Niveau}/>
            <AuthStack.Screen name="/classe" component={Classe}/> */}
            <AuthStack.Screen name="/login" component={Login}/>
        </AuthStack.Navigator>
    )
}