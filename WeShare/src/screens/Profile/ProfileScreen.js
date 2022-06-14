import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';


export default function ProfileScreen({navigation}) {
  return (
    //navigation.push('Pagina', {name: 'parametro1', param2..})
      <ScrollView style={{padding: 80}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18}}>
            ProfileScreen
            
          </Text>

          <Button
            title="naviga"
            onPress={() => navigation.push('Profile2', {name:'questo testo è un parametro, passato con la funzione push'})}
          />

        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#000"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>

        

    
      </ScrollView>

  );
}

