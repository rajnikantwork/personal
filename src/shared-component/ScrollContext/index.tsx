import React, { createContext, useContext, useState, useCallback } from 'react';

interface ScrollContextProps {
  isScrolled: boolean;
  setIsScrolled: (value: boolean) => void;
}

const ScrollContext = createContext<ScrollContextProps>({
  isScrolled: false,
  setIsScrolled: () => {},
});

export const useScrollContext = () => useContext(ScrollContext);

const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const value = {
    isScrolled,
    setIsScrolled: useCallback((value: boolean) => setIsScrolled(value), []),
  };

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

export default ScrollProvider;
