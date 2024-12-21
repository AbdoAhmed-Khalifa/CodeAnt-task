import ButtonGroup from './ButtonGroup';
import Input from './Input';

const RepositoryHeader = () => {
  return (
    <div className="mb-4 space-y-3">
      <div className="flex sm:items-center justify-between flex-col sm:flex-row">
        <div>
          <h2 className="text-2xl font-bold">Repositories</h2>
          <span className="text-sm text-gray-600">33 total repositories</span>
        </div>
        <ButtonGroup />
      </div>
      <Input />
    </div>
  );
};
export default RepositoryHeader;
