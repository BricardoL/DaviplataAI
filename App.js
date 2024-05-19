const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomePageactionopenurl from "./screens/HomePageactionopenurl";
import Rectangle from "./components/Rectangle";
import PresupuestoText from "./components/PresupuestoText";
import RightSide from "./components/RightSide";
import LeftSide from "./screens/LeftSide";
import Image1 from "./components/Image1";
import Image2 from "./components/Image2";
import Image3 from "./components/Image3";
import Image4 from "./components/Image4";
import Group from "./screens/Group";
import Group1 from "./screens/Group1";
import Group2 from "./screens/Group2";
import Metas from "./screens/Metas";
import Split from "./screens/Split";
import Image5 from "./components/Image5";
import PostCamarasal15 from "./components/PostCamarasal15";
import Rectangle1 from "./components/Rectangle1";
import Rectangle2 from "./components/Rectangle2";
import Group3 from "./screens/Group3";
import Rectangle3 from "./components/Rectangle3";
import Rectangle4 from "./components/Rectangle4";
import Split1 from "./screens/Split1";
import AadirAdri from "./screens/AadirAdri";
import IPhone1314 from "./screens/IPhone1314";
import IPhone13141 from "./screens/IPhone13141";
import AadirAdri1 from "./screens/AadirAdri1";
import IPhone13142 from "./screens/IPhone13142";
import AadirArtu from "./screens/AadirArtu";
import Confirmar from "./screens/Confirmar";
import Hola from "./screens/Hola";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomePageactionopenurl"
              component={HomePageactionopenurl}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LeftSide"
              component={LeftSide}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group2"
              component={Group2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Metas"
              component={Metas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Split"
              component={Split}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group3"
              component={Group3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Split1"
              component={Split1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AadirAdri"
              component={AadirAdri}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1314"
              component={IPhone1314}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13141"
              component={IPhone13141}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AadirAdri1"
              component={AadirAdri1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13142"
              component={IPhone13142}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AadirArtu"
              component={AadirArtu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmar"
              component={Confirmar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hola"
              component={Hola}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
