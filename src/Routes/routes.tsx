import { Route } from 'react-router-dom';

import { CategoryListPage } from '../pages/CategoryListPage';
import { CategoryDetailPage } from '../pages/CategoryDetailPage';
import { RestaurantDetailPage } from '../pages/RestaurantDetailPage';
import { HomePage } from '../pages/HomePage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { SuccessPage } from '../pages/SuccessPage';

export const routes = (
  <>
    <Route path="/categories" element={<CategoryListPage />} />
    <Route path="/categories/:id" element={<CategoryDetailPage />} />
    <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/success" element={<SuccessPage />} />
    <Route path="/" element={<HomePage />} />
  </>
);
