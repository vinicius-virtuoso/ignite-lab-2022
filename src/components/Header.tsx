import { useContext } from "react";
import { MenuContext } from "../Context/menu";
import { IconMenu } from "./IconMenu";
import { Logo } from "./Logo";

interface Sets {
  isOpen: boolean;
  setIsOpen: (state: boolean) => boolean;
}

export function Header() {
  const { isOpen, setIsOpen } = useContext<Sets>(MenuContext);

  return (
    <header className="fixed w-full py-5 px-5 flex items-center justify-between bg-gray-700 border-b border-gray-600 xl:justify-center h-[75px]">
      <Logo w="170" h="37" />

      <div className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
        <IconMenu isOpen={isOpen} color="#005687" />
      </div>
    </header>
  );
}
