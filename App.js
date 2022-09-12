import { useEffect, useCallback } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "./routes";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CUSTOMFONTS } from "./src/constants";

const App = () => {
  const [fontsLoaded] = Font.useFonts(CUSTOMFONTS);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
