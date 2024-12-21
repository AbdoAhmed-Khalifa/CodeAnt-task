import Navbar from './Navbar';
import Repositories from './Repositories';
import Sidebar from './Sidebar';

const RepositoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 sm:overflow-auto bg-gray-100 p-4">
          <Repositories />
        </main>
      </div>
    </>
  );
};
export default RepositoryPage;
