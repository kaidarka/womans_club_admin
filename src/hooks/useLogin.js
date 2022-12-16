import {fetchUserData} from "../store/user";
import axios from "../axios";
import {useDispatch} from "react-redux";

export const useLogin = () => {
  const dispatch = useDispatch();

  return async (email, password) => {
    try {
      const response = await axios.post(`/auth/login/`, {
        email,
        password
      });
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      dispatch(fetchUserData());
    } catch (e) {
      console.error(e);
      dispatch(fetchUserData());
    }
    return null;
  };
};
