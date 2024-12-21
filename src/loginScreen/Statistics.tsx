import { IoPieChart } from 'react-icons/io5';

const Statistics = () => {
  return (
    <div className="relative mt-64">
      <div className="bg-white shadow-2xl rounded-xl py-4 w-96 ">
        <h2 className=" flex items-center text-lg gap-2 font-semibold  border-b-2 pb-3 px-4">
          <img src="logo.svg" className="w-6 h-6" />
          <span>AI to Detect & Autofix Bad Code</span>
        </h2>
        <div className="mt-4 flex justify-between text-center px-4">
          <div>
            <p className="text-lg font-bold ">30+</p>
            <p className="text-sm ">Language Support</p>
          </div>
          <div>
            <p className="text-lg font-bold ">10K+</p>
            <p className="text-sm  ">Developers</p>
          </div>
          <div>
            <p className="text-lg font-bold ">100K+</p>
            <p className="text-sm ">Hours Saved</p>
          </div>
        </div>
      </div>

      <div className="absolute top-32 left-52 bg-white shadow-2xl rounded-xl px-6 py-3 w-48">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-purple-100 p-2 rounded-full">
              <IoPieChart w-6 h-6 bg-purple-500 />
            </div>
          </div>
          <p className="text-sm  flex flex-col">
            <span className="text-xs text-blue-500">↑14%</span>{' '}
            <span className="text-xs ">This week</span>
          </p>
        </div>
        <div className="mt-4">
          <p className=" text-xs  font-bold">Issues Fixed</p>
          <p className=" text-2xl font-bold ">500K+</p>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
