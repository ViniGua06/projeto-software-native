import { SafeAreaView } from "react-native-safe-area-context";

import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const createAccount = () => {
  const nav = useNavigation();

  const navigate = () => {
    //@ts-ignore
    nav.navigate("home");
  };
  return (
    <>
      <SafeAreaView>
        <Text>create account</Text>
        <Button onPress={navigate} title="Navegar"></Button>
      </SafeAreaView>
    </>
  );
};
