import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Cart } from '../../pages/Cart';
import { Order } from '../../pages/Order';
import { Products } from '../../pages/Products';

// use plain object instead of JSX (which is the recommended way)
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/products" />,
    children: [
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'order',
        element: <Order />,
      },
    ],
  },
]);
