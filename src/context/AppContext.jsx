import React, { createContext, useState, useContext, Children } from "react";

// create context for user and course variables for the application
const AppContext = createContext();

// Provide values to children using provider
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // course will be an array because it will contain some data
  const [course, setCourse] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, course, setCourse }}>
      {children}
    </AppContext.Provider>
  );
};

// export the context for application
export const useAppContext = () => useContext(AppContext);
