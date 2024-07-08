import { useDispatch, useSelector } from "react-redux";
import { url } from "../../asset/url";
import { setUser, userSelect } from "../../redux/user/slice";

export const UserServices = () => {
  const { id } = useSelector(userSelect);
  const dispatch = useDispatch();

  const updateData = async () => {
    try {
      const res = await fetch(`${url}/user/${id}`);

      const data = await res.json();

      dispatch(
        setUser({
          id: data.id,
          name: data.name,
          email: data.email,
          password: data.password,
        })
      );

      return { updateData };
    } catch (error) {
      console.log(error);
    }
  };
};
