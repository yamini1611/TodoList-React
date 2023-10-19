import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const Auth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userTask ,setUserTask] = useState([]);
  useEffect(() => {
    const userFromSessionStorage = JSON.parse(sessionStorage.getItem('user'));
    setUser(userFromSessionStorage);
    
  }, []);

  const loginUser = (userData ,userTasks) => {
    setUser(userData);
    setUserTask(userTasks);
    sessionStorage.setItem('userTasks' ,JSON.stringify(userTasks));
    sessionStorage.setItem('user', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser ,userTask}}>
      {children}
    </AuthContext.Provider>
  );
};
