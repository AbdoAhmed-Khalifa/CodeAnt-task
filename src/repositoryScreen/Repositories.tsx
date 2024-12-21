import { repositories } from '../constant';
import RepositoryCard from './RepositoryCard';
import RepositoryHeader from './RepositoryHeader';

const Repositories = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <RepositoryHeader />
      <ul className="space-y-4">
        {repositories.map((repo, index) => (
          <li key={index} className=" border p-4 rounded space-y-2">
            <RepositoryCard {...repo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
