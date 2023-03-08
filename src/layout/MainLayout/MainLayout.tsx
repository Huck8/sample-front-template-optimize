import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <h1>FRONT TEMPLATE</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
