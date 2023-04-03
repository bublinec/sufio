import { Navigate, Route, Routes } from 'react-router-dom';
import { Cart } from '../../pages/Cart';
import { Order } from '../../pages/Order';
import { Products } from '../../pages/Products';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}
