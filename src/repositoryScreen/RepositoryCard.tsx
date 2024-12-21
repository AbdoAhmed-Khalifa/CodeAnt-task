import { BiCoinStack } from 'react-icons/bi';

type RepositoryCardProps = {
  name: string;
  type: string;
  language: string;
  size: string;
  updated: string;
};
const RepositoryCard = ({
  name,
  language,
  size,
  type,
  updated,
}: RepositoryCardProps) => {
  return (
    <>
      <div>
        <span className="font-semibold text-lg">{name}</span>
        <span className="ml-2 text-xs border px-1.5 bg-blue-50 border-blue-300 rounded-full  text-blue-700">
          {type}
        </span>
      </div>
      <div className="flex justify-between items-center max-w-80 ">
        <div className="text-sm flex items-center gap-2 ">
          <span>{language}</span>
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        </div>
        <div className="text-sm flex items-center gap-1 ">
          <BiCoinStack />
          <span>{size}</span>
        </div>
        <div className="text-sm ">Updated {updated}</div>
      </div>
    </>
  );
};
export default RepositoryCard;
