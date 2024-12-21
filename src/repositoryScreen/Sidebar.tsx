import { IoCallOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import Nav from './Nav';
import Logo from '../components/Logo';

const Sidebar = () => {
  return (
    <aside className="w-52 bg-white shadow-md h-full  flex-col hidden sm:flex">
      <div className="mx-auto my-8 gap-3 flex items-center justify-center">
        <Logo />
      </div>
      <div className="mx-4">
        <select className="select select-bordered w-full max-w-xs">
          <option>Abdelrahman</option>
          <option>Ahmed khalifa</option>
        </select>
      </div>
      <Nav />
      <div className="p-4  space-y-4">
        <button className="w-full text-left flex items-center gap-2">
          <IoCallOutline />
          <span>Support</span>
        </button>
        <button className="w-full text-left flex items-center gap-2">
          <LuLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
