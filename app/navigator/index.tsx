import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../components/home";
import { CreateAccount } from "../components/createAccount/index";
import { UserPage } from "../components/userPage";

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
            component={CreateAccount}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>

          <Stack.Screen name="user" component={UserPage}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
