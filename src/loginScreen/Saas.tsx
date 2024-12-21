import { FaGithub, FaBitbucket, FaGitlab } from 'react-icons/fa';
import { VscAzureDevops } from 'react-icons/vsc';
import Button from './Button';
const Saas = () => {
  return (
    <div className="mt-6 space-y-4 h-60 sm:mx-20 mx-2">
      <Button text="Sign in with Github">
        <FaGithub className="w-5 h-5" />
      </Button>
      <Button text="Sign in with Bitbucket">
        <FaBitbucket className="w-5 h-5 text-blue-700" />
      </Button>
      <Button text="Sign in with Azure Devops">
        <VscAzureDevops className="w-5 h-5 text-blue-700" />
      </Button>
      <Button text="Sign in with GitLab">
        <FaGitlab className="w-5 h-5 text-orange-600 " />
      </Button>
    </div>
  );
};

export default Saas;
