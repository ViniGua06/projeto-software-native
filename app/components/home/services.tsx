import { url } from "../../asset/url";

export const HomeServices = () => {
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

      return res.status;
    } catch (error) {
      console.log(error);
    }
  };

  return { getInfo };
};
