import Button from './Button';
import { FaGitlab } from 'react-icons/fa';
import { IoKeyOutline } from 'react-icons/io5';

const SelfHosted = () => {
  return (
    <div className="mt-6 space-y-4 h-60  sm:mx-20 mx-2">
      <Button text="Self Hosted GitLab">
        <FaGitlab className="w-5 h-5 text-orange-600 " />
      </Button>
      <Button text="Sign in with SSO">
        <IoKeyOutline className="w-5 h-5" />
      </Button>
    </div>
  );
};
export default SelfHosted;
