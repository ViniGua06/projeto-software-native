import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { userSelect } from "../../redux/user/slice";
import { UserServices } from "./services";

export const UserPage = () => {
  const { id, name, email, password } = useSelector(userSelect);
  const services = UserServices();
  return (
    <>
      <View>
        <Text>OLA, {id}</Text>
        <Text>OLA, {name}</Text>
        <Text>OLA, {email}</Text>
        <Text>OLA, {password}</Text>
      </View>
    </>
  );
};
