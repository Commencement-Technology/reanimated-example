import * as React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Waleet from "./animations/06_wallet/Wallet";
import TinderSwipe from "./animations/11_TinderSwipe/TinderSwipe";
import CollapsibleHeader from "./animations/09_collapsibleHeader/CollapsibleHeader";
import RadialMenu from "./animations/07_radial_menu/RadialMenu";
import Examples from "./animations/Examples";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Examples" component={Examples} />
          <Stack.Screen name="TinderSwipe" component={TinderSwipe} />
          <Stack.Screen name="RadialMenu" component={RadialMenu} />
          <Stack.Screen
            name="CollapsibleHeader"
            component={CollapsibleHeader}
          />
          <Stack.Screen name="Wallet" component={Waleet} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
