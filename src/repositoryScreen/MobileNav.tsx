import {
  IoCallOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import NavLink from './NavLink';
import { FaCode } from 'react-icons/fa';
import { CiCloudOn } from 'react-icons/ci';
import { LuBookText, LuLogOut } from 'react-icons/lu';
const MobileNav = () => {
  return (
    <div className="md:hidden absolute top-full left-0 w-full shadow-md flex flex-col gap-4 p-4 z-50 bg-white">
      <ul className=" flex flex-col gap-3 list-none">
        <div className="">
          <select className="select select-bordered w-full ">
            <option>Abdelrahman</option>
            <option>Ahmed khalifa</option>
          </select>
        </div>
        <NavLink selected text="Repositories">
          <IoHomeOutline className="w-5 h-5" />
        </NavLink>
        <NavLink text="AI Code Reviews">
          <FaCode className="w-5 h-5" />
        </NavLink>
        <NavLink text="Cloud Security">
          <CiCloudOn className="w-5 h-5" />
        </NavLink>
        <NavLink text="How to Use">
          <LuBookText className="w-5 h-5 " />
        </NavLink>
        <NavLink text="Settings">
          <IoSettingsOutline className="w-5 h-5" />
        </NavLink>
        <NavLink text="Support">
          <IoCallOutline className="w-5 h-5" />
        </NavLink>
        <NavLink text="Logout">
          <LuLogOut className="w-5 h-5" />
        </NavLink>
      </ul>
    </div>
  );
};
export default MobileNav;
