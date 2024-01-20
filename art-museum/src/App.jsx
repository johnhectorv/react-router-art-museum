import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArt';

const router = createBrowserRouter([
  {
    path: '*',
    element: <h2>Page not found</h2>,
  },
  {
    path: '/',
    element: (
      <>
        <h2>Harvard Art Museum</h2>
        <p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.</p>
      </>
    ),
  },
  {
    path: 'galleries',
    element: <GalleryNavigation galleries={harvardArt} />,
  },
]);

function App() {
  console.log(harvardArt);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
