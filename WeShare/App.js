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
