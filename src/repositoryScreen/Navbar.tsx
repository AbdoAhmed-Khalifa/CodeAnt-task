import { useState } from 'react';
import Logo from '../components/Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <header className="top-0 left-0 right-0 z-50  block sm:hidden sticky bg-white">
      <div className="max-w-7xl mx-5">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <div className=" gap-3 flex">
            <Logo />
          </div>
          <button
            onClick={() => setIsOpen(prevState => !prevState)}
            className=" focus:outline-none sm:hidden flex items-center"
            aria-label="toggle menu"
          >
            {isOpen ? (
              <IoClose className="w-6 h-6 \" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && <MobileNav />}
    </header>
  );
};
export default Navbar;
