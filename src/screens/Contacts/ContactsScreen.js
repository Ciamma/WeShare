// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, Image, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ProfileImageDefault from "../../../assets/profileImage.png";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = height * 0.2;

export default function ContactsScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  
  const [cards, setCards] = useState([
    {
      title: "Work",
      image: require("../../../assets/immagineprofilo.jpg"),
      full_name: "Giovanni Montobbio",
      city: "Rome, Italy",
      bio: "Computer science student at Sapienza University",
      email: "giovannimontobbio1@gmail.com",
      moment: "2022-06-23 22:34:45",
      phone: "3333333333333",
      instagram: "giovannimontobbio",
      id: 1,
    },
     {
        title: "Le mie info",
        image: require("../../../assets/cards_images/0.jpg"),
        full_name: "Francesco Totti",
        city: "Rome, Italy",
        email: "Francesco@totti.com",
        phone: "062340524",
        birth: "27-09-1976",
        bio: "Ex soccer player, now manager",
        moment: "2022-06-23 22:30:45",
        facebook: "FrancescoTottiOfficial",
        instagram: "FrancescoTotti",
        twitter: "totti",
        linkedin: "francescototti"
    },     {
        title: "Le mie info",
        full_name: "Giovanna",
        city: "Rome, Italy",
        birth: "28/04/1981",
        moment: "2022-06-23 22:30:46"
    },
  ]);
  
  const sourceImage = (contact) => {
    return contact.image ? contact.image : ProfileImageDefault
  }
  
  var lengthContacts = cards.length;
  
  

   useEffect(() => {
    setFilteredDataSource(cards);
     setMasterDataSource(cards);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.full_name
          ? item.full_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Contacts2", item);
        }}
      >
        <View style={{flexDirection: "row" }}>
          <Image source={sourceImage(item)} style={styles.profileImage} />
            <View style={{paddingLeft:15, paddingTop:5, justifyContent: 'center'}}>
              <Text style={styles.cardtitle}>{item.full_name}</Text>
               <Text style={styles.cardsubtitle}>{item.title}</Text>
          <Text style={styles.cardtext}>{item.city}</Text>
          <Text style={styles.cardtext}>{item.moment}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={{alignItems: "center"}}>
        <Text style={styles.title}>Contacts ({lengthContacts})</Text>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          inputContainerStyle={{backgroundColor: 'white'}}
          containerStyle={{
            backgroundColor: 'transparent', borderWidth: 0, borderBottomColor:"transparent", borderTopColor:'transparent'  , borderRadius: 0, width: width * 0.95
          }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          style={{ paddingBottom:10 }}
          data={cards.sort((a, b) => a.moment.localeCompare(b.moment))}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
      flex: 1,
  },
  viewTile: {
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    color: "white",
    fontSize: 30,
    lineHeight: 39,
    marginTop: 30,
  },
  profileImage: {
    width: width / 5,
    height: height / 10,
    borderRadius: 100,
  },
  item: {
    backgroundColor: "black",
    borderRadius: 30,
    width: CARD_WIDTH,
    // height: CARD_HEIGHT,
    flex: 1,
    flexDirection: "row",
    boxSizing: "border-box",
    padding: 20,
    marginVertical: 5,
  },
  searchBar: {
    backgroundColor: "white"
  },
    cardtitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  cardsubtitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  cardtext: {
    // fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  cardMoment: {
    color: "#525252",
    paddingLeft: 50,
  },
  title: {
    fontWeight: "700",
    color: "white",
    fontSize: 30,
    lineHeight: 39,
    marginTop: 30,
  },
});