import { ReactNode } from 'react';
import { Link } from 'react-router';

type NavLinkProps = {
  children: ReactNode;
  text: string;
  selected?: boolean;
};

const NavLink = ({ children, text, selected }: NavLinkProps) => {
  return (
    <li
      className={`p-2 rounded  ${
        selected && 'bg-blue-700 text-white rounded-lg '
      }`}
    >
      <Link className="flex items-center gap-2" to="/repository">
        {children}
        <span>{text}</span>
      </Link>
    </li>
  );
};
export default NavLink;
