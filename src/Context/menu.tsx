import { createContext, useState } from "react";

export const MenuContext = createContext<any>(null);

export const MenuProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
