import React from 'react';
import { View, Text,ScrollView, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';

import { AuthContext } from '../../../context';



const SettingsScreen = ({navigation}) => {
    const { signOut } = React.useContext(AuthContext);

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }
    
    return (
        <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text>SettingsScreen </Text>

            <CustomButton 
                    text= "Logout"
                    onPress= { () => signOut() } 
                />
        </View>
    </ScrollView>
    );
};


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 60,
    },
});


export default SettingsScreen;