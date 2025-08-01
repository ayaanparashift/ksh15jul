// 1. Create a context file - context/TabContext.js
"use client";
import { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [tab, setTab] = useState(null); // Possible values: 'news', 'press', etc.

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);
