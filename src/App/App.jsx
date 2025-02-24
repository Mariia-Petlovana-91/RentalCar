import { Toaster } from 'react-hot-toast';
import {
  Routes,
  Route,
} from 'react-router-dom';
import {
  Suspense,
  lazy,
  useEffect,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  getCars,
  getCarById,
  getBrands,
} from '../api/api';

const Loader = lazy(() =>
  import(
    '../components/base/Loader/Loader'
  ),
);
const Home = lazy(() =>
  import(
    '../pages/Home/Home'
  ),
);
const CarsCatalog = lazy(() =>
  import(
    '../pages/CarsCatalog/CarsCatalog'
  ),
);
const CarDetails = lazy(() =>
  import(
    '../pages/CarDetails/CarDetails'
  ),
);
const NotFound = lazy(() =>
  import(
    '../pages/NotFound/NotFound'
  ),
);

import Layout from '../components/base/Layout/Layout';

export default function App() {
  getCars();
  getCarById(
    '11a3ab35-07b8-4336-b06b-602cdc309f2c',
  );
  getBrands();
  const isLoad = false;
  return (
    <>
      <Layout>
        {!isLoad ? (
          <Loader />
        ) : null}
        <Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />

            <Route
              path="/catalog"
              element={
                <CarsCatalog />
              }
            />
            <Route
              path="/catalog/:id"
              element={
                <CarDetails />
              }
            />
            <Route
              path="*"
              element={
                <NotFound />
              }
            />
          </Routes>
        </Suspense>
      </Layout>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background:
              ' #3470ff',
            color: '#ffffff',
            border:
              '1px solid #0b44cd',
          },
        }}
      />
    </>
  );
}
