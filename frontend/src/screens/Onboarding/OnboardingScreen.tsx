import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from "../../pages/Onboarding/Welcome";
import WelcomeTwo from "../../pages/Onboarding/WelcomeTwo";
import WelcomeThree from "../../pages/Onboarding/WelcomeThree";

const OnboardStack = createNativeStackNavigator()

export function OnboardingScreen(){
    return(
        <OnboardStack.Navigator 
          screenOptions={{headerShown : false}}
        >
            <OnboardStack.Screen name="/welcome" component={Welcome}/>
            <OnboardStack.Screen name="/welcome-two" component={WelcomeTwo}/>
            <OnboardStack.Screen name="/welcome-three" component={WelcomeThree}/>
        </OnboardStack.Navigator>
    )
}