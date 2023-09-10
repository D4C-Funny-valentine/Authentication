import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// https://eco-api-ogdf.onrender.com/fod/api/v1
// https://contact-app.mmsdev.site/api/v1
// /admin/login
export const AuthContext = createContext();

const API_URL = "https://contact-app.mmsdev.site/api/v1";

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const JWT_TOKEN = "Token";
  const USER = "User";

  const register = async (name, email, password, password_confirmation) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
        password_confirmation,
      });
      if (res.data.success) {
        setRegisterSuccess(res.data.success);
      }
    } catch (err) {
      console.log(err, "form register");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/login`, { email, password });
      if (res.data.success) {
        setUserToken(res.data.token);
        setUserData(res.data.user);
        await AsyncStorage.setItem(JWT_TOKEN, res.data.token);
        await AsyncStorage.setItem(USER, JSON.stringify(res.data.user));
        setLoading(false);
      }
    } catch (err) {
      console.log("login error", err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${userToken}`,
      };
      const res = await axios.post(`${API_URL}/user-logout`, {}, { headers });
      console.log("from logout", res.data);
      if (res.data.success) {
        await AsyncStorage.removeItem(JWT_TOKEN);
        await AsyncStorage.removeItem(USER);
        setUserToken(null);
        setUserData(null);
      }
      setLoading(false);
    } catch (error) {
      console.log("logout error", error);
    } finally {
      setLoading(false);
    }
  };
  //check the user is logged in
  const isUserLoggedIn = async () => {
    try {
      setLoading(true);
      let userToken = await AsyncStorage.getItem(JWT_TOKEN);
      let userInfo = await AsyncStorage.getItem(USER);
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserData(userInfo);
        setUserToken(userToken);
      }
      setLoading(false);
    } catch (error) {
      console.log(`UserLogged In Error ${error}`);
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const data = { login, logout, register, userToken, loading, userData, registerSuccess };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const UseAuthContext = () => useContext(AuthContext);
