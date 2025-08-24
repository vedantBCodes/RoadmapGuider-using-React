import React, { createContext, useState } from "react";

export const JoinContext = createContext();

export const JoinProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  return (
    <JoinContext.Provider value={{ formData, setFormData }}>
      {children}
    </JoinContext.Provider>
  );
};
