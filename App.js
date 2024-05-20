const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Inicio from "./screens/Inicio";
import DividirLaCuentaBuscarConta from "./components/DividirLaCuentaBuscarConta";
import Image1 from "./screens/Image1";
import Inicio1 from "./screens/Inicio1";
import SplitBill from "./screens/SplitBill";
import AgregarAdri from "./screens/AgregarAdri";
import AgregarABene from "./screens/AgregarABene";
import Confirmar1 from "./screens/Confirmar1";
import PagoMatrcula from "./screens/PagoMatrcula";
import Presupuesto from "./screens/Presupuesto";
import Metas from "./screens/Metas";
import Promociones from "./screens/Promociones";
import PagoMatrcula1 from "./screens/PagoMatrcula1";
import PagoMatrcula2 from "./screens/PagoMatrcula2";
import ConfirmarPago from "./screens/ConfirmarPago";
import IPhone1314 from './screens/IPhone1314';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "ArchivoBlack-Regular": require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    "SawarabiGothic-Regular": require("./assets/fonts/SawarabiGothic-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "NunitoSans12pt-Bold": require("./assets/fonts/NunitoSans12pt-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Image1"
              component={Image1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inicio1"
              component={Inicio1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplitBill"
              component={SplitBill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AgregarAdri"
              component={AgregarAdri}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AgregarABene"
              component={AgregarABene}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Confirmar1"
              component={Confirmar1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PagoMatrcula"
              component={PagoMatrcula}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Presupuesto"
              component={Presupuesto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Metas"
              component={Metas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Promociones"
              component={Promociones}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PagoMatrcula1"
              component={PagoMatrcula1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PagoMatrcula2"
              component={PagoMatrcula2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmarPago"
              component={ConfirmarPago}
              options={{ headerShown: false }}
            />
                    <Stack.Screen name="IPhone1314" component={IPhone1314} />

          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
