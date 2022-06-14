<<<<<<< HEAD
//https://www.youtube.com/watch?v=nQVCkqvU1uE&ab_channel=ReactNativeSchool
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AuthContext } from './context';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SplashScreen from './src/screens/Splash/SplashScreen'; //SPLASH SCREEN

//SCREENS FOR AUTHENTICATION
import SignInScreen from './src/screens/Authentication/SignInScreen';
import SignUpScreen from './src/screens/Authentication/SignUpScreen';
import ForgotPasswordScreen from './src/screens/Authentication/ForgotPasswordScreen';

//SCREENS FOR PROFILE TAB
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import ProfileScreen2 from './src/screens/Profile/ProfileScreen2';

//SCREENS FOR SHARE TAB
import ShareScreen from './src/screens/Share/ShareScreen';

//SCREENS FOR CONTACTS TAB
import ContactsScreen from './src/screens/Contacts/ContactsScreen';

//SCREENS FOR SETTINGS TAB
import SettingsScreen from './src/screens/Settings/SettingsScreen';





const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
              <AuthStack.Screen name="SignIn" component={SignInScreen} />
              <AuthStack.Screen name="SignUp" component={SignUpScreen} />
              <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          </AuthStack.Navigator>
)



const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={{headerShown: true}} > 
      <ProfileStack.Screen name="Profile1" component= {ProfileScreen} />
      <ProfileStack.Screen name="Profile2" component= {ProfileScreen2} options={({ route }) => ({
                  title: route.params.name
            })}/>
  </ProfileStack.Navigator>
)

const ShareStack = createNativeStackNavigator();
const ShareStackScreen = () => (
  <ShareStack.Navigator screenOptions={{headerShown: false}}> 
      <ShareStack.Screen name="Share1" component= {ShareScreen} />
  </ShareStack.Navigator>
)

const ContactsStack = createNativeStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator screenOptions={{headerShown: false}}> 
      <ContactsStack.Screen name="Contacts1" component= {ContactsScreen} />
  </ContactsStack.Navigator>
)

const SettingsStack = createNativeStackNavigator();
const SettingsStackScreen = () => (
  <SettingsStack.Navigator screenOptions={{headerShown: false}}> 
      <SettingsStack.Screen name="Settings1" component= {SettingsScreen} />
  </SettingsStack.Navigator>
)


const Tab = createBottomTabNavigator();
const TabsScreen = () => (
  <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
      headerShown: false,
      activeTintColor: '#d4d7dd',
      tabBarStyle: {
        backgroundColor: '#0c0c0c',
        borderTopColor: 'transparent'
  }
      }}
    >
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="person-outline"
                size={size}
                color={color}
              />
               
            ),
            }}
        />
        <Tab.Screen
            name="Share"
            component={ShareStackScreen}
            options={{
            tabBarLabel: 'Share',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="send-to-mobile"
                size={size}
                color={color}
              />
            ),
            }}
        />
        <Tab.Screen
            name="Contacts"
            component={ContactsStackScreen}
            options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                name="contacts"
                size={size}
                color={color}
              />
            ),
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingsStackScreen}
            options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="settings"
                size={size}
                color={color}
              />
            ),
            }}
        />
    </Tab.Navigator>
)


const RootStack = createNativeStackNavigator();
const RootStackScreen = ( { userToken } ) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
      {userToken ? (
        <RootStack.Screen name="App"  component={TabsScreen} options={{animationEnabled: false}} />
      ) :(
        <RootStack.Screen name="Auth" component={AuthStackScreen} options={{animationEnabled: false}} />
      )}
  </RootStack.Navigator>
)


const MyTheme = { //COLOR ROSATO
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#d4c1c1'
  },
};


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true); //by default we are loading (checking if user is authorized)
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo( () => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, [])

  React.useEffect( () => {
    setTimeout( () => {
      setIsLoading(false);
    }, 1500);
  }, []); //empty array as 2nd input: dont need to repeat the operation


  if (isLoading) { //schermata splash
    return <SplashScreen />
  }

  return (
    <AuthContext.Provider value={authContext}>
     <NavigationContainer theme={MyTheme}>
          <RootStackScreen userToken= {userToken} />
      </NavigationContainer>

      </AuthContext.Provider>
  );
}




export default App;
=======
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import Contacts from "./Screens/contacts";
import Profile from "./Screens/profile";
import WeShare from "./Screens/weshare";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Profilo"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="WeShare"
          component={WeShare}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="share" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contatti"
          component={Contacts}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="contacts" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
>>>>>>> 21f9608142fd8fbbdd4c0b0c2cf023e08e22a3f1
