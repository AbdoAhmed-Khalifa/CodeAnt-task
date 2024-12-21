import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
type buttonProps = {
  children: ReactNode;
  text: string;
};
const Button = ({ children, text }: buttonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/repository')}
      className="btn btn-outline border-gray-200 hover:bg-blue-50 w-full flex items-center justify-center px-4 py-2.5 border rounded-lg  hover:text-black gap-3 "
    >
      {children}
      <span className="font-semibold">{text}</span>
    </button>
  );
};
export default Button;
