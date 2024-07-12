import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";

import * as Font from "expo-font";

import { SafeAreaView } from "react-native-safe-area-context";
import { HomeServices } from "./services";

const loadFonts = async () => {
  await Font.loadAsync({
    "josefin-sans": require("../../asset/JosefinSans-Regular.ttf"),
  });
};

export const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const service = HomeServices();

  const nav = useNavigation();

  const inputRef = useRef<TextInput>(null);

  const [show, setShow] = useState(false);

  const navigate = () => {
    //@ts-ignore
    nav.navigate("createAccount");
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const [loading, setLoading] = useState(false);

  const gotToNextInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const login = async () => {
    setLoading(true);
    
    try {
      const message = await service.getInfo(email, password);
      if (message == 400) {
        Alert.alert("Erro", "Credenciais erradas");
      } else {
        //@ts-ignore
        nav.navigate("user");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", String(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#7285a5", flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -300}
        >
          <View style={styles.main}>
            <View style={styles.container}>
              <Text style={styles.title}>Entrar</Text>
              <TextInput
                placeholder="Email"
                returnKeyType="next"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                onSubmitEditing={gotToNextInput}
              ></TextInput>
              <View style={styles.passwordContainer}>
                <TextInput
                  ref={inputRef}
                  returnKeyType="done"
                  placeholder="Senha"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={!show}
                  style={[styles.input, styles.passwordInput]}
                ></TextInput>
                <TouchableOpacity
                  style={styles.toggleButton}
                  onPress={() => setShow(!show)}
                >
                  <Text style={styles.eye}>{show ? "🙈" : "👀"}</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.submit}
                onPress={login}
                disabled={
                  loading || email.trim() == "" || password.trim() == ""
                    ? true
                    : false
                }
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  {loading ? (
                    <>
                      <ActivityIndicator size={"small"}></ActivityIndicator>
                    </>
                  ) : (
                    "Entrar"
                  )}
                </Text>
              </TouchableOpacity>

              <Text>
                Não possui uma conta? {""}
                <Text style={styles.createAccount} onPress={navigate}>
                  Crie uma conta
                </Text>
              </Text>
              <Text style={{ cursor: "pointer" }}>Esqueci a senha</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 120,
  },

  container: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5e9df",
    elevation: 8,
    paddingHorizontal: 28,
    width: "85%",
    height: "85%",
    gap: 22,
    paddingVertical: 57,
  },

  title: {
    fontSize: 30,
    fontWeight: "600",
  },

  input: {
    borderWidth: 0.5,
    padding: 10,
    height: 40,
    width: "100%",
    shadowColor: "#b66e33",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
  },

  passwordContainer: {
    width: "100%",
    // height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 15,
    color: "black",
  },

  passwordInput: {
    flex: 1,
    padding: 11,
    borderWidth: 0,
  },

  toggleButton: {
    paddingHorizontal: 11,
  },

  eye: {
    fontSize: 18,
  },

  submit: {
    width: "100%",
    backgroundColor: "#0e4d92",
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 10,
    borderRadius: 20,
  },

  createAccount: {
    textDecorationLine: "underline",
    color: "#5474de",
    fontWeight: "700",
    cursor: "pointer",
  },
});
