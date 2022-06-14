import React, {useState} from 'react'; //keep track of username
import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '../../../context';



const SignInScreen = ( {navigation} ) => {
    const { signIn } = React.useContext(AuthContext);

    const [email, setEmail] = useState(''); //at the begin is empty string
    const [password, setPassword] = useState(''); //at the begin is empty string

    const {height} = useWindowDimensions();
    //const navigation = useNavigation();

    const OnForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }
    
    const OnSignUpPressed = () => {
        navigation.navigate('SignUp');
    } 

    return (
        <ScrollView showVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} styles={styles.logo, {height: height * 0.3}} resizeMode="contain"  
                />
        
          
        <CustomInput    //EMAIL
          value = {email}
          setValue = {setEmail}
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

        <CustomInput        //PASSWORD
            value = {password}
          setValue = {setPassword}
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
          fieldButtonLabel={"show"}
          fieldButtonFunction={() => {}}
        />
        
                <CustomButton //BOTTONE LOGIN
                    text= "Login"
                    onPress= { () => signIn() } 
                />


                <CustomButton   //BOTTONE FORGET PASSWORD
                    text= "Forgot password?"
                    onPress={OnForgotPasswordPressed}
                    type="TERTIARY"
                />

                
                <SocialSignInButtons    //BOTTONE GOOGLE

                />
                
                
                <CustomButton //BOTTONE VAI ALLA REGISTRAZIONE
                    text= "Don't have an account yet? Sign Up"
                    onPress={OnSignUpPressed}
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
    logo: { //responsive
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }, 
});


export default SignInScreen;