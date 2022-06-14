import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton';


const SocialSignInButtons = () => {

    const OnSignInGoogle = () => {
        console.warn("google"); //TO DO
    }

    
    return (
        <>
            <CustomButton 
                    text= "Sign In with Google"
                    onPress={OnSignInGoogle}
                    bgColor = "#FAE9EA"
                    fgColor = "#FF8000"
                />
        </>
    )
}

export default SocialSignInButtons;