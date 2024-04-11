import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Admin {
  id: string;
  username: string;
  password: string;
  name: string;
  /* avatar is image */
  avatar: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (authenticated: boolean) => void;
  Admin: Admin;
  setAdmin: (Admin: Admin) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
export type { AuthContextType }; // Export the type as well

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Initialize state with local storage values or defaults
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
    return storedIsAuthenticated ? storedIsAuthenticated === "true" : false;
  });

  // Initialize customer state from local storage or defaults
  const [Admin, setAdmin] = useState<Admin>(() => {
    const storedCustomer = localStorage.getItem("Admin");
    return storedCustomer
      ? JSON.parse(storedCustomer)
      : {
          id: "",
          username: "",
          password: "",
          name: "",
          avatar: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated.toString());
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem("Admin", JSON.stringify(Admin));
  }, [Admin]);

  const setAuthenticated = (authenticated: boolean) => {
    setIsAuthenticated(authenticated);
    if (!authenticated) {
      setAdmin({
        id: "",
        username: "",
        password: "",
        name: "",
        avatar: "",
      });
    }
  };

  const setAdminData = (AdminData: Admin) => {
    setAdmin(AdminData);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated: setAuthenticated,
        Admin,
        setAdmin: setAdminData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
