import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <h1>STAR WARS</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
