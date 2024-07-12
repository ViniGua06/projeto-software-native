import { useDispatch } from "react-redux";
import { url } from "../../asset/url";
import { setUser } from "../../redux/user/slice";

export const HomeServices = () => {
  const dispatch = useDispatch()
  const getInfo = async (email: string, password: string) => {
    try {
      const res = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: password,
        }),
      });

      const data = await res.json()

      const user = await fetch(`${url}/user/${data.userId}`)

      const userData = await user.json()



      

      dispatch(setUser({id: data.userId, name: userData.name, email: userData.email, password: userData.password, photo: userData.photo}))

      return res.status;
    } catch (error) {
      console.log(error);
    }
  };

  return { getInfo };
};
