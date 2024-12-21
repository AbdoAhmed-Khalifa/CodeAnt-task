import { Route, Routes } from 'react-router';
import LoginPage from './loginScreen/LoginPage';
import RepositoryPage from './repositoryScreen/RepositoryPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/repository" element={<RepositoryPage />} />
    </Routes>
  );
};

export default App;
