"use client";
import { createContext, useContext, useState } from "react";

const ReactRc = createContext();

export const RTProvider = ({ children }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [onFinish, setOnFinish] = useState(() => () => {});

  const startTransition = (callback) => {
    setIsAnimatingOut(true);
    setOnFinish(() => () => {
      callback();
      setIsAnimatingOut(false);
    });
  };

  return (
    <ReactRc.Provider value={{ isAnimatingOut, startTransition, onFinish }}>
      {children}
    </ReactRc.Provider>
  );
};

export const urt = () => useContext(ReactRc);
