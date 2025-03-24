import React from 'react';
import { createContext, useState } from 'react';

const MenuContext = createContext({ isOpen: false, setIsOpen: () => {} });

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export { MenuProvider };
export default MenuContext;
