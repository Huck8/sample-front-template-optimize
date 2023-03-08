import { Outlet } from 'react-router-dom';
import Intro from '../../features/Intro/Intro';

const MainLayout = () => {
  return (
    <>
      <h1>FRONT TEMPLATE</h1>
      <Intro />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
