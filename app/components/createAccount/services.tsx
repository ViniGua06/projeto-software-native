import { Alert } from "react-native";
import { url } from "../../asset/url";

export const CreateAccountServices = () => {
  const cadastro = async (name: string, email: string, password: string) => {
    try {
      const res = await fetch(`${url}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      const user = await fetch(`${url}/user/${data.userId}`)

      const userData = await user.json()



      const info = {
        status: res.status,
        message: data.message,
        id: data.userId,
        name: userData.name
      };

      Alert.alert(info.id, info.name)

      return info;
    } catch (error) {
      console.log(error);
    }
  };

  return { cadastro };
};
