import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Examples = ()=> {
  const navigation = useNavigation();
  return (
    <View>
      <Button onPress={() => navigation.navigate("Wallet")} title="Wallet" />
      <Button
        onPress={() => navigation.navigate("RadialMenu")}
        title="RadialMenu"
      />

      <Button
        onPress={() => navigation.navigate("CollapsibleHeader")}
        title="CollapsibleHeader"
      />

      <Button
        onPress={() => navigation.navigate("TinderSwipe")}
        title="Tinder Swipe"
      />
    </View>
  );
}

export default Examples
