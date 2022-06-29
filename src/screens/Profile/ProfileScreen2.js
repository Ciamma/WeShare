import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import CustomButton from "../../components/CustomButton";

export default function ProfileScreen2({ navigation }) {
  const route = useRoute();

  //console.log(route.params.setCards);

  return (
    /*
prima c'era: { route.params.name && <Text> {route.params.name } </Text> }
*/
    <SafeAreaView style={styles.root}>
      <ScrollView
        style={{ paddingLeft: 15, paddingRight: 10 }}
        showVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={{
            fullName: "",
            dateOfBirth: "",
            emailAddress: "",
            phoneNumber: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            twitter: "",
            cardTitle: "",
            bio: "",
          }}
          onSubmit={(values) => {
            //console.log(values);
          }}
        >
          {(props) => (
            <View style={styles.inputWrapper}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Full name{" "}
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="fullname"
                    onChangeText={props.handleChange("fullName")}
                    value={props.values.fullName}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Date of birth{" "}
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Date of birth"
                    onChangeText={props.handleChange("dateOfBirth")}
                    value={props.values.dateOfBirth}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Email Address{" "}
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Email address"
                    onChangeText={props.handleChange("emailAddress")}
                    value={props.values.emailAddress}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Phone number{" "}
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Phone number"
                    onChangeText={props.handleChange("phoneNumber")}
                    value={props.values.phoneNumber}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Facebook
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Facebook"
                    onChangeText={props.handleChange("facebook")}
                    value={props.values.facebook}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Instagram
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Instagram"
                    onChangeText={props.handleChange("instagram")}
                    value={props.values.instagram}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Linkedin{" "}
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Linkedin"
                    onChangeText={props.handleChange("linkedin")}
                    value={props.values.linkedin}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Twitter{" "}
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Twitter"
                    onChangeText={props.handleChange("twitter")}
                    value={props.values.twitter}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {" "}
                  Card title{" "}
                </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Card Title"
                    onChangeText={props.handleChange("cardTitle")}
                    value={props.values.cardTitle}
                  />
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}> Bio </Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Bio"
                    onChangeText={props.handleChange("bio")}
                    value={props.values.bio}
                  />
                </View>
              </View>

              <View style={{ alignItems: "center" }}>
                <CustomButton
                  text="SAVE"
                  onPress={props.handleSubmit}
                  type="CIRCLE"
                  bgColor="black"
                  fgColor="white"
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    //alignItems: 'center',
    //padding: 20,
  },
  title: {
    paddingTop: 30,
    fontWeight: "700",
    color: "white",
    fontSize: 30,
    textAlign: "center",
    //lineHeight: 69,
  },
  imageView: {
    flexDirection: "row",
    //padding: 30,
  },
  profileImage: {
    width: "35%",
    maxWidth: 300,
    maxHeight: 200,
  },
  changeImageButton: {
    width: "40%",
    height: "20%",
    //padding: 15,
    //marginVertical: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "gainsboro",
    marginLeft: 40,
    marginTop: 80,
  },
  inputWrapper: {
    //flex:1,
    //padding:15,
    marginTop: 70,
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 6,
    marginBottom: 15,
  },
});
/*
const {height, width} = useWindowDimensions();

  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [bio, setBio] = useState('');





<Text style={styles.title}>Add profile card</Text>
          
          <View style={styles.imageView}>
            <Image source={require('../../../assets/profileImage.png')} style={styles.profileImage} resizeMode="contain"></Image>
                <TouchableOpacity style={styles.changeImageButton}>
                  <Text style={{fontWeight:'100'}} >
                    Change image
                  </Text>
                </TouchableOpacity>
          </View>
          
          <View style={styles.inputWrapper}>
          <GeneralInput    //FULL NAME
          style={styles.input}
          value = {fullName}
          setValue = {setFullName}
          label={'Full Name'}
          
          keyboardType="default"
          bgColor = 'white'
        />

<GeneralInput    //Birth
          style={styles.input}
          value = {dateOfBirth}
          setValue = {setDateOfBirth}
          label={'Date of birth'}
          
          keyboardType="default"
          bgColor = 'white'
        />
        
        <GeneralInput    //Email
          style={styles.input}
          value = {emailAddress}
          setValue = {setEmailAddress}
          label={'Email address'}
          
          keyboardType="default"
          bgColor = 'white'
        />

<GeneralInput    //phone number
          style={styles.input}
          value = {phoneNumber}
          setValue = {setPhoneNumber}
          label={'Phone number'}
          
          keyboardType="default"
          bgColor = 'white'
        />
        <GeneralInput    //Facebook
          style={styles.input}
          value = {facebook}
          setValue = {setFacebook}
          label={'Facebook'}
          
          keyboardType="default"
          bgColor = 'white'
        />
        <GeneralInput    //instagram
          style={styles.input}
          value = {instagram}
          setValue = {setInstagram}
          label={'Instagram'}
          
          keyboardType="default"
          bgColor = 'white'
        />
        <GeneralInput    //Linkedin
          style={styles.input}
          value = {linkedin}
          setValue = {setLinkedin}
          label={'Linkedin'}
          
          keyboardType="default"
          bgColor = 'white'
        />
        
        <GeneralInput    //Twitter
          style={styles.input}
          value = {twitter}
          setValue = {setTwitter}
          label={'Twitter'}
          
          keyboardType="default"
          bgColor = 'white'
        />

        <GeneralInput    //Twitter
          style={styles.input}
          value = {cardTitle}
          setValue = {setCardTitle}
          label={'Card title'}
          
          keyboardType="default"
          bgColor = 'white'
        />


        <GeneralInput    //FULL NAME
          style={styles.input}
          value = {bio}
          setValue = {setBio}
          label={'Bio'}
          
          keyboardType="default"
          bgColor = 'white'
        />


          </View>


          <View style={{alignItems:'center'}}>
            <CustomButton 
                      text= "SAVE"
                      onPress = {onSaveProfile}
                      type="CIRCLE"
                      bgColor = 'black'
                      fgColor = 'white'

                      
                  />
          </View>

*/
