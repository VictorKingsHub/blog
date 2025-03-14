"use client"; // Add "use client" directive

import React, { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const subscribeRef = useRef(null);

  const scrollToSubscribe = () => {
    if (subscribeRef.current) {
      subscribeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ subscribeRef, scrollToSubscribe }}>
      {children}
    </ScrollContext.Provider>
  );
};
