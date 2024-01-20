import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import harvardArt from './data/harvardArt';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.
            </p>
          </>
        ),
      },
      {
        path: '*',
        element: <h2>Page Not Found</h2>,
      },
      {
        path: '/galleries',
        element: <GalleryNavigation galleries={harvardArt} />,
      },
      {
        path: '/galleries/:galleryId',
        element: <GalleryView galleries={harvardArt} />,
      },
    ],
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
function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
