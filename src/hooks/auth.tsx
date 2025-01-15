import AsyncStorage from '@react-native-async-storage/async-storage';
import UserHTTPService from '@services/infraestructure/service/UserHTTPService';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ILoginDTO } from '@global/schemas/login.schema';

import { useToast } from './useToast';
import fipeApi from '@services/infraestructure/http/api';

type IUserDTO = {
  id: number;
  name: string;
  token: string;
}


interface AuthContextData {
  isAuthenticated: boolean;
  user: IUserDTO;
  login: (data: ILoginDTO) => Promise<void>;
}


const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUserDTO>({} as IUserDTO);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');

        if (userData) {
          setUser(JSON.parse(userData));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (data: ILoginDTO) => {
    try {
      const response = await UserHTTPService.login(data);
      const loggedInUser = response.data.user;

      fipeApi.defaults.headers["Authorization"] =
        `Bearer ${loggedInUser?.token}`;

      setUser(loggedInUser);
      setIsAuthenticated(true);

      await AsyncStorage.setItem('user', JSON.stringify(loggedInUser));
    } catch (error) {
      showToast(error?.response?.data?.message);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return useContext(AuthContext);
};
