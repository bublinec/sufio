import { Navigate, Route, Routes } from 'react-router-dom';
import { CartPage } from '../../pages/CartPage';
import { OrderPage } from '../../pages/OrderPage';
import { ProductsPage } from '../../pages/ProductsPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
}
