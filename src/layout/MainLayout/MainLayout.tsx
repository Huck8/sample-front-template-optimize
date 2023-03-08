import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <h1>FRONT TEMPLATE</h1>
      <p>
        Radio telescope light years concept of the number one Jean-François
        Champollion ship of the imagination inconspicuous motes of rock and gas.
        Globular star cluster worldlets Cambrian explosion white dwarf
        permanence of the stars vanquish the impossible. Vanquish the impossible
        made in the interiors of collapsing stars Sea of Tranquility realm of
        the galaxies worldlets a very small stage in a vast cosmic arena?
        Extraordinary claims require extraordinary evidence made in the
        interiors of collapsing stars Drake Equation with pretty stories for
        which there's little good evidence the only home we've ever known Drake
        Equation and billions upon billions upon billions upon billions upon
        billions upon billions upon billions.
      </p>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
