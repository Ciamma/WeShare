import React, {useState} from 'react'; //keep track of username
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '../../../context';


const SignUpScreen = ({navigation}) => {
    const { signUp } = React.useContext(AuthContext);

    const [fullName, setFullName] = useState(''); //at the begin is empty string
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); //at the begin is empty string
    const [passwordRepeat, setPasswordRepeat] = useState('');
    
    const onTermsOfUsePressed = () => {
        console.warn("terms"); //TO DO
    }

    const onPrivacyPressed = () => {
        console.warn("privacy"); //TO DO
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
        
                <CustomInput //full name
                    value={fullName} 
                    setValue= {setFullName}
                    label={'Full Name'}
                    icon={
                        <MaterialIcons
                             name="person-outline"
                            size={20}
                            color="#666"
                            style={{marginRight: 5}}
                        />
                    }
                />

                <CustomInput //email
                    value={email} 
                    setValue= {setEmail}
                    label={'Email'}
                    icon={
                        <MaterialIcons
                        name="alternate-email"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                        />
                    }
                    keyboardType="email-address"
                />

                <CustomInput //password
                    label={'Password'}
                    icon={
                        <MaterialIcons
                        name="lock"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                        />
                    }
                    inputType="password" 
                    value={password} 
                    setValue={setPassword}
                />

                <CustomInput //repeat password
                   label={'Confirm Password'}
                    icon={
                        <MaterialIcons
                        name="lock"
                        size={20}
                        color="#666"
                        style={{marginRight: 5}}
                        />
                    }
                     inputType="password"
                    value={passwordRepeat} 
                    setValue={setPasswordRepeat}
                />
        
                <CustomButton //default type = Primary
                    text= "Register"
                    onPress= { () => signUp() }
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our 
                        <Text style = {styles.link} onPress={onTermsOfUsePressed}>Terms of Use </Text> 
                        and <Text style = {styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text> </Text>


            <SocialSignInButtons
            />

            <CustomButton 
                    text= "already have an account? Sign In"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 60,
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    },
    
});


export default SignUpScreen;