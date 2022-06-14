import { ScrollView, View } from "react-native";
import { Card } from "react-native-paper";

function Contacts() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <Card>
          <Card.Title title="Contatti" />
        </Card>
      </ScrollView>
    </View>
  );
}
export default Contacts;
