import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import ProtectedRoute from '../protected-route/protected-route';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offersCount={offersCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Root}
              >
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.NoAuth}
                redirectTo={AppRoute.Login}
              >
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route path={`${AppRoute.Offer}:/id`} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
