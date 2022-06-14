import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

const ContactsScreen = ({navigation}) => {
    return (
        <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text>ContactsScreen </Text>
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

export default ContactsScreen;