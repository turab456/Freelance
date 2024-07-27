import React, { createContext, useContext,useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const MyContext = createContext();

export const useAgency = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useKart must be used within a KartProvider");
  }
  return context;
};

const MyProvider = ({ children }) => {
const navigate=useNavigate();
const handleData=(item)=>{
console.log(item);
navigate(`services/${item.title}`,{state:item})
}



    return (
        <MyContext.Provider value={{handleData}}>
          {children}
        </MyContext.Provider>
      );
}

export default MyProvider;
