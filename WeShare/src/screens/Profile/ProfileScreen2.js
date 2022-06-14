import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import CustomButton from '../../components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';


export default function ProfileScreen2({route}) {
  return (
   


<ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text>ProfileScreen2 </Text>
            <Text style={{fontSize: 18}}>
            { route.params.name && <Text> {route.params.name } </Text> }
            
          </Text>
            
        </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  root: {
      alignItems: 'center',
      padding: 60,
  },
});