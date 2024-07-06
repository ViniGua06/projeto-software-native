import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../components/home";
import { createAccount } from "../components/createAccount";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: "whitesmoke",
              },
            }}
          />

          <Stack.Screen
            name="createAccount"
            component={createAccount}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
