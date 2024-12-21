import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa6';
import { CiCloudOn } from 'react-icons/ci';
import { LuBookText } from 'react-icons/lu';
import NavLink from './NavLink';
const Nav = () => {
  return (
    <nav className="flex-1">
      <ul className="space-y-1 p-4">
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
      </ul>
    </nav>
  );
};
export default Nav;
