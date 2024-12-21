import { useState } from 'react';
import Saas from './Saas';
import SelfHosted from './SelfHosted';
import Logo from '../components/Logo';

const LoginForm = () => {
  const [btnNav, setBtnNav] = useState<'saas' | 'self-hosted'>('saas');
  return (
    <div className="bg-white shadow-lg rounded-lg p-3 sm:p-8">
      <div className="text-center">
        <div className="mx-auto mb-8 gap-3 flex items-center justify-center">
          <Logo />
        </div>
        <h1 className="text-3xl font-semibold ">Welcome to CodeAnt AI</h1>
        <div className="mt-4 flex justify-center border-2 rounded-xl">
          <button
            onClick={() => setBtnNav('saas')}
            className={`btn sm:btn-wide w-1/2 ${
              btnNav === 'saas'
                ? 'bg-blue-700 border-none hover:bg-blue-800 text-white'
                : 'bg-gray-300 border-none hover:bg-blue-50 '
            }`}
          >
            SAAS
          </button>
          <button
            onClick={() => setBtnNav('self-hosted')}
            className={`btn sm:btn-wide w-1/2 ${
              btnNav === 'self-hosted'
                ? 'bg-blue-700 border-none hover:bg-blue-800 text-white'
                : 'bg-gray-300 border-none hover:bg-blue-50 '
            }`}
          >
            Self Hosted
          </button>
        </div>
      </div>
      {btnNav === 'saas' && <Saas />}
      {btnNav === 'self-hosted' && <SelfHosted />}
    </div>
  );
};
export default LoginForm;
