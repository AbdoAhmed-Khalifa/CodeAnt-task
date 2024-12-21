import { FaPlus } from 'react-icons/fa6';
import { FiRefreshCcw } from 'react-icons/fi';
const ButtonGroup = () => {
  return (
    <div className="mt-4 flex flex-wrap sm:justify-end items-center gap-3">
      <button className="btn btn-sm bg-white border-2 border-gray-200 hover:bg-blue-50">
        <FiRefreshCcw />
        <span>Refresh All</span>
      </button>
      <button className="btn btn-sm text-white bg-blue-700 border-none hover:bg-blue-800 ">
        <FaPlus />
        <span>Add Repository</span>
      </button>
    </div>
  );
};
export default ButtonGroup;
