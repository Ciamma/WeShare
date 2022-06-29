import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomButton from "../../components/CustomButton";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = height * 0.7;
const WIDTH = 15;

export default function ProfileScreen({ navigation }) {
  //console.log(values);
  const [cards, setCards] = useState([
    {
      title: "Work",
      profileImage: require("../../../assets/immagineprofilo.jpg"),
      name: "Giovanni Montobbio",
      city: "Rome, Italy",
      bio: "Computer science student at Sapienza University",
      email: "giovannimontobbio1@gmail.com",
      phone: "3333333333333",
      instagram: "giovannimontobbio",
      id: 1,
    },
    {
      title: "Social",
      profileImage: require("../../../assets/immagineprofilo.jpg"),
      name: "Giovanni Montobbio",
      city: "Rome, Italy",
      bio: "Fancazzista professionista",
      email: "giovannimontobbio1@gmail.com",
      phone: "22222222",
      instagram: "giovannimontobbio",
      id: 2,
    },
    {
      title: "Work2",
      profileImage: require("../../../assets/immagineprofilo.jpg"),
      name: "Giovanni Montobbio",
      city: "Rome, Italy",
      bio: "Very hard worker",
      email: "giovannimontobbio1@gmail.com",
      phone: "88888888",
      linkedin: "giovannimontobbio",
      id: 3,
    },
    {
      title: "Work2",
      profileImage: require("../../../assets/immagineprofilo.jpg"),
      name: "Giovanni Montobbio",
      city: "Rome, Italy",
      bio: "Very hard worker",
      email: "giovannimontobbio1@gmail.com",
      phone: "44444",
      linkedin: "giovannimontobbio",
      id: 4,
    },
    {
      title: "Work2",
      profileImage: require("../../../assets/immagineprofilo.jpg"),
      name: "Giovanni Montobbio",
      city: "Rome, Italy",
      bio: "Very hard worker",
      email: "giovannimontobbio1@gmail.com",
      phone: "7777777",
      linkedin: "giovannimontobbio",
      id: 5,
    },
    {
      title: "Work3",
      profileImage: require("../../../assets/immagineprofilo.jpg"),
      name: "Giovanni Montobbio",
      city: "Rome, Italy",
      bio: "Very hard worker",
      email: "giovannimontobbio1@gmail.com",
      phone: "7777777",
      linkedin: "giovannimontobbio",
      id: 6,
    },
  ]);

  //Aggiungere una card allo state
  const addCard = async (card) => {
    card.id = Math.random();
    // setCards((currentCards) => {
    //   return [card, ...currentCards];
    // });
  };

  const onAddProfile = () => {
    navigation.navigate("Profile2", {
      cards,
      setCards,
    });
  };

  //console.log(cards);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.root}>
      <Text style={styles.profileText}>Your Profile</Text>

      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          //per alzare la card corrente
          const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            (index + 1) * CARD_WIDTH,
          ];
          const outputRange = [0, -40, 0];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          });

          return (
            <Animated.View style={{ transform: [{ translateY }] }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile2", item)}
              >
                <View style={styles.root2}>
                  <View style={styles.profileCard}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                      source={item.profileImage}
                      style={styles.profileImage}
                    />
                    <Text style={styles.profileName}> {item.name}</Text>
                    <Text style={styles.profileCity}> {item.city} </Text>
                    <Text style={styles.bio}>{item.bio}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <MaterialIcons
                        name="email"
                        size={20}
                        color="white"
                        style={{ marginRight: 5 }}
                      />
                      <Text style={{ color: "white" }}>{item.email}</Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <MaterialIcons
                        name="phone"
                        size={20}
                        color="white"
                        style={{ marginRight: 5 }}
                      />
                      <Text style={{ color: "white" }}>{item.phone}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
        horizontal
        //contentContainerStyle={{marginHorizontal: LATERAL_SPACE-50}}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={CARD_WIDTH + 15}
        scrollEventThrottle={16}
        pagingEnabled={true}
        bounces={false}
      />

      <CustomButton
        text="ADD NEW PROFILE"
        onPress={onAddProfile}
        type="CIRCLE"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //padding: 20
  },

  profileText: {
    fontWeight: "700",
    color: "white",
    fontSize: 30,
    lineHeight: 39,
    marginTop: 30,
  },
  root2: {
    marginTop: 50,
    height: CARD_HEIGHT,
    marginHorizontal: 10,
    //padding:10,
    alignItems: "center",
  },

  profileCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "black",
    boxSizing: "border-box",
    borderRadius: 30,
    alignItems: "center",
    //marginRight:15
  },
  title: {
    fontWeight: "400",
    color: "white",
    fontSize: 30,
    lineHeight: 39,
    marginTop: 25,
  },
  bio: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
  profileImage: {
    width: "35%",
    height: "20%",
    backgroundColor: "white",
    borderRadius: 50,
    marginVertical: 10,
  },
  profileName: {
    fontWeight: "300",
    color: "white",
    fontSize: 30,
    lineHeight: 39,
  },
  profileCity: {
    fontWeight: "100",
    color: "white",
    fontSize: 15,
    lineHeight: 20,
  },
});
/*

<CustomButton 
                    text= "ADD NEW PROFILE"
                    onPress = {onAddProfile}
                    type="CIRCLE"
                />
    </View>







import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../components/CustomButton';
import ProfileCard from '../../components/ProfileCard';
//import ProfileCardItem from '../../components/ProfileCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import ProfileCardItem from '../../components/ProfileCard';

import ProfileCardItem from '../../components/ProfileCard';

//import {cards as cards} from '../../components/ProfileCard/ProfileCard.js'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CARD_WIDTH = width * 0.8;
const WIDTH = 15;




export default function ProfileScreen({navigation}) {
  //console.log(cards);
  




  const onAddProfile = () => {
    navigation.navigate('Profile2');
  }

  
  


  


  
  return (
    //navigation.push('Pagina', {name: 'parametro1', param2..})
    
    <SafeAreaView style = {styles.root}>
    <Text style={styles.profileText}> 
        Your Profile
    </Text>
    
    
    <ProfileCard/>




    <CustomButton 
                    text= "ADD NEW PROFILE"
                    onPress = {onAddProfile}
                    type="CIRCLE"
                />
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
    root:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      //padding: 20
      
    },

    profileText:{
      fontWeight: '700',
      color: 'white',
      fontSize: 30,
      lineHeight: 39, 
      marginTop: 30,  
    },

 
  });*/

/*
   
 <View style={{paddingLeft:20, paddingRight:20, alignItems: 'center'}}>
      
      <Text style={styles.profileText}> 
        Your Profile
      </Text>
      
      
      
        <ProfileCard  cardstyle={{width: width*0.3, maxWidth: width*3, maxHeight: height*3}}/>
        
        <CustomButton 
                    text= "ADD NEW PROFILE"
                    onPress = {onAddProfile}
                    type="CIRCLE"
                />
     

     
    </View>


*/
