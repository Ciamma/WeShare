import React from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';

const ShareScreen = ({navigation}) => {
    return (
        <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text>ShareScreen </Text>
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


export default ShareScreen;